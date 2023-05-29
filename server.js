class detector {
    constructor(type, model, component) {
        this.type = type;
        this.model = model;
        this.component = component;
    }
}

var Detcon = new detector('IR 700', 'Detcon', 'Methane');

console.log(Detcon.type);