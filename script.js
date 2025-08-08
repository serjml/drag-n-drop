class DragAndDrop {
  selectors = {
    root: '[data-js-dnd]',
  };

  stateClasses = {
    isDrgging: 'is-dragging',
  };

  initialState = {
    offsetX: null,
    offsetY: null,
    isDrgging: false,
    currentDraggingElement: null,
  };

  constructor() {
    this.state = { ...this.initialState };
    this.bindEvents;
  }

  bindEvents() {
    document.addEventListener('pointerdown', (event) => this.onPointerDown(event));
    document.addEventListener('pointermove', (event) => this.onPointerMove(event));
    document.addEventListener('pointerup', () => this.onPointerUp());
  }
}

new DragAndDrop();
