const validateColors = (startColor: number[], endColor: number[]) => {
  if (!Array.isArray(startColor)) {
    throw new Error(
      `startColor should be an Array of RGB colors like: [ Red Value, Green Value, Blue Value ]`
    );
  }
  if (startColor.length != 3) {
    throw new Error(`startColor should have a length of 3`);
  }
  if (startColor.some((color) => color > 255 || color < 0)) {
    throw new Error(
      `startColor should have valid RGB colors, between 0 and 255`
    );
  }
  if (!Array.isArray(endColor)) {
    throw new Error(
      `endColor should be an Array of RGB colors like: [ Red Value, Green Value, Blue Value ]`
    );
  }
  if (endColor.length != 3) {
    throw new Error(`endColor should have a length of 3`);
  }
  if (endColor.some((color) => color > 255 || color < 0)) {
    throw new Error(`endColor should have valid RGB colors, between 0 and 255`);
  }
};

export default validateColors;
