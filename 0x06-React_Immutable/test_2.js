import accessImmutableObject from './2-nested.js';

accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first'])
