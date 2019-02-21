import { ChannelService } from './channel.service';

describe('ChannelService', () => {

  let channelService: ChannelService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    channelService = new ChannelService(<any> httpClientSpy);

  });

  it('should be created', () => {
    expect(channelService).toBeTruthy();
  });

});