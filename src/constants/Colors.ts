const tintColorLight = '#181C1D';

type Colors = {
  light: {
    text: string;
    background: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
    bgColor: string;
    black: string;
    darkGrey: string;
  };
  dark: {
    text: string;
    background: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
    bgColor: string;
    black: string;
    darkGrey: string;
  };
};

const Colors: Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#A8A8AA',
    tabIconSelected: tintColorLight,
    bgColor: '#F8F8F8',
    black: '#181C1D',
    darkGrey: '#888B8D',
  },
  dark: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#A8A8AA',
    tabIconSelected: tintColorLight,
    bgColor: '#F8F8F8',
    black: '#181C1D',
    darkGrey: '#888B8D',
  },
};

export default Colors;
