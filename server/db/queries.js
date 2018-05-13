var knex = require('./knex'); //database connection

module.exports = {
    getAll() {
      return knex('hacker_models');  
    },

    getOne(id) {
        return knex('hacker_models').where('id', id).first();
    },

    create(hackerInfo) {
        return knex('hacker_models').insert(hackerInfo, '*');
    },

    update(id, hackerInfo) {
        return knex('hacker_models').where('id', id).update(hackerInfo, '*');
    },

    delete(id) {
        return knex('hacker_models').where('id', id).del();
    }
}