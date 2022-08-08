export const AnimationStyle = (theme:string) => {
    
  const animation = {
    height:theme === 'theme1'? ['0px','133px']:
      theme === 'theme2'?['0px','1px','133px']:
        theme === 'theme3' ? ['0px','2px','133px'] :
          ['133px','0px'],
    opacity:theme === 'theme1'?[0,1]:
      theme === 'theme2' ? [0,0.1,1]:
        theme === 'theme3'?[0,0.2,1]:
          [1,0]
  };

  return {
    animation
  };
};