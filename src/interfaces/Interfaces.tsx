import { MouseEvent } from 'react';

export interface Idisplay  {
    display:string,
    className?:string
}

export interface IForm {
    theme:string,
    handleInput:(e: MouseEvent<HTMLButtonElement>) => void
}

export interface Iheader {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    value?:number
}

export interface IheaderStyleContainer {
    theme?:string,
    value?:string,
}

export interface IContext {
    theme:string
}

export interface IBtnStyle {
    value?:string,
}

export interface IdisplayInterface {
    handleDisplay: (value: string) => void;
    theme?:string
}

export interface Icalcu {
    prev:string,
    next:string,
    operation:string,
    display:string
}

export const enum EHandleNumber {
    prev = 'prev',
    next = 'next',
}

