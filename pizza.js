var addToCart = document.getElementsByClassName("d-block btn btn-primary w-100")
console.log(addToCart)
for (var i = 0; i <= addToCart.length; i++) {
  var button = addToCart[i]
  button.addEventListener('click', function (event) {
    var value = event.target.getAttribute("data-price")
    var cardPrice = document.querySelector(".ms-1")
    // get previous value from card Amount and store it inside variable 
    var totalCardPrice = cardPrice.textContent;
    // add the new value to the stored 
    totalCardPrice = Number(totalCardPrice) + Number(value);
    // display the new value to the  cardAmount
    cardPrice.textContent = totalCardPrice
    totalCardPrice = Math.round(totalCardPrice)
    var amount = document.querySelector(".total-items-badge")
    var totalAmount = amount.textContent
    totalAmount = Number(totalAmount) + 1
    amount.textContent = totalAmount
    // finshed adding the amount and price of the pizza

    // here we will increase and decrease the pizza iteam :)
    var cartItems = document.querySelector(".cart-modal-items");
    //console.log(cartItems)
    var pizzaName = event.target.getAttribute("data-flavour-type")
    console.log(pizzaName)

    var isPizzaAdded = cartItems.textContent.includes(pizzaName);
    if (isPizzaAdded) {
      // add +1
      // select input (al faragh)
      const pizzaId = pizzaName.replace(" ", "-").toLowerCase();
      const input = document.getElementById(pizzaId);
    

      var increaseInput = Number(input.value) + 1
      input.value = increaseInput;
      //console.log(input.value = increaseInput)
      //const input = document.getElementById(pizzaId).value;
      //console.log(input)
      //var increaseInput = Number(input) + 1
      //document.getElementById(pizzaId).value = increaseInput;
      //console.log(increaseInput)
      //sellect the inc & dec button by the id and 
      const increaseId = pizzaId + "-inc"
      const increaseButton = document.getElementById(increaseId);
      //console.log(increaseButton)
      const decreaseId = pizzaId + "-dec"
      const decreaseButon = document.getElementById(decreaseId)
      //console.log(decreaseButon)
      //INCRESMENT
      increaseButton.addEventListener('click', function(event) {
        var incButtonClicked = event.target
        //console.log(incButtonClicked)
        //var inputInc = incButtonClicked.parentElement.children[1]
        var inputInc = input
        //console.log(inputInc)
        var inputValue = inputInc.value
        //console.log(inputValue )
        var newValue = parseInt(inputValue) +1 
        console.log(newValue)
        inputInc.value = newValue
      })
    //DECREASMENT 
    decreaseButon.addEventListener('click', function(event) {
      var decButtonClicked = event.target
      //console.log(decButtonClicked)
      //var inputDec = decButtonClicked.parentElement.children[1]
      var inputDec = input
      //console.log(inputInc)
      var inputValue = inputDec.value
      //console.log(inputValue )
      var newValue = parseInt(inputValue) -1 
      console.log(newValue)
      inputDec.value = newValue
    })
    } else {
      cartItems.innerHTML = cartItems.innerHTML + getPizzaDive(pizzaName);
      //addVegTopping = event.target.getAttribute("data-topping")
      //cartItems.innerHTML = cartItems.innerHTML + addVegTopping

      //adding the price of all pizza to the total button 
      var total = document.getElementById("cart-total");
      //console.log(total)
      var pizzaTotalPrice = event.target.getAttribute("data-price")
      // console.log(pizzaTotalPrice)
      var cartTotal = total.textContent;
      total.textContent = Number(pizzaTotalPrice) + Number(cartTotal)

    }
  })
}


function getPizzaDive(pizzaName) {
  const pizzaId = pizzaName.replace(" ", "-").toLowerCase();
  const increaseId = pizzaId + "-inc"
  const decreaseId = pizzaId + "-dec"
  return `<div class="cart-modal-item d-flex align-items-center">
      <span class="fw-bold">${pizzaName}</span>
      <div class="ms-auto">
        <button type="button" class="btn btn-light" id = "${increaseId}">+</button>
        <input
          required
          value="1"
          placeholder="1"
          size="2"
          class="text-center border border-light"
          id="${pizzaId}"
        />
        <button type="button" class="btn btn-light" id = "${decreaseId}">-</button>
    </div>
  </div>`;
}






//var increasmentButton = document.getElementsByClassName("btn btn-light")
//console.log(increasmentButton)

//for (i = 0; i> increasmentButton.length; i++) {
  //var incButton = increasmentButton[i];
  //incButton.addEventListener("click", function (event) {
    //var buttonClicked = event.target;
    //console.log(buttonClicked)
 //}
//}
//var dncreasmentButton = document.querySelector(".btn btn-light")


//var previousValue;
//previousValue = cardAmount.textContent
//previousValue = value;
//previousValue = previousValue + value

//previousValue = Math.round (previousValue * 100 ) /100