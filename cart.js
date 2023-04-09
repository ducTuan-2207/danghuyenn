const btnAdd = document.querySelector(".addtocart");
const cardCount = document.querySelector(".count");
const _amount = document.getElementById('amount')

const localCardKey = "PRODUCTS"

const localStore = {
    get: (key) => JSON.parse(localStorage.getItem(key)),
    set: (key, val) => localStorage.setItem(key, JSON.stringify(val))
}

function firstRender() {
    console.log(1);
    let products = localStore.get(localCardKey)

    if (!Array.isArray(products)) {
        products = []
    }

    cardCount.textContent = products.length
}

if (btnAdd) {

    btnAdd.addEventListener("click", function () {
        let products = localStore.get(localCardKey)

        if (!Array.isArray(products)) {
            products = []
        }

        // lay so luong trong input
        const itemAmount = Number(_amount.value) || 1

        const _productname = document.querySelector('.productname').textContent
        const _price = document.querySelector('.price').textContent
        const _description = document.querySelector('.description').textContent

        products.push({
            productName: _productname,
            price: _price,
            description: _description,
            amount: itemAmount,
        })

        localStore.set(localCardKey, products)

        cardCount.textContent = products.length
    })
}

firstRender();
//list plant to plantmenu
// var listPlant = document.querySelector(".plants");
// var list = [
//     {
//         img: src="https://i.pinimg.com/564x/30/9c/0f/309c0f4c46e21df223c77bb8a08152c2.jpg",
//         prodName: "Monstera Deliciosa",
//         price:4500,
//         add: href="buy-plant-1.html",

//     },
//     {
//         img: src="https://i.pinimg.com/564x/0a/52/37/0a5237690aabc6a5367fb24e0124b9f0.jpg"  ,
//         prodName: "Monstera Deliciosa",
//         price:450.0,
//         add: href="buy-plant-2.html", 
//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450.0,
//         add: href="buy-plant-3.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-4.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-5.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-6.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-7.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-8.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-9.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-10.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-11.html",

//     },
//     {
//         img: src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_Faux-Floor-Cactus_growpot.jpg?v=1661782657" ,
//         prodName: "Monstera Deliciosa",
//         price:450,
//         add: href="buy-plant-12.html",

//     }
// ];
// function renderVideo() {
//     listPlant.innerHTML = "";
//     list.forEach((item, index) => {
//       listPlant.innerHTML += `
//       <li>
//       <div class="item1">
//           <div class="top">
//               <a href="" class="thumb">
//                   <img src=${item.img}alt="">
//               </a>
//               <a href=${item.add} class="buynow">Read More</a>
             
//           </div>
//           <div class="infor">
//               <a href="" class="name"> ${item.prodName}</a>
//                   <div class="price">${item.price}.000 VND</div>
//           </div>
//       </div>

//   </li>
//       `;
//     });
//   }
//   renderVideo();
  /// list potmenu
  