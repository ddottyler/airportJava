class Plane {

  land(airport) {
    airport.clearForLanding(this)
  };

  takeoff(airport) {
    airport.clearForTakeOff(this)
  }

};