"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)((tokens, request, response) => {
    const logObject = [
        tokens.method(request, response),
        tokens.url(request, response),
        tokens.status(request, response),
        tokens.res(request, response, 'content-length'),
        '-',
        tokens['response-time'](request, response),
        'ms',
    ];
    if (request.method === 'POST')
        logObject.push(JSON.stringify(request.body));
    return logObject.join(' ');
}));
let persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456',
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523',
    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-43-234345',
    },
    {
        id: 4,
        name: 'Mary Poppendieck',
        number: '39-23-6423122',
    },
];
app.get('/api/persons', (request, response) => {
    response.json(persons);
});
app.get('/api/persons/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const person = persons.find((currentPerson) => currentPerson.id === id);
    if (!person)
        response.status(404).send('<p>Person Does not Exist On the Server</p>');
    response.json(person);
});
app.post('/api/persons', (request, response) => {
    const person = {
        name: request.body.name,
        number: request.body.number,
        id: 0,
    };
    if (!person.name)
        return response.status(400).json({ error: 'Name Missing' });
    if (!person.number)
        return response.status(400).json({ error: 'Number Missing' });
    if (persons.find((currentPerson) => currentPerson.name === person.name))
        return response.status(400).json({ error: 'Name must be Unique' });
    const maxId = persons.reduce((id, person) => (person.id > id ? person.id : id), 0);
    person.id = maxId + 1;
    persons = persons.concat(person);
    response.json(persons);
});
app.delete('/api/persons/:id', (request, response) => {
    const id = parseInt(request.params.id);
    persons = persons.filter((person) => person.id !== id);
    response.status(204).end();
});
app.get('/info', (request, response) => {
    response.send(`<div><p>Phone Book has info for ${persons.length} people</p><p>${Date()}</p></div>`);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App Running at http://localhost:${PORT}`);
});
