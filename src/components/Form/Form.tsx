import { IForm } from '../../interfaces/Interfaces';
import { ContainerStyle, BtnStyle } from './Form.style';

export const Form = ( {  handleInput, theme } : IForm) => {
    
  return (
    <ContainerStyle theme={theme}>

      <BtnStyle onClick={handleInput} theme={theme} data-number="7">7</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-number="8">8</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-number="9">9</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} value="del" data-operation="Backspace">Del</BtnStyle>

      <BtnStyle onClick={handleInput} theme={theme} data-number="4">4</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-number="5">5</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-number="6">6</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-operation="+">+</BtnStyle>

      <BtnStyle onClick={handleInput} theme={theme} data-number="1">1</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-number="2">2</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-number="3">3</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-operation="-">-</BtnStyle>

      <BtnStyle onClick={handleInput} theme={theme} data-number=".">.</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-number="0">0</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-operation="/">/</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} data-operation="*">x</BtnStyle>

      <BtnStyle onClick={handleInput} theme={theme} value="reset" data-action="reset">RESET</BtnStyle>
      <BtnStyle onClick={handleInput} theme={theme} value="=" data-action="=">=</BtnStyle>

    </ContainerStyle>
  );
};
