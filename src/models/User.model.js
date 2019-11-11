const { Model } = require('objection');

class User_info extends Model {
    static get tableName() {
        return 'user_info';
    }

    static get idColumn() {
        return 'user_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',

            properties: {
                user_id: { type: 'integer' },
                user_name: { type: 'string' },
                user_email: { type: 'string' },
                createdAt: { type: 'date' }
            }
        }
    }
}

module.exports = User_info;
