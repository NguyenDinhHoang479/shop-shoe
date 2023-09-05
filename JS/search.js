var search = document.querySelector('.search_content');
var buttonSearch = document.querySelector('.btn_search')


let searching = () => {
    let value = search.value;
    fetch('./JSON/product.json')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let params = value.toLowerCase().split(' ');
        data.forEach((element,index) => {
            data[index] = {...element, nameProduct: element.nameProduct.toLowerCase(), match: 0}
        });
        params.map((item)=>{
            data.forEach((el,idx)=>{
                if(el.nameProduct.includes(item)){
                    data[idx] = {...el, match: data[idx].match + 1}
                }
            })
        })
        data = data.sort((a,b) => b.match - a.match);
        let max = data[0].match;
        let result = data.filter(item => item.match >= max);
        console.log(result);
        // render search    
        renderSearch(result)

    })
}
    function renderSearch(result){
        let renderSearch = "";
        result.map((item, index)=>{
            renderSearch += `<div class="col l-3">
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
    document.querySelector(".js_boxSearch").innerHTML = renderSearch
    }
