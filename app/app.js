import * as model from "./model.js";
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);

  if (pageID == "" || pageID == "home" || pageID == "books") {
    model.changePage(pageID, buyNow);
  } else if (pageID == "account") {
    model.changePage(pageID, initSubmitListeners);
  } else {
    model.changePage(pageID);
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

//add buy listeners
function buyNow() {
  $(".bookInfo button").on("click", function (e) {
    let bookid = e.currentTarget.id;
    console.log(bookid);
    model.addToCart(bookid);
  });
}

function initSubmitListener() {
  //listener for sign up section of account page
  $("#submit-signup").on("click", function (e) {
    console.log("submit");
    let fn = $("#fName").val();
    let ln = $("#lName").val();
    let em = $("#email").val();
    let pw = $("#pw").val();

    //make sure to check that all fields are valid

    if (!fn && !ln && !email && !pw) {
      alert("you must respond to all fields");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: em,
        password: pw,
      };
      model.setUserInfo(userObj);
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
    }
  });
}

$(document).ready(function () {
  initURLListener();
});
