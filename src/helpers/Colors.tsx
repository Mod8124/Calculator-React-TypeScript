export const Colors = () => {

  const theme1 = {
    backgrounds:{
      main:'hsl(222, 26%, 31%)',
      keypad:'hsl(223, 31%, 20%)',
      screen:'hsl(224, 36%, 15%)'
    },
    keys:{
      background:'hsl(225, 21%, 49%)',
      shandow:'hsl(224, 28%, 35%)',
      backgroundRed:'hsl(6, 63%, 50%)',
      shandowRed:'hsl(6, 70%, 34%)',
      backgroundLight:'hsl(30, 25%, 89%)',
      shadowLigt:'hsl(28, 16%, 65%)'
    },
    text:{
      dark:'hsl(221, 14%, 31%)',
      white:'hsl(0, 0%, 100%)'
    },
    hover:{
      background:'hsl(225, 21%,65%)',
      backgroundRed:'hsl(6, 63%, 65%)',
      backgroundLight:'hsl(30, 25%, 95%)',
    }
  };

  const theme2 = {
    backgrounds:{
      main:'hsl(0, 0%, 90%)',
      keypad:' hsl(0, 5%, 81%)',
      screen:'hsl(0, 0%, 93%)'
    },
    keys:{
      background:'hsl(185, 42%, 37%)',
      shandow:'hsl(185, 58%, 25%)',
      backgroundRed:'hsl(25, 98%, 40%)',
      shandowRed:'hsl(25, 99%, 27%)',
      backgroundLight:'hsl(45, 7%, 89%)',
      shadowLigt:'hsl(35, 11%, 61%)'
    },
    text:{
      dark:'hsl(60, 10%, 19%)',
      white:'hsl(0, 0%, 100%)'
    },
    hover:{
      background:'hsl(185, 42%, 50%)',
      backgroundRed:'hsl(25, 98%, 60%)',
      backgroundLight:'hsl(45, 7%, 95%)',
    }
  };

  const theme3 = {
    backgrounds:{
      main:'hsl(268, 75%, 9%)',
      keypad:' hsl(268, 71%, 12%)',
      screen:'hsl(268, 71%, 12%)'
    },
    keys:{
      background:'hsl(281, 89%, 26%)',
      shandow:'hsl(285, 91%, 52%)',
      backgroundRed:'hsl(176, 100%, 44%)',
      shandowRed:'hsl(177, 92%, 70%)',
      backgroundLight:'hsl(268, 47%, 21%)',
      shadowLigt:'hsl(290, 70%, 36%)'
    },
    text:{
      yellow:'hsl(52, 100%, 62%)',
      dark:'hsl(198, 20%, 13%)',
      white:'hsl(0, 0%, 100%)'
    },
    hover: {
      background:'hsl(281, 89%, 40%)',
      backgroundRed:'hsl(176, 100%, 55%)',
      backgroundLight:'hsl(268, 47%, 30%)',
    }
  };

  return {
    theme1,
    theme2,
    theme3
  };

};