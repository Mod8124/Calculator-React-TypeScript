import { render, screen } from '@testing-library/react';
import { AppLogic } from '../../AppLogic';
import { Form } from './Form';

describe('Test Form',()=> {

  const { handleDisplay } = AppLogic();

  it('check if the component has buttons',()=> {
    render(<Form handleDisplay={handleDisplay}/>);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toBeInTheDocument();
  });

  it('check if button has data-set',()=> {
    render(<Form handleDisplay={handleDisplay}/>);
    const button = screen.getByText('button').dataset;
    expect(button).toBe('2');

  });

});