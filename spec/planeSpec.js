describe("Plane", () => {
  var plane;
  var airport;

  beforeEach(() => {
    plane = new Plane();
    airport = jasmine.createSpyObj("airport", [
      "clearForLanding",
      "clearForTakeOff",
    ]);
  });

  it("is an instance of plane", () => {
    expect(plane).toBeInstanceOf(Plane);
  });

  it("can land at an airport", () => {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it("can take off from an airport", () => {
    plane.takeoff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });
});
