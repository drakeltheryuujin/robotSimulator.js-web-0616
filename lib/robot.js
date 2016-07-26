'use strict';

class Robot {
  constructor(bearing, coordinates) {
    this.bearing = bearing
    this.coordinates = coordinates
  }
  orient(direction) {
    if (direction === 'north' || direction === 'south' || direction === 'east' || direction === 'west') {
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }
  turnRight(){
    if (this.bearing === "north") {this.bearing = "east"}
    else if (this.bearing === "east"){this.bearing = "south"}
    else if (this.bearing === "south"){this.bearing = "west"}
    else if (this.bearing === "west"){this.bearing = "north"}
  }
  turnLeft(){
    if (this.bearing === "north") {this.bearing = "west"}
    else if (this.bearing === "west"){this.bearing = "south"}
    else if (this.bearing === "south"){this.bearing = "east"}
    else if (this.bearing === "east"){this.bearing = "north"}
  }
  at(x, y) {
    this.coordinates = [x, y]
  }
  advance(){
    if (this.bearing === "north") {this.coordinates[1]++}
    else if (this.bearing === "west"){this.coordinates[0]--}
    else if (this.bearing === "south"){this.coordinates[1]--}
    else if (this.bearing === "east"){this.coordinates[0]++}
  }
  instructions(string) {
    var commands = string.split("")
    var commands_array = commands.map(function (command) {
      if (command === "R") {
        return "turnRight"
      } else if (command === "L") {
        return "turnLeft"
      } else if (command === "A") {
        return "advance"
      }
    })
    return commands_array
  }
  place(object) {
    this.orient(object.direction)
    this.at(object.x, object.y)
  }
  evaluate(string) {
    var commands = this.instructions(string)
    for (var i = 0; i < commands.length; i++){
      this[commands[i]]()
    }
  }
}

