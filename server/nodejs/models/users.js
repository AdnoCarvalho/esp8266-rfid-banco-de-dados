const db = require('./db');

const table = 'users';

const all = () => {
    return db.all(table);
};

const find = (id) => {
    return db.find(table, id);
};

const create = (data) => {
    const query = `INSERT INTO ${table} (name, email) VALUES ('${data.name}', '${data.email}');`;

    return db.query(query);
};

module.exports = {
    all: all,
    find: find,
    create: create
};