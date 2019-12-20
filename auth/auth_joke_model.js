const db = require('../database/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findById
}

function add(user) {
    return db('users').insert(user)
        .then(ids => {
            return findById(ids[0])
        })
}

function find() {
    return  db('users').select('id', 'username')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users').where({ id }).select('id', 'username').first()
}

