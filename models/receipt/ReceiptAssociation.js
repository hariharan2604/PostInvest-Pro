import Customer from "../customer/Customer";
import Investment from "../investment/Investment";
import BankDetail from "./BankDetail";
import InstrumentClass from "./InstrumentClass";
import ReceiptCollection from "./ReceiptCollection";
import ReceiptDetail from "./ReceiptDetail";
import ReceiptType from "./ReceiptType";


ReceiptCollection.belongsTo(Customer, { foreignKey: 'customer_id' });
ReceiptCollection.belongsTo(BankDetail, { foreignKey: 'bank_id' });
ReceiptCollection.belongsTo(ReceiptType, { foreignKey: 'receipt_type_id' });
ReceiptCollection.belongsTo(InstrumentClass, { foreignKey: 'instrument_class_id' });
ReceiptDetail.belongsTo(Investment, { foreignKey: 'investment_id' });
ReceiptDetail.belongsTo(ReceiptCollection, { foreignKey: 'receipt_collection_id' });

export {
    Customer, Investment, BankDetail, InstrumentClass, ReceiptCollection, ReceiptDetail, ReceiptType,
}