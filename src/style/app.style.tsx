import styled from 'styled-components';
import { Colors } from '../helpers/Colors';
import {motion} from 'framer-motion';
const { theme1, theme2, theme3 } = Colors();

export const AppStyle = styled(motion.main)`
    height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'League Spartan', sans-serif;
    /* background-color:${(props)=> props.theme === 'theme1'? theme1.backgrounds.main: props.theme === 'theme2'? theme2.backgrounds.main:theme3.backgrounds.main}; */
`;

export const ContainerStyle = styled(motion.section)`
    width:90%;
    max-width:540px;
`;