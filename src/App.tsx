import { FC } from 'react';
import { Display } from './components/Display/Display';
import { Header } from './components/Header/Header';
import { AppLogic } from './AppLogic';
import { Form } from './components/Form/Form';
import { AppContext } from './Hooks/AppContext';
import { AppStyle, ContainerStyle } from './style/app.style';
import { appAnimation } from './style/app.animation';

const App:FC = () =>  {

  const { handleDisplay, display, theme, setTheme } = AppLogic();
  const { animationBackground, animationContainer, animationInitial} = appAnimation(theme);


  return (
    
    <AppStyle animate={animationBackground} theme={theme}>
      
      <ContainerStyle animate={animationContainer} initial={animationInitial}>
        <AppContext.Provider value={{theme}}>
          <Header setTheme={setTheme}/>
          <Display display={display}/>
          <Form theme={theme} handleDisplay={handleDisplay}/>
        </AppContext.Provider>
      </ContainerStyle>

    </AppStyle>

  );
};

export default App;
