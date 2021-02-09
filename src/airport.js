class Airport {
  constructor() {
    this._hangar = [];
  }

  planes() {
    return this._hangar;
  }

  clearForLanding(plane) {
    this._hangar.push(plane);
  };

  clearForTakeOff(plane) {
    if(this.isStormy()){
      throw new Error('cannot takeoff during storm');
    }
    let planeIndex = this._hangar.indexOf(plane);
    this._hangar.splice(planeIndex, 1)
  }

  isStormy() {
    return false;
  }

};
