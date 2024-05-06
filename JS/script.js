// user
let User = document.getElementById("user");
let UserIn = document.getElementById("user-in");
let UserName = document.getElementById("user-name");

if(localStorage.getItem("username")){
    UserIn.style.display = "flex"
    User.style.display = "none"
    UserName.innerText = localStorage.getItem("username")
}


let LogoutBTN = document.getElementById("logout");

LogoutBTN.addEventListener('click', ()=> {
    localStorage.removeItem("username")
    window.location = "Login.html"
})
// user end
let Cards = document.querySelector(".cards");
let Cards2 = document.getElementById("cards2");
let Search = document.querySelector(".search");
let showitem = []
let AllLap = [
    {
        id: 1,
        name: "XPS 13",
        make:"Dell",
        price: 6000,
        num: 1,
        image: "https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/9/b/1/0/9b10fad8f1ea9a99a4e345b65397f9fc9746b865_629332.jpg"
    },
    {
        id: 2,
        name: "Vivobook Pro 15",
        make:"Asus",
        price: 2600,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/f/0/8/d/f08d3b7050d8466c8759851822e38ae491341790_592364.jpg"
    },
    {
        id: 3,
        name: "MateBook 14",
        make:"Huawei",
        price: 2700,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/f/e/7/5/fe75843750d7eba3b0137702e5c2679b2145ebf0_621254.jpg"
    },
    {
        id: 4,
        name: "MateBook D 14",
        make:"Huawei",
        price: 3000,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/7/2/0/6/7206d6c61e9fbc6cc804ed75c69b0336292cb36a_617689.jpg"
    },
    {
        id: 5,
        name: "MateBook 14",
        make:"Huawei",
        price: 3900,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/f/c/2/d/fc2d29aae2ff9c482566252824e0f48a76e2a5fa_622142.jpg"
    },
    {
        id: 6,
        name: "MateBook D 15",
        make:"Huawei",
        price: 2400,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/d/7/d/4/d7d49bcd04cbd5e0cc9878784bb23c80ef1e8e8b_608553.jpg"
    },
    {
        id: 7,
        name: "Vivobook S 15",
        make:"Asus",
        price: 2400,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/8/e/a/9/8ea9ea23e1bf525675ba92ac63dd7f9f1a9da263_626061.jpg"
    },
    {
        id: 8,
        name: "Zenbook 14X",
        make:"Asus",
        price: 4500,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/c/3/f/e/c3fec36bdfbb5499353fc34463cb8a4412cc9a18_620513.jpg"
    },
    {
        id: 9,
        name: "Vivobook 16",
        make:"Asus",
        price: 2300,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/b/9/9/e/b99e937ad73ab6126f8de796365b1645228d0f4c_619785.jpg"
    },
    {
        id: 10,
        name: "MateBook D 14",
        make:"Huawei",
        price: 2300,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/d/2/c/e/d2ce61bad4fd719a8ae0ca803545ddaa74f32acb_617791.jpg"
    },
    {
        id: 11,
        name: "MateBook D 15",
        make:"Huawei",
        price: 2800,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/c/5/c/7/c5c7cab882f5b2aad2afbd55de92c13ae763da94_608554.jpg"
    },
    {
        id: 12,
        name: "Vivobook 14X",
        make:"Asus",
        price: 4500,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/3/5/b/6/35b699519dc1c30edc8b0b6d2271cc7ba906a9fa_616784.jpg"
    },
    {
        id: 13,
        name: "Aspire 5",
        make:"Acer",
        price: 2600,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/d/c/1/d/dc1d77edd0c5df23f431fe45b55db64a3565fc35_597842.jpg"
    },
    {
        id: 14,
        name: "MateBook D 16",
        make:"Huawei",
        price: 4000,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/4/c/b/4/4cb44fab482678daf1dec3156f391954c4ec1584_628514.jpg"
    },
    {
        id: 15,
        name: "MacBook Air 13 M1",
        make:"Apple",
        price: 3700,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/m1/delta/558437.jpg"
    },
    {
        id: 16,
        name: "Pavilion Plus",
        make:"HP",
        price: 4600,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/e/8/4/a/e84a2d86e4e3f9359e7986d6855e13bd6c48d3cf_618713.jpg"
    },
    {
        id: 17,
        name: "Yoga Pro 7",
        make:"Lenovo",
        price: 6200,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/4/6/3/2/46327de52e06d58b09bf39f2cb050830fc2fec8c_628060.jpg"
    },
    {
        id: 18,
        name: "Pavilion Plus",
        make:"HP",
        price: 2800,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/e/b/6/f/eb6fefe76810c52799e47a5cc5bd1819b854d908_618692.jpg"
    },
    {
        id: 19,
        name: "MateBook D 16",
        make:"Huawei",
        price: 2300,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/e/f/f/7/eff7e27a5aeada722e0c1a17d7e91e08279bbb02_628654.jpg"
    },
    {
        id: 20,
        name: "Vivobook Go 15",
        make:"Asus",
        price: 2000,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/6/8/1/f/681f63c3405f2518e6f3025fa4a36d470cc1ffe6_620616.jpg"
    },
    {
        id: 21,
        name: "Zenbook S 13",
        make:"Asus",
        price: 4500,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/0/4/8/2/04826adac82f37aa45632951c3a0602773073a3a_616664.jpg"
    },
    {
        id: 22,
        name: "Vivobook 15X",
        make:"Asus",
        price: 3600,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/f/6/f/7/f6f7223213bb0b47a1635ba1333a0628ce0b4184_626071.jpg"
    },
    {
        id: 23,
        name: "Vostro 3510",
        make:"Dell",
        price: 1800,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/c/7/f/6/c7f67dd65f19a545ee8f8250a5585d22ec3c1788_621387.jpg"
    },
    {
        id: 24,
        name: "Yoga Slim 6 ",
        make:"Lenovo",
        price: 3500,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/f/1/b/f/f1bfb7a565e2b42e1417ebd11758eb42026bab45_618740.jpg"
    },
    {
        id: 25,
        name: "EliteBook 840 G10",
        make:"HP",
        price: 6300,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/f/d/0/5/fd057b239114f49467b83d9b23d210aca078a184_619497.jpg"
    },
    {
        id: 26,
        name: "MateBook D 16",
        make:"Huawei",
        price: 2800,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/4/5/1/e/451e60882227a97459a5a6a728ac8ef0d34afb0b_628657.jpg"
    },
    {
        id: 27,
        name: "Modern 14",
        make:"MSI",
        price: 2200,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/3/2/2/4/32244e001fe75d456b72da38ea425d9ee12c706f_614170.jpg"
    },
    {
        id: 28,
        name: "IdeaPad 3",
        make:"Lenovo",
        price: 2500,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/5/f/8/a/5f8aa7a7bc246da9b169ba40a971d65140f84b50_610888.jpg"
    },
    {
        id: 29,
        name: "IdeaPad Slim 3",
        make:"Lenovo",
        price: 1700,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/a/c/5/a/ac5ae0b4d57d251428133401bbb37d86b4378a7b_623277.jpg"
    },
    {
        id: 30,
        name: "Ideapad 5 Pro",
        make:"Lenovo",
        price: 5000,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/c/7/1/e/c71e576eb35ddcf34c52acbcc69cd4ec78f68070_610943.jpg"
    },
    {
        id: 31,
        name: "Yoga Slim 6 ",
        make:"Lenovo",
        price: 3800,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/d/3/b/a/d3bac9479ae124d3fbff8a5aae6a760684416233_627986.jpg"
    },
    {
        id: 32,
        name: "Vostro 3520",
        make:"Dell",
        price: 3000,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/1/2/f/4/12f4e2c578c25006c50c86e891ab3f7045f64d89_621390.jpg"
    },
    {
        id: 33,
        name: "Surface Go 3",
        make:"Microsoft",
        price: 2900,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/6/b/e/9/6be94b96b4806b6ab8db659d3a0395e41940bcf3_627896.jpg"
    },
    {
        id: 34,
        name: "Modern 14",
        make:"MSI",
        price: 1600,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/9/f/c/1/9fc16bf179a3038cb50e3a647553101a8101437c_629419.jpg"
    },
    {
        id: 35,
        name: "Swift 3",
        make:"Acer",
        price: 2500,
        num: 1,
        image:"https://www.jarir.com/cdn-cgi/image/fit=contain,width=380,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/b/b/e/a/bbea4973490db83ad20904c192554c91d9a63ca5_621025.jpg"
    }
]
let addCart = localStorage.getItem("addCart")?JSON.parse(localStorage.getItem("addCart")):[];
let addfav = localStorage.getItem("addfav")?JSON.parse(localStorage.getItem("addfav")):[];
let y = AllLap
if(Cards){
    function SearchLap (){
        Search.innerHTML =`
        <input type="text" id="search" onKeyUp="SearchShow()" placeholder="search"  />
        <select id="select">
            <option value="name">name</option>
            <option value="make">company</option>
            <option value="price">price</option>
        </select>
        `
    }
    SearchLap();
}

function SearchShow (){
    let searchitem = document.getElementById("search").value.toLowerCase();
    let Select = document.getElementById("select").value;
    if(Select == "name"){
        AllLap = AllLap.filter((ele)=>{
            return ele.name.toLocaleLowerCase().includes(searchitem)
        })
    }else if(Select == "make"){
        AllLap = AllLap.filter((ele)=>{
            return ele.make.toLocaleLowerCase().includes(searchitem)
        })
    }else if(Select == "price"){
        AllLap = AllLap.filter((ele)=>{
            return ele.price <= searchitem
        })
    }
    Cards.innerHTML = []
    ShowLap ()
}

if(Cards){
    function ShowLap (){
        AllLap.map((product)=>{
            Cards.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5>${product.make}</h5>
                <h5 class="card-title"><span>${product.make} </span>${product.name}</h5>
                <p class="card-text">${product.price} SAR</p>
                <div class="card-btn  d-flex justify-content-around">
                    ${FavChecker(product.id) ? `<a href="#" onClick="removeFav(${product.id})" class="btn btn-primary"><i class="fa-solid fa-heart"></i></a>`: `<a href="#" onClick="addToFav(${product.id})" class="btn btn-primary"><i class="fa-solid fa-heart-circle-plus"></i></a>`}
                    ${CartChecker(product.id) ? `<a href="#" onClick="removeCart(${product.id})" class="btn btn-primary"><i class="fa-solid fa-trash"></i></a>`: `<a href="#" onClick="addToCart(${product.id})" class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></a>`}
                    
                </div>
                </div>
            </div>
            `
        })
        AllLap = y
    }
    ShowLap()
}


// cart
let CartBadeg = document.getElementById("cart-badeg");
let CartProduct = document.querySelector(".cart-product ul");
let CartBtn = document.querySelector(".cart");
let CartMenu = document.querySelector(".cart-product");
let NumberCart = 1


function CartChecker (id) {
    const boolean = addCart.some((item) => item.id === id)
    return boolean;
};

let index1 = 0
let index2 = 0
if(addCart){
    addCart.map((product)=>{
    let get = localStorage.getItem(`${product.id}`)
    if(get == null){
        get = 1
    }
        CartProduct.innerHTML += `<li><img src="${product.image}" /><div><h5>${product.make} ${product.name}</h5><h4>${product.price} SAR</h4></div><div><i onClick="plusNum(${index1++},${product.id})" class="fa-solid fa-plus"></i><h6 class="numproduct m-0">${get}</h6><i onClick="minsNum(${product.id},${index2++},${get})" class="fa-solid fa-minus"></i></div></li>`;
    })
    CartBadeg.innerHTML = addCart.length
}
let numproduct = document.querySelectorAll(".numproduct")
if(addCart){
    function plusNum (ind,id){
        let choosenItem = AllLap.find((product)=> product.id === id)
        choosenItem.num += +1;
        let get = localStorage.getItem(`${choosenItem.id}`)
        localStorage.setItem(`${choosenItem.id}`, JSON.stringify(choosenItem.num))
        get = choosenItem.num
        numproduct[ind].innerHTML = get
    }
}


function minsNum(id,ind){
    let choosenItem = AllLap.find((product)=> product.id === id)
    console.log(choosenItem)
    if(choosenItem.num == 1){
        removeCart(id);
    }else{
        choosenItem.num += -1;
        console.log(choosenItem)
        let get = localStorage.getItem(`${choosenItem.id}`)
        localStorage.setItem(`${choosenItem.id}`, JSON.stringify(choosenItem.num))
        get = choosenItem.num
        numproduct[ind].innerHTML = get
        console.log(get)
    }
}
if(localStorage.getItem("username")){
    function addToCart (id){
        let choosenItem = AllLap.find((product)=> product.id === id)
        addCart.push(choosenItem)
        localStorage.setItem("addCart", JSON.stringify(addCart))
        CartBadeg.innerHTML = addCart.length
        window.location.reload()
    }
}else{
    function addToCart (){
        window.location = "Register.html"
    }
}


CartBtn.addEventListener("click", openCart )
function openCart(){
    if(CartMenu.style.display === "none"){
        CartMenu.style.display = "block"
        CartMenu.style.zIndex = "10"
    }else{
        CartMenu.style.display = "none"
    }
}
// cart end

// fav
let favBadeg = document.getElementById("fav-badeg");
let favProduct = document.querySelector(".fav-product ul");
let favBtn = document.querySelector(".fav");
let favMenu = document.querySelector(".fav-product");

function FavChecker (id) {
    const boolean = addfav.some((item) => item.id === id);
    return boolean;
  };
if(addfav){
    addfav.map((product)=>{
        favProduct.innerHTML += `<li><img src="${product.image}" /><div><h5>${product.make} ${product.name}</h5><h4>${product.price} SAR</h4></div></li>`
    })
    favBadeg.innerHTML = addfav.length
}

if(localStorage.getItem("username")){
    function addToFav (id){
        let choosenItem = AllLap.find((product)=> product.id === id)
        favProduct.innerHTML +=  `<li><img src="${choosenItem.image}" /><div><h5>${choosenItem.make} ${choosenItem.name}</h5><h4>${choosenItem.price} SAR</h4></div></li>`;
        addfav.push(choosenItem)
        localStorage.setItem("addfav", JSON.stringify(addfav))
        favBadeg.innerHTML = addfav.length
        window.location.reload()
    }
}else{
    function addToCart (){
        window.location = "Register.html"
    }
}

favBtn.addEventListener("click", openFav )
function openFav(){
    if(favMenu.style.display === "none"){
        favMenu.style.display = "block"
        favMenu.style.zIndex = "10"
    }else{
        favMenu.style.display = "none"
    }
}
function removeFav(id){
    let remove = addfav.filter((product)=> product.id !== id)
    localStorage.setItem("addfav", JSON.stringify(remove))
    window.location.reload()
}
// fav end

// cartlist
let cartlist = document.getElementById("cartlist");
if(cartlist){
    cartlist.innerHTML = addCart.map((item)=>{
        let get = localStorage.getItem(`${item.id}`)
        if(get == null){
            get = 1
        }
        return `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.make} ${item.name}</h5>
              <p class="card-text">${item.price} SAR</p>
              <div class="count"><i onClick="plusNum(${index1++},${item.id})" class="fa-solid fa-plus"></i><h6 class="numproduct m-0">${get}</h6><i onClick="minsNum(${item.id},${index2++},${get})" class="fa-solid fa-minus"></i></div>
              <h5>totle :${item.price * get} SAR</h5>
              <div class="card-btn  d-flex justify-content-around">
                <a href="#" onClick="removeCart(${item.id})" class="btn btn-primary"><i class="fa-solid fa-trash"></i></a>
                <a href="#" class="btn btn-primary">buy now</i></a>
              </div>
            </div>
        </div>
        `
    })

}
function removeCart(id){
    let remove = addCart.filter((product)=> product.id !== id)
    localStorage.setItem("addCart", JSON.stringify(remove))
    window.location.reload()
}

let FavItems = document.getElementById("FavItems");
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
if(addfav){
    FavItems.innerHTML = addfav.map((item)=>{
        return `
        <div class="swiper-slide">
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.make} ${item.name}</h5>
                <p class="card-text">${item.price} SAR</p>
                <div class="card-btn  d-flex justify-content-around">
                    <a href="#" onClick="removeFav(${item.id})" class="btn btn-primary"><i class="fa-solid fa-heart"></i></a>
                    ${CartChecker(item.id) ? `<a href="#" onClick="removeCart(${item.id})" class="btn btn-primary"><i class="fa-solid fa-trash"></i></a>`: `<a href="#" onClick="addToCart(${item.id})" class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></a>`}
                </div>
                </div>
            </div>
        </div>
        `
    })

}
// remove from cart list


// cartlist end