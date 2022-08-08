export interface Idisplay  {
    display:string,
    className?:string
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
    display:string,
    number:string,
    number2:string,
    operation:null|string,
    special:boolean
}
