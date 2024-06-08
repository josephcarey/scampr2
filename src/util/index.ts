export const isNumeric: (num: unknown) => boolean = (num) =>
    (typeof num === 'number' ||
        (typeof num === 'string' && num.trim() !== '')) &&
    !isNaN(num as number)
