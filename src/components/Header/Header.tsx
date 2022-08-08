import { Iheader } from '../../interfaces/Interfaces';
import { FC, useContext, } from 'react';
import { HeaderLogic } from './HeaderLogic';
import { AppContext } from '../../Hooks/AppContext';
import { HeaderStyle, 
  HeaderStyle__title, 
  HeaderStyle__switch,
  HeaderStyle__subTitle,
  HeaderStyle__container,
  HeaderStyle__containerSwitch,
  HeaderStyle__circle,
} from './css/Header.style';
import { Animation } from './css/Header.animation';

export const Header:FC<Iheader> = ({ setTheme }) => {

  const { handleTheme } = HeaderLogic({ setTheme });
  const { theme } = useContext(AppContext);
  const { animateTheme1, animateTheme2, animateThree3 } = Animation(theme);

  return (
    <HeaderStyle theme={theme}>
      <HeaderStyle__title theme={theme}>
        <h1>calc</h1>
      </HeaderStyle__title>

      <HeaderStyle__switch >
        <HeaderStyle__subTitle><h4>Theme</h4></HeaderStyle__subTitle>

        <HeaderStyle__container>

          <HeaderStyle__containerSwitch value={'1'}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </HeaderStyle__containerSwitch>

          <HeaderStyle__containerSwitch theme={theme} value={'2'}>
            <HeaderStyle__circle  
              animate={animateTheme1}
              theme={theme} value={'theme1'} onClick={()=> handleTheme('theme1')}></HeaderStyle__circle>
            <HeaderStyle__circle theme={theme} 
              animate={animateTheme2}
              value={'theme2'} onClick={()=>handleTheme('theme2')}></HeaderStyle__circle>
            <HeaderStyle__circle
              animate={animateThree3}
              theme={theme} value={'theme3'} onClick={()=> handleTheme('theme3')}></HeaderStyle__circle>
          </HeaderStyle__containerSwitch>

        </HeaderStyle__container>

      </HeaderStyle__switch>

    </HeaderStyle>
  );
};