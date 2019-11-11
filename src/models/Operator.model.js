const { Model } = require('objection');

class Operator_info extends Model {
    static get tableName() {
        return 'operator_info';
    }

    static get idColumn() {
        return 'op_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',

            properties: {
                op_id: { type: 'integer' },
                operator_id: { type: 'string' },
                name: { type: 'string' },
                machine: { type: 'string' },
                createdAt: { type: 'date' }
            }
        }
    }
}

module.exports = Operator_info;
