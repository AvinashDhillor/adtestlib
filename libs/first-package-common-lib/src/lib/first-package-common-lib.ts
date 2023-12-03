import * as _ from 'lodash';

export function firstPackageCommonLib(): string {
  return 'first-package-common-lib';
}

export function thisDoSum(): number {
  const data = {
    name: 'avinash',
  };

  const name = _.get(data, 'name');
  console.log(name);

  return 5000 + 1000;
}

export function thisDoSub(): number {
  return 10 - 5;
}
