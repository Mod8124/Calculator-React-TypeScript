import { render, screen } from '@testing-library/react';
import { Displays } from '../Display';

it('verify if the component display has h2 and it\'s dinamic',()=> {
  render(<Displays display="eso"/>);
  const title = screen.getByText('eso');
  expect(title).toBeInTheDocument();
  expect(title.innerHTML).toEqual('eso');
});