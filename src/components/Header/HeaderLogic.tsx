import { Iheader } from '../../interfaces/Interfaces';

export const HeaderLogic = ({setTheme}:Iheader) => {

  const handleTheme  = (value:string) =>{
    setTheme(value);
    localStorage.setItem('theme', value);
  };


  return {
    handleTheme,
  };
};