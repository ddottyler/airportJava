describe("featureTest", function () {
  var plane;
	var plane2;
  var airport;

  beforeEach(function () {
    plane = new Plane('plane');
	  plane2 = new Plane('plane2');
    airport = new Airport();
  });

  it("planes can be instructed to land at an airport", function () {
    plane.land(airport);
    expect(airport.planes()).toContain(plane.name);
  });

  it("planes can be instructed to takeoff at an airport", () => {
		plane.land(airport)
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane.name);
  });

	it("multiple planes can land at the airport", () => {
		plane.land(airport);
		plane2.land(airport);
		expect(airport.planes().length).toEqual(2);
	});

	it("one plane can take off when there are multiple at the airport", () => {
		plane.land(airport);
		plane2.land(airport);
		plane2.takeoff(airport);
		expect(airport.planes().length).toEqual(1);
		expect(airport.planes()).not.toContain(plane2.name);
		expect(airport.planes()).toContain(plane.name);
	});

	it('blocks tackoff when weather is stormy', () => {
		plane.land(airport)
		spyOn(airport, 'isStormy').and.returnValue(true);
		expect(function(){ plane.takeoff(airport);}).toThrowError('cannot takeoff during storm');
		expect(airport.planes()).toContain(plane.name);
	});

});
