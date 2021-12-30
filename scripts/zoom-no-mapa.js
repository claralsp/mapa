'use strict';

class ImagemComZoom {
  constructor(el) {
    this.containerEl = el;
    this.minScale = 1;
    this.maxScale = 4;
    this.displayImageX = 0;
    this.displayImageY = 0;
    this.displayImageScale = 1;

    this.rangeX = 0;
    this.rangeMaxX = 0;
    this.rangeMinX = 0;

    this.rangeY = 0;
    this.rangeMaxY = 0;
    this.rangeMinY = 0;

    this.displayImageRangeY = 0;

    this.displayImageCurrentX = 0;
    this.displayImageCurrentY = 0;
    this.displayImageCurrentScale = 1;

    this.resizeContainer = this.resizeContainer.bind(this);
    this.wheel = this.wheel.bind(this);
    this.pan = this.pan.bind(this);
    this.pinch = this.pinch.bind(this);
    this.panFinish = this.panFinish.bind(this);

    this.displayImage = this.containerEl.querySelector('.base');
    this.layers = [...this.containerEl.querySelectorAll('.camada')];
    this.pins = [...this.containerEl.querySelectorAll('.marcador')];
    this.scrollingEl = this.containerEl.closest('.scrolling-element');

    this.hammertime = new Hammer(this.containerEl, { domEvents: true });
  }

  activateEvents() {
    window.addEventListener('resize', this.resizeContainer, true);
    this.containerEl.addEventListener('wheel', this.wheel, false);
    this.hammertime.get('pinch').set({ enable: true });
    this.hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    this.hammertime.on('pan', this.pan);
    this.hammertime.on('pinch pinchmove', this.pinch);
    this.hammertime.on('panend pancancel pinchend pinchcancel', this.panFinish);

    this.resizeContainer();
    this.imageWidth = this.displayImage.width;
    this.imageHeight = this.displayImage.height;
    this.containerEl.appendChild(this.displayImage);
    this.displayImage.addEventListener('mousedown', e => e.preventDefault(), false);
    this.displayDefaultWidth = this.displayImage.offsetWidth;
    this.displayDefaultHeight = this.displayImage.offsetHeight;
    this.rangeX = Math.max(0, this.displayDefaultWidth - this.containerWidth);
    this.rangeY = Math.max(0, this.displayDefaultHeight - this.containerHeight);
  }

  deactivateEvents() {
    window.removeEventListener('resize', this.resizeContainer, true);
    this.hammertime.get('pinch').set({ enable: false });
    this.containerEl.removeEventListener('wheel', this.wheel, false);
    this.hammertime.off('pan', this.pan);
    this.hammertime.off('pinch pinchmove', this.pinch);
    this.hammertime.off('panend pancancel pinchend pinchcancel', this.panFinish);
  }

  wheel(ev) {
    const oldImageScale = this.displayImageScale;
    this.displayImageScale = this.displayImageCurrentScale = this.clampScale(this.displayImageScale + (ev.wheelDelta / 800));
    this.updateRange();
    this.displayImageCurrentX = ImagemComZoom.clamp(this.displayImageCurrentX, this.rangeMinX, this.rangeMaxX)
    this.displayImageCurrentY = ImagemComZoom.clamp(this.displayImageCurrentY, this.rangeMinY, this.rangeMaxY)
    this.updateDisplayImage(this.displayImageCurrentX, this.displayImageCurrentY, this.displayImageScale);
    
    // se usou scroll pra fazer zoom, consome o evento da barra de rolagem
    if (oldImageScale !== this.displayImageScale) {
      ev.preventDefault();
    }
  }

  pan(ev) {
    this.displayImageCurrentX = ImagemComZoom.clamp(this.displayImageX + ev.deltaX, this.rangeMinX, this.rangeMaxX);
    this.displayImageCurrentY = ImagemComZoom.clamp(this.displayImageY + ev.deltaY, this.rangeMinY, this.rangeMaxY);    
    this.updateDisplayImage(this.displayImageCurrentX, this.displayImageCurrentY, this.displayImageScale);
    
    // deixa o usuário rolar a página mesmo arrastando o mapa, caso ele não mude de lugar
    if (ev.deltaY !== 0 && this.displayImageY === this.displayImageCurrentY) {
      this.scrollingEl.scrollBy(0, -ev.deltaY * 0.04);
    }
  }

  pinch(ev) {
    this.displayImageCurrentScale = this.clampScale(ev.scale * this.displayImageScale);
    this.updateRange();
    this.displayImageCurrentX = ImagemComZoom.clamp(this.displayImageX + ev.deltaX, this.rangeMinX, this.rangeMaxX);
    this.displayImageCurrentY = ImagemComZoom.clamp(this.displayImageY + ev.deltaY, this.rangeMinY, this.rangeMaxY);
    this.updateDisplayImage(this.displayImageCurrentX, this.displayImageCurrentY, this.displayImageCurrentScale);
  }

  panFinish() {
    this.displayImageScale = this.displayImageCurrentScale;
    this.displayImageX = this.displayImageCurrentX;
    this.displayImageY = this.displayImageCurrentY;
  }

  resizeContainer() {
    this.containerWidth = this.containerEl.offsetWidth;
    this.containerHeight = this.containerEl.offsetHeight;
    if (this.displayDefaultWidth !== undefined && this.displayDefaultHeight !== undefined) {
      this.displayDefaultWidth = this.displayImage.offsetWidth;
      this.displayDefaultHeight = this.displayImage.offsetHeight;
      this.updateRange();
      this.displayImageCurrentX = ImagemComZoom.clamp(this.displayImageX, this.rangeMinX, this.rangeMaxX);
      this.displayImageCurrentY = ImagemComZoom.clamp(this.displayImageY, this.rangeMinY, this.rangeMaxY);
      this.updateDisplayImage(
        this.displayImageCurrentX,
        this.displayImageCurrentY,
        this.displayImageCurrentScale);
    }
  }

  static clamp(value, min, max) {
    return Math.min(Math.max(min, value), max);
  }

  clampScale(newScale) {
    return ImagemComZoom.clamp(newScale, this.minScale, this.maxScale);
  }

  updateDisplayImage(x, y, scale) {
    const transform = `translateX(${x}px) translateY(${y}px) translateZ(0px) scale(${scale})`;
    this.layers.forEach(el => {
      el.style.transitionProperty = 'opacity';
      el.style.transform = transform
    });
    this.pins.forEach(el => {
      el.style.transform = `scale(${1 / scale})`;
    })

    setTimeout(() => {
      this.layers.forEach(el => {
        el.style.transitionProperty = null;
      });
    }, 750);
  }

  updateRange() {
    this.rangeX = Math.max(0, Math.round(this.displayDefaultWidth * this.displayImageCurrentScale) - this.containerWidth);
    this.rangeY = Math.max(0, Math.round(this.displayDefaultHeight * this.displayImageCurrentScale) - this.containerHeight);

    this.rangeMaxX = Math.round(this.rangeX / 2);
    this.rangeMinX = 0 - this.rangeMaxX;

    this.rangeMaxY = Math.round(this.rangeY / 2);
    this.rangeMinY = 0 - this.rangeMaxY;
  }
}



const mapas = [...document.querySelectorAll('.mapa-com-camadas')];
window.mapasComCamadas = mapas.map(el => new ImagemComZoom(el));

// ativa os eventos de zoom do mapa que está sendo mostrado no momento
mapas.map(el => el.querySelector('.camada.base')).forEach(el => {
  if (el.complete) {
    setTimeout(() => {
      imageLoaded({ currentTarget: el });
    }, 0);
  } else {
    el.addEventListener('load', imageLoaded);
  }
});

function imageLoaded(e) {
  const mapaEl = e.currentTarget.closest('.mapa-com-camadas').closest('.row')
  const indiceMapaAtual = window.campusAtual?.usuarioVendo === 'novaSuica' ? 0 : 1;

  if (mapaEl.id === 'mapa2' && window.campusAtual.usuarioVendo === 'novaGameleira') {
    window.mapasComCamadas[indiceMapaAtual].activateEvents();
  } else if (mapaEl.id === 'mapa1' && window.campusAtual.usuarioVendo === 'novaSuica') {
    window.mapasComCamadas[indiceMapaAtual].activateEvents();
  }
}