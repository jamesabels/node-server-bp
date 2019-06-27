import hello from './hello';

test('should return the name passed', (): void => {
    expect(hello('Typescript')).toBe('Hello, Typescript');
});
 
test('should throw if the name passed is empty', (): void => { 
    expect((): string => hello("")).toThrow();
});
