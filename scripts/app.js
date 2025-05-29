"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileDropdownBtn = document.querySelector(".profile-container");
  const mobileDropdown = document.querySelector(".profile-dropdown");
  const profileContent = document.querySelector(".profile-content");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("hamburger-menu--active");
    mobileMenu.classList.toggle("mobile-menu--active");
  });

  mobileDropdownBtn.addEventListener("click", () => {
    mobileDropdownBtn.classList.toggle("profile-container--open");
    profileContent.classList.toggle("profile-content--open");
  });
});