import chroma from 'chroma-js';

const processThemeColor = (color) => {
  const themeColor = {};

  themeColor.darken = chroma(color).darken().hex();

  return themeColor;
}

export default processThemeColor;