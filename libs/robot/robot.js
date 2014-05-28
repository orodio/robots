var grid = require('../boundGrid/boundGrid'),
    Position = require('../position/position');

function Robot () { return this; }

Robot.prototype = {
  place: function (x, y, direction) {
    this.grid = grid();
    var pos = new Position(parseInt(x,10), parseInt(y,10), direction);
    if (this.grid.inGrid(pos)) this.position = pos;
    return this;
  },

  move: function () {
    if (this.grid === undefined || this.position === undefined) return this;
    var pos = this.position.move();
    if (this.grid.inGrid(pos)) this.position = pos;
    return this;
  },

  left: function () {
    if (this.grid === undefined || this.position === undefined) return this;
    this.position = this.position.turn('left');
    return this;
  },

  right: function () {
    if (this.grid === undefined || this.position === undefined) return this;
    this.position = this.position.turn('right');
    return this;
  },

  report: function () {
    if (this.grid === undefined || this.position === undefined) {
      console.log('place me');
      return 'place me'; 
    }
    console.log(this.position.report());
    return this.position.report();
  }
};

module.exports = Robot;
