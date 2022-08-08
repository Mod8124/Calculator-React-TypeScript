import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { AppLogic } from '../../../AppLogic';

describe('Header Test', () => {
  const {setTheme} = AppLogic();
  it('Is headings in header',()=> {
    render(<Header setTheme={setTheme}/>);
    const h1 = screen.getByText(/Calc/i);
    const h4= screen.getByText(/theme/i);
    expect(h1).toBeInTheDocument();
    expect(h4).toBeInTheDocument();

  });

  it('check if span has 1, 2, 3 theme',()=> {
    render(<Header setTheme={setTheme} />);
    const span1 = screen.getByText('1');
    const span2 = screen.getByText('2');
    const span3 = screen.getByText('3');
    expect(span1).toBeInTheDocument();
    expect(span2).toBeInTheDocument();
    expect(span3).toBeInTheDocument();
  });
});