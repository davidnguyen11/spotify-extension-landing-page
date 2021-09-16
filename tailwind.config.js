const colors = {
  pink: 'linear-gradient(90deg, #fbe3e7 0%, #edd8e4 27%, #decbe2 100%)',
  metapolis: 'linear-gradient(to right, #659999, #f4791f)',
  green: 'linear-gradient(to left, #d9dcac 0%, #a5d6a7 100%)',
  champagne: 'linear-gradient(to right, #fec6ad 0%, #ffd6ac 47%, #ffebbd 100%)',
  orange: 'linear-gradient(to left, #ff8008, #ffc837)',
  atlas: 'linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)',
  almost: 'linear-gradient(to right, #ddd6f3, #faaca8)',
  evening: 'linear-gradient(to right, #b92b27, #1565c0)',
  purple: 'linear-gradient(to left, #cc2b5e, #753a88)',
  deepSea: 'linear-gradient(to right, #2c3e50, #4ca1af)',
  blush: 'linear-gradient(to right, #b24592, #f15f79)',
  night: 'linear-gradient(90deg, #2e4f8b 0%, #3e589d 35%, #8f619b 60%, #d0718f 70%)',
  pink1: 'linear-gradient(150deg, #e436ff, #ff5bae)',
  purple1: 'linear-gradient(150deg, #702bfc, #b730ff)',
  'deep-blue': 'linear-gradient(57deg, #1cafb3, #2390c5)',
}

module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {},
    textColor: (theme) => ({
      ...theme('colors'),
      ...colors,
    }),
    backgroundImage: {
      ...colors
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
