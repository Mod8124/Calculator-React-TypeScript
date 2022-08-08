import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors } from '../../../helpers/Colors';
const { theme1, theme2, theme3 } = Colors();

export const DisplayStyle = styled(motion.section)`
    background-color:${(props)=> props.theme === 'theme1'? theme1.backgrounds.screen: props.theme === 'theme2'? theme2.backgrounds.screen:theme3.backgrounds.screen};
    height:133px;
    margin-top:4px;
    color:${(props)=>
    props.theme === 'theme1' ? theme1.text.white : 
      props.theme === 'theme2' ? theme2.text.dark : 
        theme3.text.yellow};
    display:flex;
    width:100%;
    align-items:center;
    border-radius:6px;

    h2 {
      width:100%;
      text-align:end;
      padding-right:32px;
      font-weight:700;
      font-size:3.8em;
    }
`;