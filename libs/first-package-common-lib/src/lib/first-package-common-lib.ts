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

  return 5010 + 1000;
}

export function thisDoSub(): number {
  return 10 - 1;
}

export function newFunction(): number {
  return 111;
}

export function aaa(): number {
  return 222;
}
