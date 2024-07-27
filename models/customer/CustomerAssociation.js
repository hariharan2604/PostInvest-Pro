import Agent from '../agent/Agent.js';
import Investment from '../investment/Investment.js';
import Customer from './Customer.js';
import CustomerRelationship from './CustomerRelationship.js';

Customer.belongsToMany(Customer, {
    through: CustomerRelationship,
    foreignKey: 'customerId',
    as: 'relatedCustomers',
    otherKey: 'relatedCustomerId',
});
Customer.belongsTo(Agent, { foreignKey: 'agent_id' });
Customer.hasMany(Investment, { foreignKey: 'customer_id' });


