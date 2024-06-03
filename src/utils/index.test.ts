import { isNumeric } from './'

test('isNumeric returns true for 0', (): void => {
    expect(isNumeric(0)).toBe(true)
})

test('isNumeric returns true for 10', (): void => {
    expect(isNumeric(10)).toBe(true)
})

test('isNumeric returns true for -10', (): void => {
    expect(isNumeric(-10)).toBe(true)
})
test('isNumeric returns true for 10.007', (): void => {
    expect(isNumeric(10.007)).toBe(true)
})

test('isNumeric returns true for -10.007', (): void => {
    expect(isNumeric(-10.007)).toBe(true)
})

test('isNumeric returns false for a string', (): void => {
    expect(isNumeric('test')).toBe(false)
})

test('isNumeric returns false for undefined', (): void => {
    expect(isNumeric(undefined)).toBe(false)
})

test('isNumeric returns false for null', (): void => {
    expect(isNumeric(null)).toBe(false)
})

test('isNumeric returns false for objects', (): void => {
    expect(isNumeric({ a: 'test', b: 'test' })).toBe(false)
})

test('isNumeric returns false for arrays', (): void => {
    expect(isNumeric(['one', 'two'])).toBe(false)
})
