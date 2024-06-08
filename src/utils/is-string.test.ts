import { isString } from '.'

test('isString returns false for 0', (): void => {
    expect(isString(0)).toBe(false)
})

test('isString returns false for 10', (): void => {
    expect(isString(10)).toBe(false)
})

test('isString returns false for -10', (): void => {
    expect(isString(-10)).toBe(false)
})

test('isString returns false for 10.007', (): void => {
    expect(isString(10.007)).toBe(false)
})

test('isString returns false for -10.007', (): void => {
    expect(isString(-10.007)).toBe(false)
})

test('isString returns true for a string', (): void => {
    expect(isString('test')).toBe(true)
})

test('isString returns false for undefined', (): void => {
    expect(isString(undefined)).toBe(false)
})

test('isString returns false for null', (): void => {
    expect(isString(null)).toBe(false)
})

test('isString returns false for objects', (): void => {
    expect(isString({ a: 'test', b: 'test' })).toBe(false)
})

test('isString returns false for arrays', (): void => {
    expect(isString(['one', 'two'])).toBe(false)
})
