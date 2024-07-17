import Customer from './Customer.js';
import CustomerRelationship from './CustomerRelationship.js';

// Define associations
Customer.belongsToMany(Customer, {
    through: CustomerRelationship,
    foreignKey: 'customerId',
    as: 'relatedCustomers',
    otherKey: 'relatedCustomerId',
});

export default { Customer, CustomerRelationship };
