import ErrorRepository from "../map";

const Errors = new ErrorRepository (
    { code: 404, description: 'Page not found' },
    { code: 502, description: 'Bad Gateway' },
    { code: 500, description: 'Internal Server Error' },
);

test('error not found', () => {
    expect(Errors.translate(403)).toBe('Unknown error');
});

test('getting description', () => {
    expect(Errors.translate(502)).toBe('Bad Gateway');
});