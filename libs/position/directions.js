var directions = {
  "NORTH": {
    right: "EAST",
    left: "WEST",
    movement: { x: 0, y: 1 }
  },

  "EAST": {
    right: "SOUTH",
    left: "NORTH",
    movement: { x: 1, y: 0 }
  },

  "SOUTH": {
    right: "WEST",
    left: "EAST",
    movement: { x: 0, y: -1 }
  },

  "WEST": {
    right: "NORTH",
    left: "SOUTH",
    movement: { x: -1, y: 0 }
  }
};

module.exports = directions;
