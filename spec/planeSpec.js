describe("Plane", () => {
  var plane;

  beforeEach(() => {
    plane = new Plane();
  });

  it("is an instance of plane", () => {
    expect(plane).toBeInstanceOf(Plane);
  });

  it("can land at an airport", () => {
    expect(plane.land).not.toBeUndefined();
  });
});
