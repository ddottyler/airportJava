class Plane {

  constructor(name) {
    this.name = name;
  }

  land(airport) {
    airport.clearForLanding(this.name)
  };

  takeoff(airport) {
    airport.clearForTakeOff(this.name)
  }

};