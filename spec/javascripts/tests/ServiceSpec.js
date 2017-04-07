describe('Missions', function () {
	var $httpBackend,
			$q,
			remote,
			vehicleIcons,
			planetIcons,
			planets,
			vehicles;

  beforeEach(function() {
    module('galaxy');
    module(function($provide) {
      $provide.value("remote", remote);
      $provide.value("vehicleIcons", vehicleIcons);
      $provide.value("planetIcons", planetIcons);
    });

    inject(function ($injector, _$q_) {
      $httpBackend  = $injector.get('$httpBackend');
      $q = _$q_;
    });
  });

  it("missions should be empty at start", function () {
    expect(1).toEqual(1);
  });


  afterEach(function () {
    //$httpBackend.verifyNoOutstandingExpectation();
    //$httpBackend.verifyNoOutstandingRequest();
  });
});