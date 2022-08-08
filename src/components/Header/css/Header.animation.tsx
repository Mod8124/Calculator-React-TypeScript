export const Animation = (theme:string) => {
  const animateTheme1 = {
    opacity:theme === 'theme1' ? [0.2,0.6, 1] : [1,0],
    borderRadius:theme === 'theme1' ? ['25%','50%'] : ['50%', '25%', '0%'],
    rotate:theme === 'theme1' ? [0, 360] : [360, 0],
  };

  const animateTheme2 = {
    opacity:theme === 'theme2' ? [0.6, 1] : [1,0.6,0],
    borderRadius:theme === 'theme2' ? ['0%','10%','25%','50%'] : ['50%', '25%','10%','0%'],
    rotate:theme === 'theme2' ? [0, 360, 720] : [720,360, 0],
  };

  const animateThree3 = {
    opacity:theme === 'theme3' ? [0.2,0.6, 1] : [1,0],
    borderRadius:theme === 'theme3' ? ['10%','20%','25%','50%'] : ['50%', '25%','10%','0%'],
    rotate:theme === 'theme3' ? [0, 360, 720, 1440] : [1440, 720,360, 0],
  };

  return {
    animateTheme1,
    animateTheme2,
    animateThree3
  };
};