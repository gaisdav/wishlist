module.exports = (pollen) => ({
  modules: {
    scale: { ...pollen.scale, '000': '0.6875rem' },
    letter: { ...pollen.letter, xxl: '0.1em' },
  },
});
