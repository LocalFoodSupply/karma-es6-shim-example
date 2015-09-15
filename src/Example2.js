class Example2 {

    constructor() {
        Object.assign(this, this._default);
    }

    get _default() {
        return {
            foo: 'baz'
        };
    }
}

export { Example2 };
