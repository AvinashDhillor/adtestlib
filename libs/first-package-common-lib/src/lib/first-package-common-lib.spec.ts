import { firstPackageCommonLib } from './first-package-common-lib';

describe('firstPackageCommonLib', () => {
  it('should work', () => {
    expect(firstPackageCommonLib()).toEqual('first-package-common-lib');
  });
});
