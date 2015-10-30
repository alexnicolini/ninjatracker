FlowRouter.route('/', { // Create a new route in Flow Router
  name: 'Dashboard',
  action() {
    ReactLayout.render(App, {
      content: <Dashboard />,
      nav: <Nav />
    });
  }
});

FlowRouter.route('/request', { // Create a new route in Flow Router
  name: 'RequestForm',
  action() {
    ReactLayout.render(RequestForm);
  }
});

FlowRouter.route('/new-ninja', { // Create a new route in Flow Router
  name: 'NewNinja',
  action() {
    ReactLayout.render(App, {
      content: <NewNinja />,
      nav: <Nav />
    });
  }
});