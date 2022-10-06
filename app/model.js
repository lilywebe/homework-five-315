var userInfo = {};

var bookList = [
  {
    id: 0,
    imgURL: "images/to-kill-a-mockingbird.jpg",
    price: "15.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 1,
    imgURL: "images/becoming.jpg",
    price: "25.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
  {
    id: 2,
    imgURL: "images/firestarter.jpg",
    price: "15.99",
    desc: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis vel eros.",
  },
];

var cart = [];

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
    console.log(pageID);
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
      cart.forEach((item) => {});
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      callback();
    });
  }
}
export function setUserInfo(userObject) {
  userInfo = userObject;
  console.log(userInfo);
}

export function checkUserLogin(useremail, userpass) {
  //check to see if login info is correct, returns true if correct, false if not

  if (useremail == userInfo.email && userpass == userInfo.password) {
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

export function addToCart(bookIdx) {
  console.log(cart);

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
}
