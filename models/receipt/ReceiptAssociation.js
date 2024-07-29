import Customer from "../customer/Customer.js";
import Investment from "../investment/Investment.js";
import BankDetail from "./BankDetail.js";
import InstrumentClass from "./InstrumentClass.js";
import ReceiptCollection from "./ReceiptCollection.js";
import ReceiptDetail from "./ReceiptDetail.js";
import ReceiptType from "./ReceiptType.js";


ReceiptCollection.belongsTo(Customer, { foreignKey: 'customer_id' });
ReceiptCollection.belongsTo(BankDetail, { foreignKey: 'bank_id' });
ReceiptCollection.belongsTo(ReceiptType, { foreignKey: 'receipt_type_id' });
ReceiptCollection.belongsTo(InstrumentClass, { foreignKey: 'instrument_class_id' });
ReceiptDetail.belongsTo(Investment, { foreignKey: 'investment_id' });
ReceiptDetail.belongsTo(ReceiptCollection, { foreignKey: 'receipt_collection_id' });

