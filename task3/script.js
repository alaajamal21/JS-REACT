 
let price = Number(prompt("أدخل قيمة مشترياتك:"));
let discount = 0;

if (price > 200) {
    discount = price * 0.15;

    if (discount > 100) {
        discount = price * 0.08;
    }
}

let finalPrice = price - discount;
alert(
    "قيمة المشتريات: " + price + " شيكل" +
    "\nالخصم: " + discount + " شيكل" +
    "\nالمبلغ بعد الخصم: " + finalPrice + " شيكل"
);


// condition with short hand if
price > 200
    ? discount = price * 0.15
    : discount = 0;

discount > 100
    ? discount = price * 0.08
    : discount;

