"use strict";

// Cache DOM elements at the top for clarity
const menuBtn = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileDropdownBtn = document.querySelector(".profile-container");
const profileMenu = document.querySelector(".profile-menu");
const firstOfferBox = document.querySelector(".offer-box");
const offerBoxPicture = document.querySelector(".offer-box__picture");
const offerBoxTitle = document.querySelector(".offer-box__title");
const offerBoxCaption = document.querySelector(".offer-box__caption");
const offerBoxLocationText = document.querySelector(".offer-box-location__text");

// Toggle hamburger menu
function toggleMenu() {
  menuBtn.classList.toggle("hamburger-menu--active");
  mobileMenu.classList.toggle("mobile-menu--active");
}

// Toggle profile dropdown
function toggleProfileDropdown() {
  mobileDropdownBtn.classList.toggle("profile-container--open");
}

// Toggle profile menu
function toggleProfileMenu() {
  profileMenu.classList.toggle("profile-menu--open");
}

// Flip offer box content
function flipOfferBox() {
  if (firstOfferBox.classList.contains("offer-box--fliped")) {
    firstOfferBox.classList.remove("offer-box--fliped");
    setTimeout(() => {
      offerBoxPicture.src = "./images/Breakfast.jpg";
      offerBoxTitle.textContent = "Fire Water";
      offerBoxCaption.textContent =
        "A perfect blend of fire and water, this dish is a culinary masterpiece.";
      offerBoxLocationText.textContent = "Hitech City";
    }, 550);
  } else {
    firstOfferBox.classList.add("offer-box--fliped");
    setTimeout(() => {
      offerBoxPicture.src = "./images/pancake.jpg";
      offerBoxTitle.textContent = "The Wonton";
      offerBoxCaption.textContent =
        " we are all about we are all about to the fullest and all content dining out orin! dining out or in!";
      offerBoxLocationText.textContent = "Gachibowli";
    }, 550);
  }
}

// Responsive script for offer box flipping
let offerInterval = null;
function responsiveScript() {
  let width = window.innerWidth;
  if (width >= 320 && width <= 767) {
    if (!offerInterval) {
      offerInterval = setInterval(flipOfferBox, 6000);
    }
  } else {
    // Clear interval if not in mobile range
    if (offerInterval) {
      clearInterval(offerInterval);
      offerInterval = null;
    }
  }
}

// Add event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  menuBtn.addEventListener("click", toggleMenu);
  mobileDropdownBtn.addEventListener("click", toggleProfileDropdown);
  profileMenu.addEventListener("click", toggleProfileMenu);
  window.addEventListener("load", responsiveScript);
  window.addEventListener("resize", responsiveScript);
});