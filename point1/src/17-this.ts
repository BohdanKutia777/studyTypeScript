const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// <button onClick="myClickHandler">Click me!</button>
function myClickHandler(event: Event) {
  this.disabled = true;
}
