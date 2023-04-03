const cardDataArray = [
    {
      title: "Product 1",
      imageSrc: "product1.jpg",
      price: 10.00,
      quantity: 1,
      subtotal: 20.00
    },
    {
      title: "Product 2",
      imageSrc: "product2.jpg",
      price: 15.00,
      quantity: 1,
      subtotal: 30.00
    },
    {
      title: "Product 1",
      imageSrc: "product1.jpg",
      price: 10.00,
      quantity: 1,
      subtotal: 20.00
    },
    {
      title: "Product 2",
      imageSrc: "product2.jpg",
      price: 15.00,
      quantity: 1,
      subtotal: 30.00
    },
    {
      title: "Product 1",
      imageSrc: "product1.jpg",
      price: 10.00,
      quantity: 1,
      subtotal: 20.00
    },
    {
      title: "Product 2",
      imageSrc: "product2.jpg",
      price: 15.00,
      quantity: 1,
      subtotal: 30.00
    }
  ];
  
  function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
  
    const title = document.createElement("h2");
    title.textContent = cardData.title;
    cardHeader.appendChild(title);
  
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      card.remove();
    });
    cardHeader.appendChild(removeBtn);
  
    card.appendChild(cardHeader);
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const img = document.createElement("img");
    img.src = cardData.imageSrc;
    img.alt = cardData.title;
    cardBody.appendChild(img);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `$${cardData.price.toFixed(2)}`;
    productInfo.appendChild(price);
  
    const label = document.createElement("label");
    label.setAttribute("for", "quantity");
    label.textContent = "Quantity:";
    productInfo.appendChild(label);
  
    const input = document.createElement("input");
    input.type = "number";
    input.id = "quantity";
    input.name = "quantity";
    input.min = 1;
    input.max = 10;
    input.value = cardData.quantity;
    
     input.addEventListener('input', (event) => {
          let quantityValue = event.target.value;
          let newSubtotalValue = quantityValue * cardData.price;
          subtotal.textContent = `Subtotal: $${newSubtotalValue.toFixed(2)}`;
     });
     
     productInfo.appendChild(input);
  
     const subtotal = document.createElement("p");
     subtotal.classList.add("subtotal");
     subtotal.textContent = `Subtotal: $${cardData.subtotal.toFixed(2)}`;
     productInfo.appendChild(subtotal);
  
     cardBody.appendChild(productInfo);
     card.appendChild(cardBody);
     
     return card;
  }
  
  const cardsContainer = document.querySelector("#cart-container");
  
  cardDataArray.forEach(cardData => {
     const cardElement = createCard(cardData);
     cardsContainer.appendChild(cardElement);
  });  


  //total card

  const totalcard = document.createElement("div");
  totalcard.classList.add("total-card");

  const cardtotalbody = document.createElement("div");
  cardtotalbody.classList.add("card-body");

  const cartprice = document.createElement("h2");
  cartprice.classList.add("price");

  cartprice.innerText= totalPriceFunc();

  const checkoutbtn = document.createElement("button");
  checkoutbtn.classList.add("checkout-btn");
  checkoutbtn.innerText="Check out";

  totalcard.appendChild(cardtotalbody);
  cardtotalbody.appendChild(cartprice);
  cardtotalbody.appendChild(checkoutbtn);

  document.body.appendChild(totalcard);


 function totalPriceFunc(){
    let sum = 0;
    cardDataArray.forEach(element => {
        sum+= element.price;
    });

    return sum;
  }