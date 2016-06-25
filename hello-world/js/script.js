/* Component definition */
var Hello = flight.component(hello);

function hello() {
  this.sayHello = function() {
    alert('Hello World!');
  },

  // after initializing the component
  this.after('initialize', function() {
    this.on('click', this.sayHello);
  });
}

/* Attach the component to a DOM node */
Hello.attachTo('#hello');