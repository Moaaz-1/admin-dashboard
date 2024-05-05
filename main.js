document.querySelectorAll(".list ul li").forEach(function (ele) {
  ele.onclick = function () {
    document.querySelectorAll(".list ul li").forEach(function (ele) {
      ele.style.cssText = "background-color:none;border:none;";
    });
    document.querySelectorAll(".cont").forEach(function (ele) {
      ele.style.cssText = "display:none;";
    });
    document.querySelector(`.${this.id}`).style.display = "block";
    this.style.cssText =
      "background-color: #ffffff0b; border-left:3px solid white";
  };
});

document.querySelector(".list div i ").onclick = function (e) {
  // console.log(e.target.nextElementSibling.style.display);
  if (
    e.target.nextElementSibling.style.display === "" ||
    e.target.nextElementSibling.style.display === "none"
  ) {
    e.target.nextElementSibling.style.display = "block";
    e.target.style.backgroundColor = "var(--hover-color)";
  } else if (e.target.nextElementSibling.style.display === "block") {
    e.target.nextElementSibling.style.display = "none";
    e.target.style.backgroundColor = "transparent";
  }
};
document
  .querySelectorAll(".container-4 .header-4 .div1 .product-add input")
  .forEach(function (ele) {
    ele.onfocus = function () {
      document
        .querySelectorAll(".container-4 .header-4 .div1 .product-add input")
        .forEach(function (ele) {
          ele.style.cssText = "border:1px solid rgb(218, 218, 218)";
        });
      this.style.cssText = "border-left:2px solid blue;";
    };
    ele.onblur = function () {
      document.querySelectorAll("input").forEach(function (ele) {
        ele.style.cssText = "border:1px solid rgb(218, 218, 218)";
      });
    };
  });

document.querySelector(".div1 .add-btn").onclick = function addproduct() {
  document.querySelector(".div1 .product-add").style.cssText =
    "display:block !important;";
};
document.querySelector(".container-4 .header-4 .div1 .product-add i").onclick =
  function () {
    document.querySelector(
      ".container-4 .header-4 .div1 .product-add"
    ).style.display = "none";
  };
/////////////////////////// create element function /////////////////////////////
let products_array = [];
if (window.localStorage.getItem("Products")) {
  products_array = JSON.parse(window.localStorage.getItem("Products"));
} else {
  products_array = [];
}
function create_element_func() {
  let element = {
    id: 0,
    name: document.querySelector("#name").value,
    category: document.querySelector("#category").value,
    status: document.querySelector("#status").value,
    sales: document.querySelector("#sales").value,
    stock: document.querySelector("#stock").value,
    price: document.querySelector("#price").value,
  };
  let number_of_products = -1;
  for (let i = 0; i < document.querySelectorAll(".products tr").length; i++) {
    number_of_products += 1;
  }
  let new_ele = document.createElement("tr");
  new_ele.setAttribute("class", `product-${number_of_products + 1}`);
  let Price = document.createElement("td");
  Price.textContent = `$${element.price}`;
  let stock = document.createElement("td");
  stock.setAttribute("id", "stock-number");
  stock.textContent = `${element.stock}`;
  let sales = document.createElement("td");
  sales.textContent = `${element.sales}`;
  let status = document.createElement("td");
  status.textContent = `${element.status}`;
  status.className = "status-value";
  let category = document.createElement("td");
  category.textContent = `${element.category}`;
  let name = document.createElement("td");
  name.textContent = `${element.name}`;
  let img = document.createElement("img");
  img.src = `${
    document.querySelector(".container-4 .header-4 .div1 .product-add #file")
      .value
  }`;

  let product_delete_btn = document.createElement("button");
  let product_delete_td = document.createElement("td");
  product_delete_btn.textContent = "Delete";
  product_delete_td.appendChild(product_delete_btn);
  name.prepend(img);
  new_ele.appendChild(name);
  new_ele.appendChild(category);
  new_ele.appendChild(status);
  new_ele.appendChild(sales);
  new_ele.appendChild(stock);
  new_ele.appendChild(Price);
  new_ele.appendChild(product_delete_td);
  document.querySelector(".container-4 .products").appendChild(new_ele);

  if (status.textContent === "Active") {
    status.style.cssText = "color:#2ba972";
  } else {
    status.style.cssText = "color:#59719d";
    status.setAttribute("disabled", "");
    status.parentElement.style.backgroundColor = "black";
  }
  // product_delete_btn.onclick = function () {
  //   //////////////////Sweet alert//////////////////////////////
  //   Swal.fire({
  //     title: `Do you want to delete "${
  //       document.querySelector(
  //         `.${product_delete_btn.parentElement.parentElement.className}`
  //       ).firstChild.textContent
  //     }"?`,
  //     showDenyButton: true,
  //     // showCancelButton: true,
  //     confirmButtonText: "Yes",
  //     denyButtonText: `No`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire("Deleted!", "", "success");
  //       product_delete_btn.parentElement.parentElement.remove();
  //     } else if (result.isDenied) {
  //       Swal.fire("Changes are not saved", "", "info");
  //     }
  //   });
  //   ////////////////////////////////////////////////////////////
  // };

  products_array.push(element);
  window.localStorage.setItem("Products", JSON.stringify(products_array));
  // if (!window.localStorage.getItem("Products")) {
}
console.log(products_array);
//////////////////////get element from local storage//////////////////////////////////////////////
let localproduct = JSON.parse(localStorage.getItem("Products"));
if (JSON.parse(localStorage.getItem("Products")) === "") {
  localproduct = "";
}
if (window.localStorage.getItem("Products") !== null) {
  let number_of_products = -1;
  for (let i = 0; i < localproduct.length; i++) {
    for (let i = 0; i < document.querySelectorAll(".products tr").length; i++) {
      number_of_products += 1;
    }
    let new_ele = document.createElement("tr");
    new_ele.setAttribute("class", `product-${number_of_products + 1}`);
    let Price = document.createElement("td");
    Price.textContent = `$${localproduct[i].price}`;
    let stock = document.createElement("td");
    stock.setAttribute("id", "stock-number");
    stock.textContent = `${localproduct[i].stock}`;
    let sales = document.createElement("td");
    sales.textContent = `${localproduct[i].sales}`;
    let status = document.createElement("td");
    status.textContent = `${localproduct[i].status}`;
    status.className = "status-value";
    let category = document.createElement("td");
    category.textContent = `${localproduct[i].category}`;
    let name = document.createElement("td");
    name.textContent = `${localproduct[i].name}`;
    let img = document.createElement("img");
    img.src = `${
      document.querySelector(".container-4 .header-4 .div1 .product-add #file")
        .value
    }`;

    let product_delete_btn = document.createElement("button");
    let product_delete_td = document.createElement("td");
    product_delete_btn.textContent = "Delete";
    product_delete_td.appendChild(product_delete_btn);
    name.prepend(img);
    new_ele.appendChild(name);
    new_ele.appendChild(category);
    new_ele.appendChild(status);
    new_ele.appendChild(sales);
    new_ele.appendChild(stock);
    new_ele.appendChild(Price);
    new_ele.appendChild(product_delete_td);
    document.querySelector(".container-4 .products").appendChild(new_ele);

    if (status.textContent === "Active") {
      status.style.cssText = "color:#2ba972";
    } else {
      status.style.cssText = "color:#59719d";
      status.setAttribute("disabled", "");
      status.parentElement.style.backgroundColor = "black";
    }
    localproduct[i].id = new_ele.className;
    number_of_products = -1;
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector(
  ".container-4 .header-4 .div1 .product-add button"
).onclick = function () {
  let namevalid = false;
  let salesvalid = false;
  let stockvalid = false;
  let pricevalid = false;
  let imgvalid = false;
  let statusvalid = false;
  let categoryvalid = false;

  if (
    document.querySelector("#name").value !== "" &&
    document.querySelector("#name").value.length <= 20 &&
    document.querySelector("#name").value.length > 2
  ) {
    namevalid = true;
    document.querySelector("#name").nextElementSibling.style.display = "none";
  } else if (
    !(
      document.querySelector("#name").value !== "" &&
      document.querySelector("#name").value.length <= 20 &&
      document.querySelector("#name").value.length > 2
    )
  ) {
    document.querySelector("#name").nextElementSibling.style.display = "block";
  }
  if (document.querySelector("#sales").value !== "") {
    salesvalid = true;
    document.querySelector("#sales").nextElementSibling.style.display = "none";
  } else if (!(document.querySelector("#sales").value !== "")) {
    document.querySelector("#sales").nextElementSibling.style.display = "block";
  }
  if (document.querySelector("#stock").value !== "") {
    stockvalid = true;
    document.querySelector("#stock").nextElementSibling.style.display = "none";
  } else if (!(document.querySelector("#stock").value !== "")) {
    document.querySelector("#stock").nextElementSibling.style.display = "block";
  }
  if (document.querySelector("#price").value !== "") {
    pricevalid = true;
    document.querySelector("#price").nextElementSibling.style.display = "none";
  } else if (!(document.querySelector("#price").value !== "")) {
    document.querySelector("#price").nextElementSibling.style.display = "block";
  }
  if (document.querySelector("#status").value !== "") {
    statusvalid = true;
    document.querySelector("#status").nextElementSibling.style.display = "none";
  } else if (!(document.querySelector("#status").value !== "")) {
    document.querySelector("#status").nextElementSibling.style.display =
      "block";
  }
  if (document.querySelector("#category").value !== "") {
    categoryvalid = true;
    document.querySelector("#category").nextElementSibling.style.display =
      "none";
  } else if (!(document.querySelector("#category").value !== "")) {
    document.querySelector("#category").nextElementSibling.style.display =
      "block";
  }
  if (document.querySelector("#file").value !== "") {
    imgvalid = true;
    document.querySelector("#file").nextElementSibling.style.display = "none";
  } else if (!(document.querySelector("#file").value !== "")) {
    document.querySelector("#file").nextElementSibling.style.display = "block";
  }
  if (
    namevalid == false ||
    salesvalid == false ||
    stockvalid == false ||
    pricevalid == false ||
    imgvalid == false ||
    statusvalid == false ||
    categoryvalid == false
  ) {
    document
      .querySelector(".container-4 .header-4 .div1 .product-add button")
      .preventDefault();
  }

  ///////////////////////////////////////////////////////////////////////////////
  create_element_func();
  ///////////////////////////////////////////////////////////////////////////////
  document.querySelector("#name").value = "";
  document.querySelector("#category").value = "";
  document.querySelector("#status").value = "";
  document.querySelector("#sales").value = "";
  document.querySelector("#stock").value = "";
  document.querySelector("#price").value = "";
  document.querySelector(
    ".container-4 .header-4 .div1 .product-add #file"
  ).value = "";
};

let status_value = document.querySelector(".status-value").textContent;
let act = document.querySelectorAll(".status-value");
for (let i = 0; i < document.querySelectorAll(".status-value").length; i++) {
  if (act[i].textContent === "Active") {
    act[i].style.cssText = "color:#2ba972";
  } else {
    act[i].style.cssText = "color:#59719d";
    act[i].setAttribute("disabled", "");
    act[i].parentElement.style.backgroundColor = "black";
  }
}

document.querySelector(".div2 #search-input").onfocus = function (ele) {
  document.querySelector(".div2 #search-input").style.outline =
    "1px solid #6291fd";
  document.querySelector(".div2 #search-input").nextElementSibling.style.color =
    "#6291fd";
};
document.querySelector(".div2 #search-input").onblur = function (ele) {
  document.querySelector(".div2 #search-input").style.outline = "none";
  document.querySelector(".div2 #search-input").nextElementSibling.style.color =
    "white";
};
document.querySelector(".div2 #search-input").oninput = function () {
  for (
    let i = 1;
    i < document.querySelectorAll(".container-4 .products tr").length + 1;
    i++
  ) {
    if (
      document
        .querySelectorAll(".container-4 .products tr")
        [i].firstChild.nextSibling.textContent.includes(
          document.querySelector(".div2 #search-input").value
        ) ||
      document
        .querySelectorAll(".container-4 .products tr")
        [i].firstChild.nextSibling.textContent.toLowerCase()
        .includes(document.querySelector(".div2 #search-input").value) ||
      document
        .querySelectorAll(".container-4 .products tr")
        [i].firstChild.nextSibling.textContent.toUpperCase()
        .includes(document.querySelector(".div2 #search-input").value)
    ) {
      document.querySelectorAll(".container-4 .products tr")[i].style.display =
        "flex";
    } else {
      document.querySelectorAll(".container-4 .products tr")[i].style.display =
        "none";
    }
    if (document.querySelector(".div2 #search-input").value === "") {
      document.querySelectorAll(".container-4 .products tr")[i].style.display =
        "flex";
    }
  }
};

for (let i = 0; i < document.querySelectorAll(".status-value").length; i++) {
  if (document.querySelectorAll(".status-value")[i].textContent == "Disabled") {
    let element = document.querySelector(
      `.${
        document.querySelectorAll(".status-value")[i].parentElement.className
      } #stock-number`
    );
    element.textContent = "Out of stock";
    document.querySelectorAll(".status-value")[
      i
    ].parentElement.style.backgroundColor = "black";
  }
}
document
  .querySelectorAll(".container-4 .products tr td button")
  .forEach(function (ele) {
    ele.addEventListener("click", function () {
      //////////////////Sweet alert//////////////////////////////
      Swal.fire({
        title: `Do you want to delete "${
          document.querySelector(
            `.${ele.parentElement.parentElement.className}`
          ).firstChild.nextSibling.textContent
        }"?`,
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "", "success");
          ele.parentElement.parentElement.remove();
          for (let i = 0; i < products_array.length; i++) {
            if (
              JSON.parse(localStorage.getItem("Products"))[i].name ===
              ele.parentElement.parentElement.firstElementChild.textContent
            ) {
              products_array.splice(i, 1);
              localStorage.setItem("Products", JSON.stringify(products_array));
              break;
            }
          }
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      ////////////////////////////////////////////////////////////
    });
  });
document.querySelector(".container-4 .header-4 .div2 .span span").onclick =
  function () {
    if (
      window.innerWidth <= 454 &&
      !document
        .querySelector(".container-4 .header-4 .div2 .filter-menu")
        .classList.contains("hide-filter-menu")
    ) {
      document.querySelector(
        ".container-4 .header-4 .div2 .filter-menu"
      ).style.cssText = "left:0;top: 105px;";
      document.querySelector(
        ".container-4 .header-4 .div2 .span span"
      ).style.outline = "1px solid #6291fd";
      document
        .querySelector(".container-4 .header-4 .div2 .filter-menu")
        .classList.add("hide-filter-menu");
    } else if (
      window.innerWidth > 454 &&
      !document
        .querySelector(".container-4 .header-4 .div2 .filter-menu")
        .classList.contains("hide-filter-menu")
    ) {
      document.querySelector(
        ".container-4 .header-4 .div2 .filter-menu"
      ).style.cssText = "right:0;top: 60px;";
      document.querySelector(
        ".container-4 .header-4 .div2 .span span"
      ).style.outline = "1px solid #6291fd";
      document
        .querySelector(".container-4 .header-4 .div2 .filter-menu")
        .classList.add("hide-filter-menu");
    } else if (
      document
        .querySelector(".container-4 .header-4 .div2 .filter-menu")
        .classList.contains("hide-filter-menu")
    ) {
      document.querySelector(
        ".container-4 .header-4 .div2 .filter-menu"
      ).style.cssText = "right:-5000px;";
      document
        .querySelector(".container-4 .header-4 .div2 .filter-menu")
        .classList.remove("hide-filter-menu");
      document.querySelector(
        ".container-4 .header-4 .div2 .span span"
      ).style.outline = "none";
    }
  };

document.querySelector(
  ".container-4 .header-4 .div2 .filter-menu .filter-apply"
).onclick = function () {
  for (
    let i = 0;
    i <
    document.querySelectorAll(".container-4 .products .category-value").length;
    i++
  ) {
    console.log(
      document.querySelectorAll(".container-4 .products .category-value")[i]
        .textContent
    );
    if (
      document.querySelector(
        ".container-4 .header-4 .div2 .filter-menu #category-select"
      ).value ===
        document.querySelectorAll(".container-4 .products .category-value")[i]
          .textContent &&
      document.querySelector(
        ".container-4 .header-4 .div2 .filter-menu #status-select"
      ).value ===
        document.querySelectorAll(".container-4 .products .status-value")[i]
          .textContent
    ) {
      continue;
    } else {
      document.querySelectorAll(".container-4 .products .category-value")[
        i
      ].parentElement.style.display = "none";
    }
  }
};

document.querySelector(
  ".container-4 .header-4 .div2 .filter-menu .reset"
).onclick = function () {
  for (
    let i = 0;
    i <
    document.querySelectorAll(".container-4 .products .category-value").length;
    i++
  ) {
    document.querySelectorAll(".container-4 .products .category-value")[
      i
    ].parentElement.style.display = "flex";
  }
};
document.querySelector(".list .list-span-i").onclick = function () {
  if (
    !document
      .querySelector(".list .list-span-i")
      .classList.contains("hide-i-list")
  ) {
    document.querySelector(".list").style.cssText =
      "width:220px;z-index:3;transition:0.2s;";
    document.querySelector(".list div i").style.display = "block";
    document.querySelector(".list div h1").style.display = "block";
    // document.querySelector(".list .list-i").style.cssText =
    //   "transform: rotateZ(180deg);";
    for (
      let i = 0;
      i < document.querySelectorAll(".list ul li span").length;
      i++
    ) {
      document.querySelectorAll(".list ul li span")[i].style.cssText =
        "display:block; margin-left:10px;";
      document.querySelectorAll(".list ul li")[i].style.display = "flex";
    }
    document.querySelector(".list .list-span-i").classList.add("hide-i-list");
  } else if (
    document
      .querySelector(".list .list-span-i")
      .classList.contains("hide-i-list")
  ) {
    document.querySelector(".list").style.cssText =
      "width:50px;z-index:3;transition:0.2s;";
    document.querySelector(".list div i").style.display = "none";
    document.querySelector(".list div h1").style.display = "none";
    for (
      let i = 0;
      i < document.querySelectorAll(".list ul li span").length;
      i++
    ) {
      document.querySelectorAll(".list ul li span")[i].style.cssText =
        "display:none;";
      document.querySelectorAll(".list ul li")[i].style.display = "block";
    }
    document
      .querySelector(".list .list-span-i")
      .classList.remove("hide-i-list");
  }
};

//////////////////Search condition////////////////////////////////////

document.querySelector(".div2 #search-input").oninput = function () {
  document.querySelector(".div2 .search-span .fa-xmark").style.display =
    "block";
  for (
    let i = 1;
    i < document.querySelectorAll(".container-4 .products tr").length + 1;
    i++
  ) {
    if (
      document
        .querySelectorAll(".container-4 .products tr")
        [i].firstChild.nextSibling.textContent.includes(
          document.querySelector(".div2 #search-input").value
        ) ||
      document
        .querySelectorAll(".container-4 .products tr")
        [i].firstChild.nextSibling.textContent.toLowerCase()
        .includes(document.querySelector(".div2 #search-input").value) ||
      document
        .querySelectorAll(".container-4 .products tr")
        [i].firstChild.nextSibling.textContent.toUpperCase()
        .includes(document.querySelector(".div2 #search-input").value)
    ) {
      document.querySelectorAll(".container-4 .products tr")[i].style.display =
        "flex";
    } else {
      document.querySelectorAll(".container-4 .products tr")[i].style.display =
        "none";
    }
    if (document.querySelector(".div2 #search-input").value === "") {
      document.querySelectorAll(".container-4 .products tr")[i].style.display =
        "flex";
    }
  }
};
document.querySelector(".div2 .search-span .fa-xmark").onclick = function () {
  document.querySelector(".div2 .search-span .fa-xmark").style.display = "none";
  document.querySelector(".div2 #search-input").value = "";
  for (
    let i = 1;
    i < document.querySelectorAll(".container-4 .products tr").length + 1;
    i++
  ) {
    if (document.querySelector(".div2 #search-input").value === "") {
      document.querySelectorAll(".container-4 .products tr")[i].style.display =
        "flex";
    }
  }
};

///////////////////////////////////////////////////////////////////////////////////////////
window.onload = function () {
  ///////////////// transition ///////////////////
  document
    .querySelector(".container-1 .content .overview .stat-line .line1")
    .style.setProperty("--after-height", "100px");
  document
    .querySelector(".container-1 .content .overview .stat-line .line2")
    .style.setProperty("--after-height", "115px");
  document
    .querySelector(".container-1 .content .overview .stat-line .line3")
    .style.setProperty("--after-height", "85px");
  document
    .querySelector(".container-1 .content .overview .stat-line .line4")
    .style.setProperty("--after-height", "126px");
  document
    .querySelector(".container-1 .content .overview .stat-line .line5")
    .style.setProperty("--after-height", "50px");
  document
    .querySelector(".container-1 .content .overview .stat-line .line6")
    .style.setProperty("--after-height", "70px");
  document
    .querySelector(".container-1 .content .overview .stat-line .line7")
    .style.setProperty("--after-height", "95px");

  document
    .querySelector(".container-1 .earn .sales .projects .span1")
    .style.setProperty("--before-width", "70%");
  document
    .querySelector(".container-1 .earn .sales .projects .span2")
    .style.setProperty("--before-width", "50%");
  document
    .querySelector(".container-1 .earn .sales .projects .span3")
    .style.setProperty("--before-width", "90%");
  document
    .querySelector(".statistics .div4 div .span1")
    .style.setProperty("--after-height", "40px");
  document
    .querySelector(".statistics .div4 div .span2")
    .style.setProperty("--after-height", "70px");
  document
    .querySelector(".statistics .div4 div .span3")
    .style.setProperty("--after-height", "30px");
  document
    .querySelector(".statistics .div4 div .span4")
    .style.setProperty("--after-height", "60px");
  document
    .querySelector(".statistics .div4 div .span5")
    .style.setProperty("--after-height", "45px");

  document
    .querySelector(".statistics .div1 .doted-span .span1")
    .style.setProperty("--after-width", "38px");

  setTimeout(function () {
    document
      .querySelector(".statistics .div1 .doted-span .span2")
      .style.setProperty("--after-width", "38px");
  }, 1500);

  setTimeout(function () {
    document
      .querySelector(".statistics .div1 .doted-span .span3")
      .style.setProperty("--after-width", "38px");
  }, 2000),
    setTimeout(function () {
      document
        .querySelector(".statistics .div1 .doted-span .span4")
        .style.setProperty("--after-width", "38px");
    }, 2500);
  setTimeout(function () {
    document
      .querySelector(".statistics .div1 .doted-span .span5")
      .style.setProperty("--after-width", "38px");
  }, 3000);

  ///////////////////////////////////////////////
};

/////////////// the color of the last td in the home table ///////////////////
document.querySelectorAll(".accounts table tr").forEach(function (e) {
  // console.log(e.lastElementChild.firstChild);
  if (e.lastElementChild.firstChild.textContent == "Active") {
    e.lastElementChild.firstChild.style.cssText =
      "color:rgb(86,202,0);background-color:rgb(39 92 0);padding:5px 10px;border-radius:10px";
  } else if (e.lastElementChild.firstChild.textContent == "Inactive") {
    e.lastElementChild.firstChild.style.cssText =
      "color:rgb(88 88 88);background-color:rgb(180 180 180);padding:5px 10px;border-radius:10px";
  } else if (e.lastElementChild.firstChild.textContent == "Pending") {
    e.lastElementChild.firstChild.style.cssText =
      "color:rgb(255, 180, 0);background-color:rgb(106 78 11);padding:5px 10px;border-radius:10px";
  }
});
//////////////////////////////////////////////////////////////////////////////
document.querySelector(".profile-trans").addEventListener("click",()=>{
  document.querySelector("#container-2").click();
  document.querySelector(".list div i ").nextElementSibling.style.display="none";
  document.querySelector(".list div i ").style.backgroundColor="transparent";
});
//////////////////////////////////////////////////////////////////////////////
let profile_info=JSON.parse(sessionStorage.getItem("user-info"));
document.querySelectorAll(".container-2 .info div")[0].querySelector("input").value=profile_info.fname;
document.querySelectorAll(".container-2 .info div")[1].querySelector("input").value=profile_info.sname;
document.querySelectorAll(".container-2 .info div")[2].querySelector("input").value=profile_info.lname;
document.querySelectorAll(".container-2 .info div")[3].querySelector("input").value=profile_info.email;
document.querySelectorAll(".container-2 .info div")[4].querySelector("input").value=profile_info.num;
document.querySelectorAll(".container-2 .info div")[5].querySelector("input").value=profile_info.date;
document.querySelectorAll(".container-2 .info div")[6].querySelector("input").value=profile_info.age;
document.querySelectorAll(".container-2 .info div")[7].querySelector("input").value=profile_info.country;
let update_button=document.querySelector(".update .update-button");
update_button.onclick=function (){
  for(let i=0;i<8;i++){
    document.querySelectorAll(".container-2 .info div")[i].querySelector("input").removeAttribute("disabled");
  }
  document.querySelectorAll(".container-2 .info div")[0].querySelector("input").focus();
  document.querySelector(".update .save-button").removeAttribute("disabled");
}
let save_button =document.querySelector(".update .save-button");
save_button.onclick=function (){
  let info_update={
    fname:document.querySelector("#fname").value,
    sname:document.querySelector("#sname").value,
    lname:document.querySelector("#tname").value,
    email:document.querySelector("#email").value,
    num:document.querySelector("#num").value,
    date:document.querySelector("#date").value,
    age:document.querySelector("#age").value,
    country:document.querySelector("#country").value
  }
  sessionStorage.setItem("user-info",JSON.stringify(info_update));
  for(let i=0;i<8;i++){
    document.querySelectorAll(".container-2 .info div")[i].querySelector("input").setAttribute("disabled","");
  }
  document.querySelector(".container-2 .notification").style.cssText="display:block;";
  setInterval(() => {
    document.querySelector(".container-2 .notification").style.cssText="display:none;";
    
  }, 3000);
  save_button.setAttribute("disabled","");
}
