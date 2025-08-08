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

  resetState() {
    this.state = { ...this.initialState };
  }

  onPointerDown(event) {
    const { target, x, y } = event;
    const isDrggable = target.matches(this.selectors.root);

    if (!isDrggable) {
      return;
    }

    target.classList.add(this.stateClasses.isDrgging);

    const { left, top } = target.getBoundingClientRect();

    this.state = {
      offsetX: x - left,
      offsetY: y - top,
      isDragging: true,
      currentDraggingElement: target,
    };
  }

  bindEvents() {
    document.addEventListener('pointerdown', (event) => this.onPointerDown(event));
    document.addEventListener('pointermove', (event) => this.onPointerMove(event));
    document.addEventListener('pointerup', () => this.onPointerUp());
  }
}

new DragAndDrop();
