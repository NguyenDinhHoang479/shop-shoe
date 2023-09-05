let linkProduct = "./JSON/product.json"
fetch(linkProduct)
.then(function(response){
    return response.json();
})
.then((dataProduct)=>{
    let renderOurProduct = "";
    dataProduct.map((item, index)=>{
            renderOurProduct += `<div class="col l-4">
            <div class="product_inner">
            <a href="product_detail.html">
            <img src="./IMAGES/${item.nameImage}" alt="product-1" />
          </a>
              <div class="info_product">
                <h5>${item.nameProduct}</h5>
                <div class="price_product-box">
                  <div class="price">$${item.price}.00</div>
                  <del class="price-old">${item.priceOld}</del>
                </div>
              </div>
              <div class="product_left-car product_add-car">
                <i class="fa-light fa-heart"></i>
              </div>
              <div class="product_right-car product_add-car">
                <i class="fa-light fa-eye"></i>
              </div>
              <div class="product_add-car">
                <i class="fa-light fa-bag-shopping"></i>
              </div>
            </div>
          </div>`
        
    })
    document.querySelector(".box_showProduct").innerHTML = renderOurProduct
})


// liet ke theo danh muc
function category_item(category){
  let linkProduct = "./JSON/product.json"
  fetch(linkProduct)
  .then(function(response){
      return response.json();
  })
  .then((dataProduct)=>{
      let renderOurProduct = "";
      dataProduct.map((item, index)=>{
        if(item.category == category){
          renderOurProduct += `<div class="col l-4">
          <div class="product_inner">
          <a href="product_detail.html">
          <img src="./IMAGES/${item.nameImage}" alt="product-1" />
        </a>
            <div class="info_product">
              <h5>${item.nameProduct}</h5>
              <div class="price_product-box">
                <div class="price">$${item.price}.00</div>
                <del class="price-old">${item.priceOld}</del>
              </div>
            </div>
            <div class="product_left-car product_add-car">
              <i class="fa-light fa-heart"></i>
            </div>
            <div class="product_right-car product_add-car">
              <i class="fa-light fa-eye"></i>
            </div>
            <div class="product_add-car">
              <i class="fa-light fa-bag-shopping"></i>
            </div>
          </div>
        </div>`
        }       
      })
      document.querySelector(".box_showProduct").innerHTML = renderOurProduct
  })
}
