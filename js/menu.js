const food = [
  {
    id: "pizza1",
    title: "Margarita",
    image: "margarita",
    desc: "Tomatsås, ost, mozarella",
    price: 129,
    category: "Pizza",
  },
  {
    id: "pizza2",
    title: "Hawaii",
    image: "hawaii",
    desc: "Tomatsås, ost, skinka och ananas",
    price: 149,
    category: "Pizza",
  },
  {
    id: "pizza3",
    title: "Kebab Pizza",
    image: "kebab",
    desc: "Tomatsås, ost, kebab, lök, skinka och extra sös",
    price: 149,
    category: "Pizza",
  },
  {
    id: "pizza4",
    title: "Curry",
    image: "curry",
    desc: "Tomatsås, ost, kyckling, ananas, curry sås",
    price: 149,
    category: "Pizza",
  },
  {
    id: "pizza5",
    title: "Vegansk fyra säsonger",
    image: "four",
    desc: "Tomatsås, cashew ost, broccoli, rödbetor, oliver, kantareller",
    price: 139,
    category: "Pizza",
  },
];

let foodmenu = document.getElementById("foodmenu");

food.forEach((item) => {
  let itemhtml = `<div class="accordion-item">
        <div class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${item.id}" aria-expanded="false" aria-controls="${item.id}">
                <div>
                    <image src="/Linders_Restaurang/images/${item.image}.webp" alt="Bild på en ${item.title}"></image>
                    <div class="d-flex justify-content-between">
                        <h2 class="text-center">${item.title}</h2>
                        <h2 class="text-right">${item.price}kr</h2>
                    </div>
                </div>
            </button>
        </div>
        <div id="${item.id}" class="accordion-collapse collapse" data-bs-parent="#foodmenu">
            <div class="accordion-body">${item.desc}</div>
        </div>
    </div>`;
  console.log("testing");

  foodmenu.insertAdjacentHTML("beforeend", itemhtml);
});
