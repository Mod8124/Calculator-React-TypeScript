import { render, screen } from '@testing-library/react';
import { Display } from '../Display';

describe('display test', () => {
  it('verify if the component display has h2 and it\'s dinamic',()=> {
    render(<Display display="eso"/>);
    const title = screen.getByText('eso');
    expect(title).toBeInTheDocument();
    expect(title.innerHTML).toEqual('eso');
  });
});