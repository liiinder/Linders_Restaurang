let food = [
  {
    id: "pizza1",
    title: "Margarita",
    image: "margarita",
    desc: "Tomatsås, ost, mozarella",
    price: 129,
    category: "Pizza",
    inBasket: 0
  },
  {
    id: "pizza2",
    title: "Hawaii",
    image: "hawaii",
    desc: "Tomatsås, ost, skinka och ananas",
    price: 149,
    category: "Pizza",
    inBasket: 0
  },
  {
    id: "pizza3",
    title: "Kebab Pizza",
    image: "kebab",
    desc: "Tomatsås, ost, kebab, lök, skinka och extra sös",
    price: 149,
    category: "Pizza",
    inBasket: 0
  },
  {
    id: "pizza4",
    title: "Curry",
    image: "curry",
    desc: "Tomatsås, ost, kyckling, ananas, curry sås",
    price: 149,
    category: "Pizza",
    inBasket: 0
  },
  {
    id: "pizza5",
    title: "Vegansk fyra säsonger",
    image: "four",
    desc: "Tomatsås, cashew ost, broccoli, rödbetor, oliver, kantareller",
    price: 139,
    category: "Pizza",
    inBasket: 0
  },
];

let foodmenu = document.getElementById("foodmenu");
let varukorg = document.getElementById("varukorg");

// Building the food menu
food.forEach(item => {
    let itemhtml = `
    <div class="parent">
        <div class="image"><image src="/Linders_Restaurang/images/${item.image}.webp" alt="Bild på en ${item.title}" width="600px" height="300px"></image></div>
        <div class="name accordion accordion-flush">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${item.id}" aria-expanded="false" aria-controls="${item.id}">
                    ${item.title}
                </button>
            </h2>
            <div id="${item.id}" class="accordion-collapse collapse" data-bs-parent="#foodmenu">
                <div class="accordion-body">${item.desc}</div>
            </div>
        </div>
        <div class="price">
            <button class="button" onclick="addItem(${item.id}, true);">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
                ${item.price} kr
            </button>
        </div>
    </div>
    `;

    foodmenu.insertAdjacentHTML("beforeend", itemhtml);
});

function addItem(item, addItem) {
    let fooditem = food.find(i => i.id === item.id);

    if (addItem) {
        fooditem.inBasket++;
    } else {
        fooditem.inBasket--;
    }
    
    let summa = calculateSum();
    if (summa == 0) {
        varukorg.innerHTML = "Beställ gärna lite mat!";
    } else {
        console.log(summa);
        
        varukorg.innerHTML = "";
        food.forEach(item => {
            if (item.inBasket > 0)
            {
                let varukorghtml = `
                <div>
                    <h4>${item.title}</h4>
                    à-pris: ${item.price} kr
                    <button class="button" onclick="addItem(${item.id}, true);">
                        +
                    </button>
                    ${item.inBasket} st
                    <button class="button" onclick="addItem(${item.id}, false);">
                        -
                    </button>
                    tot: ${item.inBasket * item.price} kr
                </div>
                `
    
                varukorg.insertAdjacentHTML("beforeend", varukorghtml);
            }
        });

        let currentprice = `
            <div class="totalPrice">
            <h3>Totalt: ${calculateSum()} kr</h3>
            </div>
        `;

        varukorg.insertAdjacentHTML("beforeend", currentprice);
    }
}

function calculateSum() {
    return food.reduce((sum, x) => sum + (x.inBasket > 0 ? x.inBasket * x.price : 0), 0);
}