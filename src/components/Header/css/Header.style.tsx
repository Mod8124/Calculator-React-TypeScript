import styled from 'styled-components';
import { Colors } from '../../../helpers/Colors';
import { IheaderStyleContainer } from '../../../interfaces/Interfaces';
import { motion } from 'framer-motion';
const { theme1, theme2, theme3} = Colors();

export const HeaderStyle = styled.header`
    display:grid;
    width:100%;
    grid-template-columns:50% 50%;
    color:${(props)=>
    props.theme === 'theme1' ? theme1.text.white : 
      props.theme === 'theme2' ? theme2.text.dark : 
        theme3.text.yellow};
`;

export const HeaderStyle__title = styled(motion.article)`
    padding-left:4px;
`;

export const HeaderStyle__switch = styled.article`
  display:grid;
  grid-template-columns:60% auto;
  padding-top:8px;

`;

export const HeaderStyle__subTitle = styled.div`
  align-self:center;
  justify-self:flex-end;
  text-transform:uppercase;
  font-size:0.8em;
  margin-top:-2px;
  margin-right:-8px;
`;

export const HeaderStyle__container = styled.div`
display:grid;
justify-content:flex-end;
`;

export const HeaderStyle__containerSwitch = styled.div<IheaderStyleContainer>`
  display:grid;
  grid-template-columns:auto auto auto;
  justify-content:space-between;
  background-color:${(props)=>props.value === '2' && props.theme === 'theme1' ? theme1.backgrounds.keypad :
    props.value === '2' && props.theme === 'theme2' ? theme2.backgrounds.keypad :
      props.value === '2' && props.theme === 'theme3' ? theme3.backgrounds.keypad : 'transparent'}; 
  border-radius:25px;
  margin-bottom:${(props)=>props.value === '1' ? '-12px':'10px'};
  height:${(props)=>props.value === '1' ? '16px':'22px'};
  span {
    padding-left:8px;
    padding-right:8px;
    text-align:center;
  }
`;

export const HeaderStyle__circle = styled(motion.div)<IheaderStyleContainer>`
  width:16px;
  height:16px;
  align-self:center;
  background-color:${
  (props)=>props.theme === 'theme1' && props.value === props.theme ?  theme1.keys.backgroundRed : 
    props.theme === 'theme2' && props.value === props.theme ? theme2.keys.backgroundRed :
      props.theme === 'theme3' && props.value === props.theme ?   theme3.keys.backgroundRed :
        'transparent'
};
  border-radius:50%;
  cursor: pointer;
`;
