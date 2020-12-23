"use strict";

const clickArea = document.getElementsByClassName(`textArrowSection`);
const text = document.querySelector(`.dropdownText`);
const arrow = document.querySelector(`.arrowImage`);
const dropDown = document.querySelector(`.dropdownText`);

const closeDropDown = function () {
  text.classList.remove(`openedText`);
  text.classList.add(`closedText`);
  arrow.classList.add(`arrowImageClosed`);
  arrow.classList.remove(`arrowImageOpened`);
};

const openDropDown = function () {
  text.classList.add(`openedText`);
  text.classList.remove(`closedText`);
  arrow.classList.add(`arrowImageOpened`);
  arrow.classList.remove(`arrowImageClosed`);
};
for (var i = 0; i < clickArea.length; i++) {
  clickArea[i].addEventListener(`click`, function () {
    if (dropDown.classList.contains("closedText")) {
      openDropDown();
    } else {
      closeDropDown();
    }
  });
}
