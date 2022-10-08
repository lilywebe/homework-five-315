var userInfo = {};

var bookList = [
  {
    id: 0,
    title: "To Kill A Mockingbird",
    imgURL: "images/to-kill-a-mockingbird.jpg",
    price: "15.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 1,
    title: "Becoming",
    imgURL: "images/becoming.jpg",
    price: "25.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 2,
    title: "Firestarter",
    imgURL: "images/firestarter.jpg",
    price: "15.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },

  {
    id: 3,
    title: "Twilight Box Set",
    imgURL: "images/twilight-box-set.jpg",
    price: "99.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 4,
    title: "Harry Potter Box Set",
    imgURL: "images/hp-box-set.jpg",
    price: "100.00",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 5,
    title: "Game of Thrones Box Set",
    imgURL: "images/got-box-set.jpg",
    price: "99.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 6,
    title: "Finding Me",
    imgURL: "images/finding me.jpg",
    price: "27.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 7,
    title: "Martin Luther King Jr Biography",
    imgURL: "images/mlk-biography.jpg",
    price: "19.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 8,
    title: "Eleanor Roosevelt Biography",
    imgURL: "images/eleanor-roosevelt-biography.jpg",
    price: "17.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 9,
    title: "Misery",
    imgURL: "images/misery.jpg",
    price: "19.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 10,
    title: "Frankenstein",
    imgURL: "images/frankenstein.jpg",
    price: "15.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 11,
    title: "Phantoms",
    imgURL: "images/phantoms.jpg",
    price: "19.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 12,
    title: "Winnie The Pooh",
    imgURL: "images/winnie the pooh.jpg",
    price: "19.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 13,
    title: "Cat and The Hat",
    imgURL: "images/cat and the hat.jpg",
    price: "15.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 14,
    title: "Fun Facts About Space",
    imgURL: "images/fun facts about space.jpg",
    price: "7.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
];

var cart = [];

var userSignedIn = false;

export function changePage(pageID, callback) {
  if (pageID == "home" || !pageID) {
    $.get(`pages/home.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      callback();
    });
  } else if (pageID == "books") {
    console.log(pageID);
    $.get(`pages/books.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);

      $.each(bookList, function (idx, book) {
        //add books to page here
      });
      callback();
    });
  } else if (pageID == "cart") {
    if (userSignedIn) {
      console.log(pageID);
      $.get(`pages/${pageID}.html`, function (data) {
        $("#app").html(data);
        cart.forEach((item) => {
          bookList.forEach((book) => {
            if (item.id == book.id) {
              $(".cart-items")
                .append(`<div class="cart-item"><div class="cart-item-img">
            <img src="${book.imgURL}" alt="" />
          </div>
          <div class="cart-item-text" id="">
            <div class="item-title">${book.title}</div>
            <div class="item-price">$${book.price}</div>
            <div class="in-stock">In Stock</div>
            
            <div class="quantity-change-delete">
              Qty: ${item.quantity}
              <button class="change-quantity" data-id="${item.id}">change</button>
      <button class="zero-quantity" data-id="${item.id}">delete</button>
            </div>
            </div>
            </div>
          
          <hr/>`);
            }
          });
        });
        callback();
      });
    } else {
      alert("You must sign in to view the cart!");
    }
  } else if (
    pageID == "blogpostone" ||
    pageID == "blogposttwo" ||
    pageID == "blogpostthree"
  ) {
    if (userSignedIn) {
      $.get(`pages/${pageID}.html`, function (data) {
        console.log("data " + data);
        $("#app").html(data);
        callback();
      });
    } else {
      alert("You must sign in to view blog posts!");
    }
  } else if (pageID == "account") {
    if (!userSignedIn) {
      $.get(`pages/${pageID}.html`, function (data) {
        console.log("data " + data);
        $("#app").html(data);
        callback();
      });
    } else {
      console.log("logout page");
      $.get(`pages/logout.html`, function (data) {
        console.log("data " + data);
        $("#app").html(data);
        callback();
      });
    }
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      //callback();
    });
  }
}
export function setUserInfo(userObject) {
  userInfo = userObject;
  userSignedIn = true;
  console.log(userInfo);
}

export function logUserOut() {
  userSignedIn = false;
}

export function checkUserLogin(useremail, userpass) {
  //check to see if login info is correct, returns true if correct, false if not

  if (useremail == userInfo.email && userpass == userInfo.password) {
    userSignedIn = true;
    return true;
  } else {
    return false;
  }
}

export function removeFromCart(bookIdx) {
  cart.forEach((item) => {
    if (item.id == bookIdx) {
      item.quantity -= 1;
    }
  });

  cart = $.grep(cart, function (item) {
    if (item.quantity > 0) {
      return true;
    } else {
      return false;
    }
  });
}

export function deleteFromCart(bookIdx, callback) {
  let index = 0;
  cart.forEach((item) => {
    if (item.id == bookIdx) {
      cart.splice(index, 1);
    }
    index++;
  });
  callback();
}

export function addToCart(bookIdx) {
  console.log(cart);
  if (userSignedIn) {
    let happened = false;

    cart.forEach((item) => {
      if (item.id == bookIdx) {
        item.quantity += 1;
        happened = true;
      }
    });

    if (!happened) {
      cart.push({
        id: bookIdx,
        quantity: 1,
      });
    }
  } else {
    alert("You must sign in to add to your cart!");
  }
}

export function changeCartQuantity(bookid, quantity, callback) {
  if (quantity !== null && quantity !== "" && !isNaN(quantity))
    cart.forEach((item) => {
      if (item.id == bookid) {
        item.quantity = quantity;
      }
    });
  callback();
}
