import cloneDeep from "lodash.clonedeep";

/**
 * Reset state to its initial values
 */
export const resetState = <T extends Record<string, unknown>>(
  state: T,
  initialValues: T
) => {
  const resetObj = cloneDeep(initialValues);
  Object.keys(resetObj).forEach((key: keyof T) => {
    state[key] = resetObj[key];
  });
};
