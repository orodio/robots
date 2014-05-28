var boundGrid = require('./boundGrid');

function testSet(set, fn, expectation, msg) {
  set.forEach(function (d) {
    it(d + " " + msg, function () {
      expect(fn(d)).toBe(expectation);
    });
  });
}

describe('boundGrid: ', function () {
  describe('1x1 Grid: ', function () {
    var grid = boundGrid(1, 1);
    var values = {
      x: { valid: [0], invalid: [-2,-1,1,2] },
      y: { valid: [0], invalid: [-2,-1,1,2] }
    };

    testSet( values.x.valid, grid.inX, true, 'is Valid x-axis number' );
    testSet( values.x.invalid, grid.inX, false, 'is INVALID x-axis number' );
    testSet( values.y.valid, grid.inY, true, 'is Valid y-axis number' );
    testSet( values.y.invalid, grid.inY, false, 'is INVALID y-axis number' );

    it('is inGrid 0,0', function () { expect(grid.inGrid(0,0)).toBe(true); });
    it('is inGrid 1,0', function () { expect(grid.inGrid(1,0)).toBe(false); });
    it('is inGrid 0,1', function () { expect(grid.inGrid(0,1)).toBe(false); });

    it('is inGrid {0,0}', function () { expect(grid.inGrid({x: 0, y: 0})).toBe(true); });
    it('is inGrid {1,0}', function () { expect(grid.inGrid({x: 1, y: 0})).toBe(false); });
    it('is inGrid {0,1}', function () { expect(grid.inGrid({x: 0, y: 1})).toBe(false); });
  });

  describe('5x1 Grid: ', function () {
    var grid = boundGrid(5, 1);
    var values = {
      x: { valid: [0,1,2,3,4], invalid: [-2,-1,5,6] },
      y: { valid: [0], invalid: [-2,-1,1,2] }
    };

    testSet(values.x.valid, grid.inX, true, 'is Valid x-axis number' );
    testSet(values.x.invalid, grid.inX, false, 'is INVALID x-axis number');
    testSet(values.y.valid, grid.inY, true, 'is Valid y-axis number' );
    testSet(values.y.invalid, grid.inY, false, 'is INVALID y-axis number');
  });

  describe('1x5 Grid: ', function () {
    var grid = boundGrid(1, 5);
    var values = {
      x: { valid: [0], invalid: [-2,-1,1,2] },
      y: { valid: [0,1,2,3,4], invalid: [-2,-1,5,6] }
    };

    testSet(values.x.valid, grid.inX, true,  'is Valid x-axis number' );
    testSet(values.x.invalid, grid.inX, false, 'is INVALID x-axis number');
    testSet(values.y.valid, grid.inY, true,  'is Valid y-axis number' );
    testSet(values.y.invalid, grid.inY, false, 'is INVALID y-axis number');
  });

  describe('5x5 Grid: ', function () {
    var grid = boundGrid(); // Defaults to 5x5
    var values = {
      x: { valid: [0,1,2,3,4], invalid: [-2,-1,5,6] },
      y: { valid: [0,1,2,3,4], invalid: [-2,-1,5,6] }
    };

    testSet(values.x.valid, grid.inX, true,  'is Valid x-axis number' );
    testSet(values.x.invalid, grid.inX, false, 'is INVALID x-axis number');
    testSet(values.y.valid, grid.inY, true,  'is Valid y-axis number' );
    testSet(values.y.invalid, grid.inY, false, 'is INVALID y-axis number');
  });

  describe('10x10 Grid: ', function () {
    var grid = boundGrid(10, 10);
    var values = {
      x: { valid: [0,1,2,3,4,6,7,8,9], invalid: [-2,-1,10,11] },
      y: { valid: [0,1,2,3,4,6,7,8,9], invalid: [-2,-1,10,11] }
    };

    testSet(values.x.valid, grid.inX, true,  'is Valid x-axis number' );
    testSet(values.x.invalid, grid.inX, false, 'is INVALID x-axis number');
    testSet(values.y.valid, grid.inY, true,  'is Valid y-axis number' );
    testSet(values.y.invalid, grid.inY, false, 'is INVALID y-axis number');
  });
});
