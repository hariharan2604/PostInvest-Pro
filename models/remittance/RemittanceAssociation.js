import RemittanceProcessStatus from './RemittanceProcessStatus.js';
import RemittanceProcessDetail from './RemittanceProcessDetail.js';
import RemittanceProcess from './RemittanceProcess.js';
import Customer from '../customer/Customer.js';
import Investment from '../investment/Investment.js';
import ReceiptDetail from '../receipt/ReceiptDetail.js';
import ReceiptCollection from '../receipt/ReceiptCollection.js';
import ProcessCalendar from '../ProcessCalendar.js';
import ReceiptType from '../receipt/ReceiptType.js';

Discrepancy.belongsTo(ProcessCalendar, { foreignKey: 'process_calendar_id' })
Discrepancy.belongsTo(RemittanceProcess, { foreignKey: 'remittance_process_id' })
RemittanceProcess.belongsTo(RemittanceProcessStatus, { foreignKey: 'remittance_process_status' });
RemittanceProcess.belongsTo(ProcessCalendar, { foreignKey: 'process_calendar_id' });
RemittanceProcessDetail.belongsTo(RemittanceProcess, { foreignKey: 'remittance_process_id' })
RemittanceProcessDetail.belongsTo(Customer, { foreignKey: 'customer_id' })
RemittanceProcessDetail.belongsTo(Investment, { foreignKey: 'investment_id' })
RemittanceProcessDetail.belongsTo(ReceiptDetail, { foreignKey: 'receipt_detail_id' })
RemittanceProcessDetail.belongsTo(ReceiptCollection, { foreignKey: 'receipt_collection_id' })
RemittanceProcessDetail.belongsTo(ProcessCalendar, { foreignKey: 'process_calendar_id' })
RemittanceProcessDetail.belongsTo(ReceiptType, { foreignKey: 'receipt_type_id' })
RemittanceSubmitted.belongsTo(RemittanceProcess, { foreignKey: 'remittance_process_id' })
RemittanceSubmitted.belongsTo(ProcessCalendar, { foreignKey: 'process_calendar_id' })
RemittanceSubmitted.belongsTo(ReceiptType, { foreignKey: 'receipt_type_id' })
