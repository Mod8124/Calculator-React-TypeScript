import { MouseEvent, useEffect, useState,} from 'react';
import { IdisplayInterface, Icalcu } from '../../../interfaces/Interfaces';
import { Default } from '../../../helpers/default';

export const FormLogic = ({handleDisplay}:IdisplayInterface) => {

  const { DEFAULT } = Default();

  const [calculator, setCalculator] = useState<Icalcu>({
    display:'',
    number:'',
    number2:'',
    operation:null,
    special:false
  });

  useEffect(()=> {
    handleDisplay(calculator.display);
  },[calculator.display]);

  //handle number that come when user click  input with data-set number so in simple way just update a object calculator

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

  // `The handleOperation` when the user clicks an input with data-operation update a calculator.operation if the operation is different to null call calculate otherwise just update the object

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

  //handle action when the user click a input with data-action 
  // could be two options reset that reset the object calculator, the second options is calcultate that call calculate

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

  // calculte is a function that calculate the operation depends what operation is also is require special
  // that if is special operation doesn't reset the object calculator if no reset everything except that number is the result and display is also the resutl

  const calculate = ({ number, number2, operation, special }:Icalcu) => {

    if (number === '' && number2 === '') {
      setCalculator((prev)=> ({
        ...prev,
        display:'0'
      }));
      return;
    }

    const numberInt = parseFloat(number);
    const number2Int = parseFloat(number2);

    const sum = operation === '+' ? (numberInt + number2Int).toString() : '' ;
    const rest = operation === '-' ? (numberInt - number2Int).toString() : '';
    const multiplication = operation === '*' ? (numberInt * number2Int).toString() : '';
    const divide = operation === '/' ? (numberInt / number2Int).toString() : '';
    
    if (special) {

      switch (operation) {
      case '+': {
        setCalculator((prev)=> ({
          ...prev,
          number:sum,
          number2:'',
          special:false,
          display:sum + prev.operation
        }));
      }
        break;
      case '-': {
        setCalculator((prev)=> ({
          ...prev,
          number:rest,
          number2:'',
          special:false,
          display:rest + prev.operation
        }));
      }
        break;
      case '*': {
        setCalculator((prev)=> ({
          ...prev,
          number:multiplication,
          number2:'',
          special:false,
          display:multiplication + prev.operation
        }));
      }
        break;
      case '/': {
        setCalculator((prev)=> ({
          ...prev,
          number:divide,
          number2:'',
          special:false,
          display:divide
        }));
      }
        break;
      }

    } else {
      switch (operation) {
      case '+': {
        setCalculator((prev)=> ({
          ...prev,
          number:sum,
          operation : null,
          number2:'',
          display:sum
        }));
      }
        break;
      case '-': {
        setCalculator((prev)=> ({
          ...prev,
          number:rest,
          operation:null,
          number2:'',
          display:rest
        }));
      }
        break;
      case '*': {
        setCalculator((prev)=> ({
          ...prev,
          number:multiplication,
          operation:null,
          number2:'',
          display:multiplication
        }));
      }
        break;
      case '/': {
        setCalculator((prev)=> ({
          ...prev,
          number:divide,
          number2:'',
          operation:null,
          display:(numberInt / number2Int).toString()
        }));
      }
        break;
      }
    }
  };

  // depends what options click the user redirect (call) and function this oprions dependes of data-set that comes from input

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

  return {
    handleInput,
    calculate,
    calculator
  };

};