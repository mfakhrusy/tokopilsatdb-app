export const underscoreCaseToCamelCase = (input) => {
  if (typeof input !== 'string') {
    return input;
  }
  const regex = /_\w/g;
  return input.replace(regex, (s) => s[1].toUpperCase());
};
