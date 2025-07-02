// https://fakestoreapi.com/products
// https://fakestoreapi.com/products/1
// https://api.github.com/users/avimalhotra
// https://www.weatherapi.com/

const products = document.querySelector("#fakestoreapi");

const prod = fetch("https://fakestoreapi.com/products");
prod
  .then((prdResponse) => {
    if (!prdResponse.ok) {
      throw new Error(`Error will come 404!  ${prdResponse.status}`);
    }
    //console.log(prdResponse)
    return prdResponse.json();
  })
  .then((prdData) => {
    prdData.forEach((product) => {
      const tableTr = document.createElement("tr");
      products.innerHTML += `<div class="fakestoreapi">
     
      <div class="fakestore-title">${product.title}</div>
      <div class="fakestore-price">${product.price}</div>
      <div class="fakestore-description">${product.description}</div>
      <div class="fakestore-category">${product.category}</div>
      <div class="fakestore-image"><img src="${product.image}"></div>
      <div class="fakestore-rating">
        <span class="stars" data-rating="${product.rating.rate}"></span>
        <span class="rating-count">(${product.rating.count} reviews)</span>
      </div>
      <button class="buy-button">Buy Now</button>
      </div>`;
      // products.appendChild(tableTr);
    });
    document.querySelectorAll(".stars").forEach((star) => {
      const rating = parseFloat(star.getAttribute("data-rating")) || 0;
      star.style.setProperty("--rating", rating.toFixed(1));
    });

    console.log("prd data", prdData);
  })
  .catch((error) => {
    console.log(error);
  });

const promis1 = new Promise((resolve, reject) => {
  const promApi = "https://fakestoreapi.com/products";
  fetch(promApi)
    .then((responsePromise) => {
      if (!responsePromise.ok) {
        throw new Error(`https 404: ${responsePromise.status}`);
      }

      return responsePromise.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

promis1
  .then((aftResolve) => {
    console.log("after prd", aftResolve);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

const arr = [
  {
    color: "red",
    value: "#f00",
  },
  {
    color: "green",
    value: "#0f0",
  },
  {
    color: "blue",
    value: "#00f",
  },
  {
    color: "cyan",
    value: "#0ff",
  },
  {
    color: "magenta",
    value: "#f0f",
  },
  {
    color: "yellow",
    value: "#ff0",
  },
  {
    color: "black",
    value: "#000",
  },
];

const ul = document.createElement("ul");
arr.map((colorPallte) => {
  const li = document.createElement("li");
  //li.innerHTML = `<li>${colorPallte.color}</li>`
  li.textContent = `${colorPallte.color}, ${colorPallte.value}`;
  ul.appendChild(li);
});
document.body.appendChild(ul);

let weatherResult = document.querySelector("#weatherResult");
for (let k = 1; k <= 2; k++) {
  for (let i = 1; i <= 10; i++) {
    // console.log('parent', i);
    let innerLoop = document.createElement("div");
    for (let j = 1; j <= i; j++) {
      innerLoop.innerHTML += `*`;
      innerLoop.classList.add("foLoop");
      // console.log('child', j);
    }
    weatherResult.appendChild(innerLoop);
  }
}

// let weatherResult = document.querySelector("#weatherResult");

// for (let i = 1; i <= 10; i++) {
//   let innerLoop = document.createElement("div");
//   for (let j = 1; j <= i; j++) {
//     innerLoop.textContent += "*";
//   }
//   weatherResult.appendChild(innerLoop);
// }

const ecart = fetch("https://dummyjson.com/products");
const ecommerce = document.querySelector("#ecommerce");
ecart
  .then((ecartResponse) => {
    if (!ecartResponse.ok) {
      throw new Error(`this is an error ${ecartResponse.status}`);
    }
    return ecartResponse.json();
  })
  .then((ecartProduct) => {
    ecartProduct.products.forEach((ecartData) => {
      console.log("datayryr", ecartData);
      ecommerce.innerHTML += `<div class="product-card"><div class="prodid">${ecartData.id}</div><div class="prodtitle">${ecartData.title}</div><div class="proddescription">${ecartData.description}</div><div class="prodcategory">${ecartData.category}</div><div class="prodprice">${ecartData.price}</div></div>`;
    });
  });
