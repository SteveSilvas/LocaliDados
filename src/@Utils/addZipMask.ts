import { getNumbers } from "./getNumbers";

export const addZIPMask = (text: string): string => {
    let textClean: string = getNumbers(text);
    let leftSide: string = textClean.slice(0, 5);
    let rightSize: string = textClean.slice(5, 8);

    return `${leftSide}-${rightSize}`;
}