const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const greet = generateGreeting('Mike');
    expect(greet).toBe('Hello Mike!');
});

test('should generate greeting from no name', () => {
    const greet = generateGreeting();
    expect(greet).toBe('Hello Anonymous!');
});