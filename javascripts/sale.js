const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = priceElement.value;
  const number = numberElement.value;
  let purchase = {
    price: parseInt(price),
    number: parseInt(number),
  };

  let newPurchase = true; //--1

  purchases.forEach((item) => {  //--2
    if(item.price === purchase.price) {
      newPurchase = false;
    }
  })

  if(purchases.length < 1 || newPurchase) { //--3
    purchases.push(purchase);
  } else {
    for(let i = 0; i < purchases.length; i++) {
      if(purchases[i].price === purchase.price) {
        purchases[i].number += purchase.number;
      }
    }
  }

  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
}