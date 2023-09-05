

var boxSubMenu1 = document.querySelector('.sub_menu')
var boxSubMenu2 = document.querySelector('.sub_menu-shop')
var boxSubMenu3 = document.querySelector('.sub_menu-blog')
var boxBanner = document.querySelector('.slider_inner')
var boxOurProduct = document.querySelector('.slider_product')
let linkSubnav = "./JSON/submenu.json"
let linkBanner = "./JSON/banner.json"
let linkProduct = "./JSON/product.json"

// sub nav
fetch(linkSubnav)
.then(function(response){
    return response.json();
})
.then(function(dataSubMenu){
    renderForNav(dataSubMenu, "home",boxSubMenu1);
    renderForNav(dataSubMenu, "shop",boxSubMenu2);
    renderForNav(dataSubMenu, "blog",boxSubMenu3);
})
// hien sub nav
let renderForNav = (dataSubMenu,x,y) => {
  let menuHome = "";
  dataSubMenu.map((item)=>{
    if(item.nameMenu == x){
      menuHome += `<li>${item.nameSubMenu}</li>`
    }
  })
  y.innerHTML = menuHome;
}

// banner
fetch(linkBanner)
.then(function(response){
    return response.json();
})
.then(function(dataBanner){
    renderBanner(dataBanner);
    slickSlider();
})
// hien banner
let renderBanner = (dataBanner)=>{
    let printBanner = "";
    dataBanner.map((item, index) =>{
        if(item.hidden == 1){
            printBanner +=` <div class="image_slider">
            <img src="./IMAGES/${item.nameBanner}" alt="" />
            <div class="slider_left">
              <h5>${item.subTitle}</h5>
              <h2>${item.mainTitle}</h2>
              <p>
              ${item.content}
              </p>
              <button href="shop.html" class="btn_slider">Shop now</button>
            </div>
          </div>`
        }
    })
    boxBanner.innerHTML = printBanner;
}

// slider
var slickOurProduct = ()=>{

    $(document).ready(function () {
        $(".slider_product").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 2000,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });
      });
}

  var slickSlider = () =>{
      $(document).ready(function () {
          $(".slider_inner").slick({
              infinite: true,
              speed: 1000,
              fade: true,
              cssEase: 'linear',
              autoplay: true,
              autoplaySpeed: 1000,
              prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
              nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
          });
        });
}


//   our_product

fetch(linkProduct)
.then(function(response){
    return response.json();
})
.then((dataProduct)=>{
    let renderOurProduct = "";
    dataProduct.map((item, index)=>{
        if(item.showOurProduct == 1){
            renderOurProduct += `<div class="col l-3">
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
              <div class="product_add-car ">
                <i class="js_addCart fa-light fa-bag-shopping"></i>
                <input style="display: none;" class="product-data" type="text" value='${JSON.stringify(item)}'>
              </div>
            </div>
          </div>`
        }
    })
    boxOurProduct.innerHTML = renderOurProduct
    slickOurProduct()
})


