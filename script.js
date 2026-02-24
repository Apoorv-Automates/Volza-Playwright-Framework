let shipmentValue = 2000
let taxAmount = 500
let totalBill;

if (shipmentValue > 2000) {
totalBill = shipmentValue + taxAmount;
console.log("High Value! Total: " + totalBill);
} else {
totalBill = shipmentValue;
console.log("Normal Value. Total: " + totalBill);
}