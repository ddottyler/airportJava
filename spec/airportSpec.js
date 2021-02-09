describe("Airport", () => {
  var airport;
  beforeEach(() => {
    airport = new Airport();
  });
  it("has not planes by default", () => {
    expect(airport.planes()).toEqual([]);
  });
});
