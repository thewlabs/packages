export const normalizeValueToStringArray = (value?: string | string[]): string[] => {
  if (value) {
    return Array.isArray(value) ? value : [value];
  }

  return [];
};

// Disable FP rules here to use the performant approach while keep the function itself "FP"
/* eslint-disable @silverhand/fp/no-let, @silverhand/fp/no-mutation */
export const repeat = <T>(times: number, initial: T, iterate: (accumulator: T) => T) => {
  let result = initial;

  while (times--) {
    result = iterate(result);
  }

  return result;
};
/* eslint-enable @silverhand/fp/no-let, @silverhand/fp/no-mutation */

export const deduplicate = <T>(array: T[]) => [...new Set(array)];
