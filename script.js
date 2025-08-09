function dragAndDrop() {
  const selectors = {
    root: '[data-js-dnd]',
  };

  const stateClasses = {
    isDragging: 'is-dragging',
  };

  const initialState = {
    offsetX: null,
    offsetY: null,
    isDragging: false,
    currentDraggingElement: null,
  };

  let state = { ...initialState };

  const resetState = () => {
    state = { ...initialState };
  };

  const onPointerDown = (event) => {
    const { target, x, y } = event;
    const isDrggable = target.matches(selectors.root);

    if (!isDrggable) {
      return;
    }

    target.classList.add(stateClasses.isDragging);

    const { left, top } = target.getBoundingClientRect();

    state = {
      offsetX: x - left,
      offsetY: y - top,
      isDragging: true,
      currentDraggingElement: target,
    };
  };

  const onPointerMove = (event) => {
    if (!state.isDragging) {
      return;
    }

    const x = event.pageX - state.offsetX;
    const y = event.pageY - state.offsetY;

    state.currentDraggingElement.style.left = `${x}px`;
    state.currentDraggingElement.style.top = `${y}px`;
  };

  const onPointerUp = () => {
    if (!state.isDragging) {
      return;
    }

    state.currentDraggingElement.classList.remove(stateClasses.isDragging);
    resetState();
  };

  const bindEvents = () => {
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
  };

  bindEvents();
}

dragAndDrop();
