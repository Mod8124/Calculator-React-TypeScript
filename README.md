# Calculator app

## Table of contents
- [Overview](#overview)
- [Screen](#screen)
- [Features](#features)
- [Scripts](#scripts)
- [Build width](#build-width)
- [Useful resources](#useful-resources)
- [Continued development](#continued-development)

## Overview
The app is a classical calculator with theme switch

## screen 
![theme](./design/desktop-design-theme-1.jpg)
![theme2](./design/desktop-design-theme-2.jpg)
![theme3](./design/desktop-design-theme-3.jpg)

## Features

 Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

Code :
- Standardize or giving style the code `eslint.json
- Use `Module pattern` and `Revelation Module pattern`
- Basic test componets and functionalits 
- Delete all comments in code with `tsconfig.js`(help performance)

## Scripts
There're some new scripts
- **dev** : Start the app
- **test** : Run Test
- **lint** : Check for errors according to eslintrc.json 

```json
    "dev": "react-scripts start",
    "test": "react-scripts test",
    "lint": "eslint src/**/*.js --fix"
```

## Build with
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [style-components](https://styled-components.com/)
- [framer-motion](https://www.framer.com/motion/)
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [normalize](https://necolas.github.io/normalize.css/)

## Useful Resources

`App.tsx`

In the Form component, the prop as the theme is there because renders twice by default when you use `useContext` so one solution is pass a props or 
use things like `useCallback` || `useMemo` but I want to make it simple so I just pass it as a prop

```tsx
    <ContainerStyle animate={animationContainer} initial={animationInitial}>
        <AppContext.Provider value={{theme}}>
          <Header setTheme={setTheme}/>
          <Display display={display}/>
          <Form theme={theme} handleDisplay={handleDisplay}/>
        </AppContext.Provider>
      </ContainerStyle>
```

`FormLogic.tsx`

So the application logic is to update the object calculator, this depends on what that user clicks first, and if number, operation, and number2 have a value, and the user call =  do an operation depending on what value has the operation and update the display 
```tsx
const [calculator, setCalculator] = useState<Icalcu>({
    display:'',
    number:'',
    number2:'',
    operation:null,
    special:false
  });

```

the special is use when the user want to make a multiply operation like a + b - c so in this case the `calculator.number` = a + b, the `calculator.operation` is - and `calculator.number2` = c  

So every time the user click a button call and depends what the user click call another functions and pass as parement the data-set of that button

```tsx
    const handleInput = (e:MouseEvent<HTMLButtonElement>) => {
    const button = (e.target as HTMLButtonElement);
    const {number , operation, action} = button.dataset;
    
    if (number) {
      handleNumber(number);
      return;
    }

    if (operation) {
      handleOperation(operation);
      return;
    }

    if (action) {
      handleAction(action);
      return;
    }

  };
```
`The handleNumber` comes when the user click an input with data-set number so in simple way just update a object calculator if operation === null, update `calculator.number` else `calculator.number2`
```tsx
  const handleNumber = (number:string):void => {

    if (calculator.number2 === '' && calculator.operation === null) {
      setCalculator((prev:Icalcu)=> ({
        ...prev,
        number:prev.number += number,
        display:prev.display += number
      }));
    }

    if (calculator.operation) {
      setCalculator((prev)=> ({
        ...prev,
        number2:prev.number2 += number,
        display:prev.display += number
      }));
    }

  };
```

`The handleOperation` when the user click a input with data-operation update a calculator.operation if the operation is different to null call calculate otherwise just update the object, also do different conditions if the data-set is equal to `del`

```tsx
      const handleOperation = (operation:string):void => {

    if ( operation === 'Backspace' && calculator.number2 !== '' && calculator.operation ) {
      setCalculator((prev)=> ({
        ...prev,
        number2:prev.number2.slice(0, -1),
        display:prev.display.slice(0, -1)
      }));
      return;
    }

    if ( operation === 'Backspace' && calculator.operation && calculator.number2 === '') {
      setCalculator((prev)=> ({
        ...prev,
        operation:null,
        display: prev.display.slice(0, -1)
      }));
      return;
    }

    if ( operation === 'Backspace' && calculator.number !== '' && calculator.operation === null ) {
      setCalculator((prev)=> ({
        ...prev,
        number:prev.number.slice(0, -1),
        display:prev.display.slice(0, -1)
      }));
      return;
    }

    if ( operation !== 'Backspace' && calculator.number2 !== '') {
      setCalculator((prev)=> ({
        ...prev,
        special:true
      }));
      calculate(calculator);
      return;
    }

    if (calculator.operation === null && calculator.number !== '') {
      setCalculator((prev)=> ({
        ...prev,
        operation: operation,
        display: prev.display += operation
      }));
    }

  };
```


`handle calculate` is the function of the update calculator.display, depends on what operation is, also if it's special

```tsx
  const handleAction = (action:string):void => {

    switch (action)  {
    case 'reset':
      setCalculator(()=>({
        ...DEFAULT
      }));
      break;
    case '=':
      calculate(calculator);
      break;
    }

  };
```

`handle calculate` is the function the update calculator.display, depends on what operation is, also if it's special

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**Have fun building!** 🚀
