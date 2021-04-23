// Frank Poth 03/09/2018

/* The keyDownUp handler was moved to the main file. */
// takes keyboard input

const Controller = function() {

  this.left  = new Controller.ButtonInput();
  this.right = new Controller.ButtonInput();
  this.up    = new Controller.ButtonInput();

  this.keyDownUp = function(type, key_code) {

    var down = (type == "keydown") ? true : false;
    
// 37, 38, 39 are arrow keys
    switch(key_code) {

      case 37: this.left.getInput(down);  break; 
      case 38: this.up.getInput(down);    break;
      case 39: this.right.getInput(down);

    }

  };

};

Controller.prototype = {

  constructor : Controller

};

Controller.ButtonInput = function() {

  this.active = this.down = false; // here .down means button is held 

};

Controller.ButtonInput.prototype = {

  constructor : Controller.ButtonInput,

  getInput : function(down) {

    if (this.down != down) this.active = down;
    this.down = down;

  }

};