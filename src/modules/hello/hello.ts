export default function hello(name: string): string {
    if (name.length <= 0) {
        throw new Error('Please provide hello() with a proper name, not an empty string');
    }
    return `Hello, ${name}`; 
};
