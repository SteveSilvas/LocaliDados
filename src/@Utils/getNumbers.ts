export const getNumbers = (txt: string): string => {
    let numbers = txt.replace(/[^\d]/g, '');

    return numbers;
}