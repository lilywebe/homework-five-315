import * as model from "./model.js";
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);

  if (pageID == "" || pageID == "home" || pageID == "books") {
    model.changePage(pageID, buyNow);
  } else if (pageID == "account") {
    model.changePage(pageID, initSubmitListeners);
  } else if (pageID == "cart") {
    model.changePage(pageID, initQuantityListeners);
  } else {
    model.changePage(pageID);
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function reloadCart() {
  model.changePage("cart", initQuantityListeners);
}

function initQuantityListeners() {
  $(".change-quantity").on("click", function (e) {
    let bookid = e.currentTarget.getAttribute("data-id");

    let quantity = prompt("How many would you like?");
    model.changeCartQuantity(bookid, quantity, changeRoute);
  });

  $(".zero-quantity").on("click", function (e) {
    let bookid = e.currentTarget.getAttribute("data-id");

    model.deleteFromCart(bookid, changeRoute);
    console.log("deleted");
  });
}

//add buy listeners
function buyNow() {
  $(".book-btn").on("click", function (e) {
    let bookid = e.currentTarget.id;
    console.log(bookid);
    model.addToCart(bookid);
  });
}

function initSubmitListeners() {
  //listener for sign up section of account page
  $("#submit-signup").on("click", function (e) {
    console.log("submit");
    let fn = $("#fName").val();
    let ln = $("#lName").val();
    let em = $("#email").val();
    let pw = $("#pw").val();

    //make sure to check that all fields are valid

    if (!fn || !ln || !em || !pw) {
      alert("you must respond to all fields");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: em,
        password: pw,
      };
      model.setUserInfo(userObj);
      alert("You are logged in ");
      model.changePage("home", buyNow);
    }

    //console.log(fn, ln, email, pw);
  });
  //listener for login section of page
  $("#submit-login").on("click", function (e) {
    let useremail = $("#uemail").val();
    let userpass = $("#upass").val();

    //check both fields are valid
    if (!useremail && !userpass) {
      alert("please enter a username and password");
    } else {
      if (model.checkUserLogin(useremail, userpass)) {
        //if user's login info is correct, alerts them that they are logged in and redirects to home page
        alert("You are logged in ");
        model.changePage("home", buyNow);
      }
      //if login info is incorrect, alerts the user that its incorrect
      else {
        alert("Your username or password is incorrect");
      }
    }
  });
  $("#logout").on("click", function (e) {
    model.logUserOut();
    alert("You are now logged out");
    model.changePage("home", buyNow);
  });
}

$(document).ready(function () {
  initURLListener();
});
