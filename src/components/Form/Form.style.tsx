import styled from 'styled-components';
import { Colors } from '../../helpers/Colors';
import { IBtnStyle } from '../../interfaces/Interfaces';
const { theme1, theme2, theme3 } = Colors();

export const ContainerStyle = styled.section`
background-color:${(props)=> props.theme === 'theme1'? theme1.backgrounds.keypad: props.theme === 'theme2'? theme2.backgrounds.keypad:theme3.backgrounds.keypad};
margin-top:20px;
display:grid;
grid-template-columns:25% 25% 25% 25%;
grid-column-gap:20px;
grid-row-gap:24px;
justify-content:center;
padding-right:58px;
padding-left:58px;
padding-top:32px;
padding-bottom:32px;
border-radius:6px;
`;

export const BtnStyle = styled.button<IBtnStyle>`
font-size:32px;
    background-color:${(props)=>
    props.theme === 'theme1' && props.value === 'reset' ? theme1.keys.background : 
      props.theme === 'theme1' && props.value === '=' ? theme1.keys.backgroundRed : 
        props.theme === 'theme1' && props.value === 'del' ? theme1.keys.background : 
          props.theme === 'theme1' ? theme1.keys.backgroundLight :

            props.theme === 'theme2' && props.value === 'reset' ? theme2.keys.background : 
              props.theme === 'theme2' && props.value === '=' ? theme2.keys.backgroundRed : 
                props.theme === 'theme2' && props.value === 'del' ? theme2.keys.background : 
                  props.theme === 'theme2' ? theme2.keys.backgroundLight :

                    props.theme === 'theme3' && props.value === 'reset' ? theme3.keys.background : 
                      props.theme === 'theme3' && props.value === '=' ? theme3.keys.backgroundRed : 
                        props.theme === 'theme3' && props.value === 'del' ? theme3.keys.background : 
                          theme3.keys.backgroundLight 
};
    border:none;
    border-radius:8px;
    min-width:20px;
    padding-top:12px;
    padding-bottom:12px;
    cursor: pointer;
    grid-column:${(props)=> props.value === 'reset' || props.value === '='? 'span 2':'span 1'};
    border-bottom:4px solid ${(props)=> 
    props.theme === 'theme1' && props.value === 'reset' ? theme1.keys.shandow : 
      props.theme === 'theme1' && props.value === '=' ? theme1.keys.shandowRed : 
        props.theme === 'theme1' && props.value === 'del' ? theme1.keys.shandow : 
          props.theme === 'theme1' ? theme1.keys.shadowLigt :

            props.theme === 'theme2' && props.value === 'reset' ? theme2.keys.shandow : 
              props.theme === 'theme2' && props.value === '=' ? theme2.keys.shandowRed : 
                props.theme === 'theme2' && props.value === 'del' ? theme2.keys.shandow : 
                  props.theme === 'theme2' ? theme2.keys.shadowLigt :

                    props.theme === 'theme3' && props.value === 'reset' ? theme3.keys.shandow : 
                      props.theme === 'theme3' && props.value === '=' ? theme3.keys.shandowRed : 
                        props.theme === 'theme3' && props.value === 'del' ? theme3.keys.shandow : 
                          theme3.keys.shadowLigt
};

color:${(props)=> props.theme === 'theme1' && props.value ? theme1.text.white : 
    props.theme ==='theme1' ? theme1.text.dark : 
      props.theme === 'theme2' && props.value ? theme2.text.white :
        props.theme ==='theme2' ? theme2.text.dark : 
          props.theme === 'theme3' && props.value === '='? theme3.text.dark :
            props.theme === 'theme3' && props.value ? theme3.text.white: theme3.text.yellow
          
};

&:hover {
  background:${(props)=>
    props.theme === 'theme1' && props.value === 'reset' ? theme1.hover.background : 
      props.theme === 'theme1' && props.value === '=' ? theme1.hover.backgroundRed : 
        props.theme === 'theme1' && props.value === 'del' ? theme1.hover.background : 
          props.theme === 'theme1' ? theme1.hover.backgroundLight :

            props.theme === 'theme2' && props.value === 'reset' ? theme2.hover.background : 
              props.theme === 'theme2' && props.value === '=' ? theme2.hover.backgroundRed : 
                props.theme === 'theme2' && props.value === 'del' ? theme2.hover.background: 
                  props.theme === 'theme2' ? theme2.hover.backgroundLight :

                    props.theme === 'theme3' && props.value === 'reset' ? theme3.hover.background : 
                      props.theme === 'theme3' && props.value === '=' ? theme3.hover.backgroundRed : 
                        props.theme === 'theme3' && props.value === 'del' ? theme3.hover.background : 
                          theme3.hover.backgroundLight 
};
}

`;