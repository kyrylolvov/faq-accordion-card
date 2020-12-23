"use strict";

const clickArea = document.getElementsByClassName(`textArrowSection`);
const text = document.querySelectorAll(`.dropdownText`);
const arrow = document.querySelectorAll(`.arrowImage`);
const dropDown = document.querySelectorAll(`.dropdownText`);
const visibleText = document.querySelectorAll(`.visibleText`);

const closeDropDown = function (i) {
  text[i].classList.remove(`openedText`);
  text[i].classList.add(`closedText`);
  arrow[i].classList.add(`arrowImageClosed`);
  arrow[i].classList.remove(`arrowImageOpened`);
  visibleText[i].classList.remove(`visibleTextBold`);
};

const openDropDown = function (i) {
  text[i].classList.add(`openedText`);
  text[i].classList.remove(`closedText`);
  arrow[i].classList.add(`arrowImageOpened`);
  arrow[i].classList.remove(`arrowImageClosed`);
  visibleText[i].classList.add(`visibleTextBold`);
};
for (let i = 0; i < clickArea.length; i++) {
  clickArea[i].addEventListener(`click`, function () {
    if (dropDown[i].classList.contains("closedText")) {
      openDropDown(i);
    } else {
      closeDropDown(i);
    }
  });
}
