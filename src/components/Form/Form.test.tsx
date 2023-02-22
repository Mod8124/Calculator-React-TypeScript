import { render, screen } from '@testing-library/react';
import { MouseEvent } from 'react';
import { Form } from './Form';

describe('Test Form',()=> {

  const theme = 'theme1';
  const handleInput = (e:MouseEvent<HTMLButtonElement>) => console.log(e); 

  it('check if the component has buttons',()=> {
    render(<Form theme={theme} handleInput={handleInput}/>);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toBeInTheDocument();
  });

  it('check if button has data-set',()=> {
    render(<Form theme={theme} handleInput={handleInput}></Form>);
    const button = screen.getByText('Del').dataset;
    expect(button).toBe('2');

  });

});