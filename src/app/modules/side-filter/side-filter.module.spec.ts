import { SideFilterModule } from './side-filter.module';

describe('SideFilterModule', () => {
  let sideFilterModule: SideFilterModule;

  beforeEach(() => {
    sideFilterModule = new SideFilterModule();
  });

  it('should create an instance', () => {
    expect(sideFilterModule).toBeTruthy();
  });
});
