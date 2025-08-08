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
    this.state = {
      ...this.initialState,
    };
  }
}

new DragAndDrop();
