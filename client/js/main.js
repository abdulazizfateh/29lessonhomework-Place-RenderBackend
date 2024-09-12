import { getBuy, getNew, getRec } from "./service.js";


const buyCards = document.querySelector(".buy-cards");
const renderBuy = async () => {
    const data = await getBuy();
    buyCards.innerHTML = data.map((item) =>
        `<div class="buy-card">
            <img src="${item.img}" alt="">
            <div class="buy-discount-percentage">
                <p>${item.discountPer}</p>
            </div>
            <div class="buy-card-content">
                <div class="buy-card-price">
                    <p class="buy-card-new-price">${item.newPrice}</p>
                    <p class="buy-card-old-price">${item.oldPrice}</p>
                </div>
                <p class="buy-card-desc">${item.desc}</p>
            </div>
        </div>`
    ).join("");
}
renderBuy();






const newCards = document.querySelector(".new-cards");
const renderNew = async () => {
    const data = await getNew();
    newCards.innerHTML = data.map((item) =>
        `<div class="new-card">
            <div class="new-card-img">
                <img src="${item.img}" alt="">
            </div>
            <div class="new-card-content">
                <p class="new-card-price">${item.price}</p>
                <p class="new-card-desc">${item.desc}</p>
            </div>
        </div>`
    ).join("");
}
renderNew();






const recCards = document.querySelector(".rec-cards");
const renderRec = async () => {
    console.log(getRec());
    const backendData = await getRec();
    console.log(backendData);

    recCards.innerHTML = backendData.map((item) =>
        `<div class="rec-card">
            <div class="rec-card-img">
                <img src="${item.img}" alt="">
            </div>
            <div class="rec-card-content">
                <p class="rec-card-price">${item.price}</p>
                <p class="rec-card-desc">${item.desc}</p>
            </div>
        </div>`
    ).join("");
}
renderRec();
