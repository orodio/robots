var Robot = require('./robot.js');

describe('Robot: ', function () {
  describe('Wont do anything until you put it on the table: ', function () {
    var robot = new Robot();
    it('Wont Move', function () { expect(robot.move().position).toBe(undefined); });
    it('Wont Turn Left',  function () { expect(robot.left().position).toBe(undefined); });
    it('Wont Turn Right', function () { expect(robot.right().position).toBe(undefined); });
    it('Special Report',  function () { expect(robot.report()).toBe('place me'); });
  });

  describe('It wont go anywhere but the table: ', function () {
    var robot = new Robot();
    it('Wont go above it',    function () { expect(robot.place(0,100,"NORTH").position).toBe(undefined); });
    it('Wont go below it',    function () { expect(robot.place(0,-100,"NORTH").position).toBe(undefined); });
    it('Wont go right of it', function () { expect(robot.place(100,0,"NORTH").position).toBe(undefined); });
    it('Wont go left of it',  function () { expect(robot.place(-100,0,"NORTH").position).toBe(undefined); });
  });

  describe('It will go on the table though: ', function () {
    var robot = new Robot();
    it('Will go in the bottom left corner', function () {
      robot.place(0,0,"NORTH");
      expect(robot.report()).toBe('0,0,NORTH');
    });
  });

  describe('It can do all sorts of things when it gets on the table: ', function () {
    var robot = new Robot().place(2,2,"NORTH");
    it('Is actually on the table', function () { expect(robot.position).not.toBe(undefined); });
    it('Can turn Left (NORTH -> WEST)', function () { expect(robot.left().position.direction).toBe("WEST"); });
    it('Can turn Right (WEST -> NORTH)', function () { expect(robot.right().position.direction).toBe("NORTH"); });
    it('Can move forward', function () { expect(robot.move().position.y).toBe(3); });
    it('Can report', function () { expect(robot.report()).toBe('2,3,NORTH'); });
  });

  describe('It wont fall off the edge: ', function () {
    var robot = new Robot().place(0,0,"NORTH");
    it('Stops at 0,4,NORTH', function () {
      robot.move().move().move().move().move().move().move();
      expect(robot.report()).toBe('0,4,NORTH');
    });

    it('Turns right and then stops at 4,4,EAST', function () {
      robot.right().move().move().move().move().move().move().move();
      expect(robot.report()).toBe('4,4,EAST');
    });

    it('Turns right again and then stops at 4,0,SOUTH', function () {
      robot.right().move().move().move().move().move().move().move();
      expect(robot.report()).toBe('4,0,SOUTH');
    });

    it('Turns right again and then stops at back at orgin 0,0,WEST', function () {
      robot.right().move().move().move().move().move().move().move();
      expect(robot.report()).toBe('0,0,WEST');
    });
  });
});
