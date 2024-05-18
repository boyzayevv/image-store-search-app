const search = document.querySelector("#search");
const main = document.querySelector("#main")
let productt;
fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => {

        productt = json;
        displayProduct(json);
    }
    );
function displayProduct(productt) {
    main.innerHTML = '';
    productt.forEach((e) => {
        const card = document.createElement("div")
        card.classList.add("product");
        card.innerHTML = `
        <div class="img-wrapper">
            <img src="${e.image}" alt="">
        </div>
        <div>
            <h3>${e.title}</h3>
            <h3>$${e.price}</h3>
            <button class='btn btn-primary ' onclick="showDetails(${e.id})">Details</button>
        </div>
        

            `
        main.appendChild(card);
    });
}
function showDetails(eId) {
    window.location.href = `detalis.html?id=${eId}`;
}

search.addEventListener("input", function () {
    var value = search.value.toLowerCase();
    const filteredPoducts = productt.filter(product => product.title.toLowerCase().includes(value));
    displayProduct(filteredPoducts);
})