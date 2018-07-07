let container;

function setContainer(newContainer) {
  container = newContainer;
}

function dispatch(action) {
  container.dispatch(action);
}

function getCurrentRoute() {
  if (!container || !container.state.nav) {
    return null;
  }

  return container.state.nav.routes[container.state.nav.index] || null;
}

export default {
  dispatch,
  setContainer,
  getCurrentRoute,
};
