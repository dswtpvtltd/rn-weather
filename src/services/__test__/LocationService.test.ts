import LocationService from '../LocationService';

describe('LocationService', () => {
  test('should return latitude & longtude from current location', async () => {
    const position = await LocationService.getCurrentPosition();
  });
});
