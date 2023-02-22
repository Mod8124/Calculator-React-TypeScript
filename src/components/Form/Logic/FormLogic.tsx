import { MouseEvent, useState } from 'react';
import { Icalcu, EHandleNumber } from '../../../interfaces/Interfaces';
import { Default } from '../../../helpers/default';

export const FormLogic = () => {

  const { DEFAULT } = Default();

  const [calculator, setCalculator] = useState<Icalcu>({
    prev: '0',
    next: '',
    operation: '',
    display: '',
  });

  const handleNumber = (current:EHandleNumber, value:string) => {
    return calculator[`${current}`] === '0' && value !== '0'
      ? value
      : (!calculator.operation && current === 'prev') ||
          (calculator.operation && current === 'next')
        ? (calculator[`${current}`] += value)
        : calculator[`${current}`];
  };

  const addNumber = (value:string):void => {

    setCalculator({
      ...calculator,
      display: (calculator.display += value),
      prev: handleNumber(EHandleNumber.prev, value),
      next: handleNumber(EHandleNumber.next, value),
    });

  };

  // `The handleOperation` when the user clicks an input with data-operation update a calculator.operation if the operation is different to null call calculate otherwise just update the object

  const backspace = () => {
    setCalculator((calc) => ({
      ...calc,
      next: calc.operation ? calc.next.slice(0, -1) : calc.next,
      prev: !calc.operation ? calc.prev.slice(0, -1) : calc.prev,
      display: calc.display.slice(0, -1),
    }));
  };

  const addOperation = (value:string) => {

    if (value === 'Backspace') {
      backspace();
      return;
    }

    if (calculator.operation) calculate();

    setCalculator((calc) => ({
      ...calc,
      display: calc.display + value,
      operation: value,
    }));
  };

  //handle action when the user click a input with data-action 
  // could be two options reset that reset the object calculator, the second options is calcultate that call calculate
  const resetCalculator = () => {
    setCalculator(()=>({
      ...DEFAULT
    }));
  };

  const handleAction = (action:string):void => {

    switch (action)  {
    case 'reset':
      resetCalculator();
      break;
    case '=':
      calculate();
      break;
    }

  };

  // calculte is a function that calculate the operation depends what operation is also is require special
  // that if is special operation doesn't reset the object calculator if no reset everything except that number is the result and display is also the resutl
  const math = (a:number, b:number, operation:string) => {
    return operation === '+'
      ? a + b
      : operation === '-'
        ? a - b
        : operation === 'x'
          ? a * b
          : a / b;
  };

  const calculate = () => {
    if (calculator.operation && calculator.next !== '') {
      const result = math(
        Number(calculator.prev),
        Number(calculator.next),
        calculator.operation,
      ).toString();

      setCalculator({
        ...calculator,
        prev: result === 'NaN' ? '0' : result,
        next: '',
        operation: '',
        display: result === 'NaN' ? 'Error' : result,
      });
    }
  };

  // depends what options click the user redirect (call) and function this oprions dependes of data-set that comes from input

  const handleInput = (e:MouseEvent<HTMLButtonElement>) => {
    const button = (e.target as HTMLButtonElement);
    const {number , operation, action} = button.dataset;
    
    if (number) {
      addNumber(number);
      return;
    }

    if (operation) {
      addOperation(operation);
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