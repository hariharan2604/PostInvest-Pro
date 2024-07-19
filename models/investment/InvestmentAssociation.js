import Investment from "./Investment.js";
import InvestmentDetail from "./InvestmentDetail.js";
import Customer from '../customer/Customer.js';
import SchemeDetail from './SchemeDetail.js';
import InvestmentStatus from './InvestmentStatus.js';

// Investment.belongsTo(Customer);
Investment.belongsTo(SchemeDetail, { foreignKey: 'scheme_id' });
Investment.belongsTo(InvestmentStatus, { foreignKey: 'status_id' });
Investment.hasMany(InvestmentDetail, { foreignKey: 'investment_id' });

export { Investment, InvestmentDetail, SchemeDetail, InvestmentStatus, Customer }