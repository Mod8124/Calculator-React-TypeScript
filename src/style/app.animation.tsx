import { Colors } from '../helpers/Colors';

export const appAnimation = (theme:string) => {

  const { theme1, theme2, theme3 } = Colors();

  const animationBackground = {
    background: theme === 'theme1' ? [`linear-gradient( ${theme1.backgrounds.screen}, ${theme1.backgrounds.main})`,`linear-gradient(${theme1.backgrounds.main}, ${theme1.backgrounds.screen})`]: 
      theme === 'theme2' ? [`linear-gradient(${theme2.keys.background}, ${theme2.backgrounds.main})`,`linear-gradient(to bottom, ${theme2.backgrounds.main}, ${theme2.keys.background})`] :
        [`linear-gradient(${theme3.keys.background}, ${theme3.backgrounds.main})`,`linear-gradient(to top,${theme3.backgrounds.main}, ${theme3.keys.background})`]
  };

  const animationContainer = {
    scale:1 , 
    x:0
  };

  const animationInitial = {
    scale:0, x:600,
  };

  return {
    animationBackground,
    animationContainer,
    animationInitial
  };
};