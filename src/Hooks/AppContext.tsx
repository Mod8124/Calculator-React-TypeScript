import { IContext } from '../interfaces/Interfaces';
import { createContext } from 'react';

export const AppContext = createContext<IContext>({
  theme:''
});
  