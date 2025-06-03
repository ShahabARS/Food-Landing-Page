"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileDropdownBtn = document.querySelector(".profile-container");
  const profileMenu = document.querySelector(".profile-menu");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("hamburger-menu--active");
    mobileMenu.classList.toggle("mobile-menu--active");
  });

  mobileDropdownBtn.addEventListener("click", () => {
    mobileDropdownBtn.classList.toggle("profile-container--open");
  });

  profileMenu.addEventListener("click", () => {
    profileMenu.classList.toggle("profile-menu--open");
  });
});