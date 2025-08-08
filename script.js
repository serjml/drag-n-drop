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
    isDragging: false,
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

  onPointerMove(event) {
    if (!this.state.isDragging) {
      return;
    }

    const x = event.pageX - this.state.offsetX;
    const y = event.pageY - this.state.offsetY;

    this.state.currentDraggingElement.style.left = `${x}px`;
    this.state.currentDraggingElement.style.top = `${y}px`;
  }

  bindEvents() {
    document.addEventListener('pointerdown', (event) => this.onPointerDown(event));
    document.addEventListener('pointermove', (event) => this.onPointerMove(event));
    document.addEventListener('pointerup', () => this.onPointerUp());
  }
}

new DragAndDrop();
