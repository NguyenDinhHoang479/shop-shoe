
const listEL = document.querySelector(".slider_product");
var addProducts = document.querySelectorAll(".js_addCart");
var cartMain = JSON.parse(sessionStorage.getItem("cartMain")) || []

// add
listEL.onclick = (e) => {
  const btnCart = e.target.matches(".js_addCart");
  if (btnCart) {
    const data = JSON.parse(e.target.nextElementSibling.value);
    let isProductExist = false;
    cartMain.map((item)=>{
        if (item.id === data.id ) {
            item.quantity += 1;
            isProductExist = true;
            return;
        }
    })
    if(!isProductExist){
        cartMain.unshift(data)
      }
    MathTotal(cartMain)
    renderSubCart(cartMain)
    saveCart(cartMain)
  }
};
renderSubCart();
// // detele

  var boxsubProduct = document.querySelector(".js_subCart");
  var removeProduct = document.querySelectorAll('.js_remove-product');
  boxsubProduct.onclick = (e) => {
    const btndeleteProduct = e.target.matches(".js_remove-product");
    if (btndeleteProduct) {
      const data = JSON.parse(e.target.nextElementSibling.value);
      cartMain.map((item, index) => {
        if (item.id == data.id) {
          cartMain.splice(index, 1);
          renderSubCart(cartMain);
          MathTotal(cartMain);
        }
      });
  
    }
  };
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

// // render sub cart
function renderSubCart(products) {
  var renderProduct = "";
  cartMain.map((product) => {
    renderProduct += `<li class="product_items-in_cart">
        <div class="product_items-in_cart_img">
          <img src="./IMAGES/${product.nameImage}" alt="">
        </div>
        <div class="product_items-in_cart_name">
          <h3 class="product_cart-name">Flowers bouquet pink for all flower lovers</h3>
          <p><span class="quantity_cart">${product.quantity} <strong>x</strong></span> <span class="price_cart">$${
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
  document.querySelector(".js_subCart").innerHTML = renderProduct;
}



// save Cart
function saveCart(arr){
sessionStorage.setItem("cartMain", JSON.stringify(arr))
}

// cartHome
function homecart(){
  const modelCart = document.querySelector('.model_cart')
  modelCart.classList.add('open_model_cart');
} 

const modelCart = document.querySelector('.model_cart')
const closeCart = document.querySelector('.cart_close');
const conTaiNerCart = document.querySelector('.model_cart_container');
closeCart.addEventListener('click',()=>{
  modelCart.classList.remove('open_model_cart');
})
modelCart.onclick = ()=>{
  modelCart.classList.remove('open_model_cart');
}
conTaiNerCart.onclick = (event)=>{
  event.stopPropagation()
}

