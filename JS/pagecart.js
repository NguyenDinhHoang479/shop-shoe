var cartMain = JSON.parse(sessionStorage.getItem("cartMain")) || []

renderPageCart(cartMain);
function renderPageCart(cartMain) {
  renderSubCart(cartMain);
  renderDetailPageCart(cartMain)
  MathTotal(cartMain);
}
saveCart(cartMain)
// subcart
function renderSubCart(products) {
  var renderProduct = "";
  products.map((product) => {
    renderProduct += `<li class="product_items-in_cart">
          <div class="product_items-in_cart_img">
            <img src="./IMAGES/${product.nameImage}" alt="">
          </div>
          <div class="product_items-in_cart_name">
            <h3 class="product_cart-name">Flowers bouquet pink for all flower lovers</h3>
            <p><span class="quantity_cart">${
              product.quantity
            } <strong>x</strong></span> <span class="price_cart">$${
      product.price
    }.00</span></p>
          </div>
          <div class="product_items-in_cart_remove">
            <i class="fa-solid fa-trash-can js_remove-product"></i>
            <input style="display: none;" class="product-data" type="text" value='${JSON.stringify(
              product
            )}'>
          </div>
        </li>`;
  });
  console.log(products);
  document.querySelector(".js_subCart").innerHTML = renderProduct;
}
// // totle
function MathTotal(cartMain) {
    var boxSubTotal = document.querySelector(".js_Subtotal");
    renderSubTotal = "";
    var Subtotal = 0;
    cartMain.map((item, i) => {
      Subtotal += item.price * item.quantity;
    });
    renderSubTotal += `$${Subtotal}.00`;
    boxSubTotal.innerHTML = renderSubTotal;
    // vat
    var boxVatTotal = document.querySelector(".js_VAT");
    var renderVAT = "";
    var vat = 0;
    vat = Subtotal * 0.2;
    renderVAT += `$${Math.round(vat)}.00`;
    boxVatTotal.innerHTML = renderVAT;
    // total
    var boxTotal = document.querySelector(".js_total");
    var renderTotal = "";
    var total = 0;
    total = Subtotal + 10 + vat;
    renderTotal += `$${Math.round(total)}.00`;
    boxTotal.innerHTML = renderTotal;
  }
  // render page cart
function renderDetailPageCart(products) {
    var renderProduct = "";
    products.map((product,index) => {
      renderProduct += `
      <tr class="js_boxuseremove">
        <td class="pro_thumbnail">
            <a href="#">
                <img src="./IMAGES/${product.nameImage}" alt="">
            </a>
        </td>
        <td class="pro_title">
            <a href="#">${product.nameProduct}</a>
        </td>
        <td class="pro_price">
            <a href="#">$${product.price}.00</a>
        </td>
        <td class="pro_quantitys">
                <div class="pro_quantity">
                    <span class="minus">-</span>
                    <input class="input_quantity" type="text" value="${product.quantity}">
                    <span class="plus">+</span>
                </di >
        </td>
        <td class="c">
            <span class="">$${product.quantity * product.price}.00</span>
        </td>
        <td class="pro_remove">
            <span data-id="${index}" class = "js_removePageCart">
            <i data-id="${index}" class="js_removePageCart fa-solid fa-trash-can"></i>
            <input style="display: none;" class="product-data" type="text" value='${product.id}'>
            </span>
        </td>
    </tr>`;
    });
    document.querySelector(".js_renderDetailCart").innerHTML = renderProduct;
    
  }
// // detele subcart
  var boxsubProduct = document.querySelector(".js_subCart");
  var removeProduct = document.querySelectorAll(".js_remove-product");
  boxsubProduct.onclick = (e) => {
    const btndeleteProduct = e.target.matches(".js_remove-product");
    if (btndeleteProduct) {
      const data = JSON.parse(e.target.nextElementSibling.value);
      cartMain.map((item, index) => {
        if (item.id == data.id) {
          cartMain.splice(index, 1);
          saveCart(cartMain);
          renderSubCart(cartMain);
          MathTotal(cartMain);
        }
      });
    }
  };

// delete page cart
const cartElement = document.querySelector('.js_renderDetailCart');
cartElement.onclick = (e) => {
    // console.log('clcik');
    const close = e.target.matches('.js_removePageCart')
    if(close) {
        const id = e.target.dataset.id
        cartMain.splice(id,1)
        renderDetailPageCart(cartMain)
        renderSubCart(cartMain);
        MathTotal(cartMain);
        saveCart(cartMain);
        renderDetailPageCart(cartMain)
    }
}
// var removeicon = document.querySelectorAll(".js_removePageCart");

// const haha = () => {for(key of removeicon){
//     key.onclick= (e)=>{
//         const data = JSON.parse(e.target.nextElementSibling.value);
//         cartMain.map((item,i)=>{
//                 if(item.id == data){
//                     cartMain.splice(i, 1);
//                     renderDetailPageCart(cartMain)
//                     renderSubCart(cartMain);
//                     MathTotal(cartMain);
//                     saveCart(cartMain);
//                     renderDetailPageCart(cartMain)

//                 }
//             })
//         }
// }}



function homecart() {
  const modelCart = document.querySelector(".model_cart");
  modelCart.classList.add("open_model_cart");
}

const modelCart = document.querySelector(".model_cart");
const closeCart = document.querySelector(".cart_close");
const conTaiNerCart = document.querySelector(".model_cart_container");
closeCart.addEventListener("click", () => {
  modelCart.classList.remove("open_model_cart");
});
modelCart.onclick = () => {
  modelCart.classList.remove("open_model_cart");
};
conTaiNerCart.onclick = (event) => {
  event.stopPropagation();
};
// lưu cart 
function saveCart(arr){
    sessionStorage.setItem("cartMain", JSON.stringify(arr))
}
