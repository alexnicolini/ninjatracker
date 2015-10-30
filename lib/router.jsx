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