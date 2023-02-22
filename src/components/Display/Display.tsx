import { useContext } from 'react';
import { AppContext } from '../../Hooks/AppContext';
import { Idisplay } from '../../interfaces/Interfaces';
import { DisplayStyle } from './css/Display.style';
import { AnimationStyle } from './css/Display.animatin';

export const Display = ({display}:Idisplay) => {

  const { theme } = useContext(AppContext);
  const { animation } = AnimationStyle(theme);
  
  return (
    <DisplayStyle 
      animate={animation}
      theme={theme}>
      <h2>{display}</h2>
    </DisplayStyle>
  );
};