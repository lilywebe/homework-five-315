var userInfo = {};

var bookList = [];

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
  } else {
    console.log(pageID);
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      $.each(cart, function (idx, cartItem) {
        console.log(bookList[cartItem]);
        let book = bookList[cartItem];
        $(".items")
          .append
          //add books to cart
          ();
      });
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

export function addToCart(bookIdx) {
  console.log(cart);
  cart.push(bookIdx);
}
