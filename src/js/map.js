export default class ErrorRepository {
    constructor(...errors) {
        this.errorlist = new Map();
        errors.forEach(error => {
            this.errorlist.set(error.code, error.description);
        });
    };
    
    translate(code) {
        if (!this.errorlist.has(code)) {
            return 'Unknown error';
        }
        return this.errorlist.get(code);
    };
};