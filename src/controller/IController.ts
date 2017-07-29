export interface IController {
    __name: string;
    __construct?: (context: any) => void;
    __init?: (context: any) => void;
    __ready?: (context: any) => void;
    $find?(selector: string): JQuery;
    trigger?(selector: string): JQuery;
}
