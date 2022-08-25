"use strict";

let svg = document.querySelector("svg");

let svgPosX = 0;
let xTouchPos = 0;
let touchStartX = 0;

let svgPosY = 0;
let yTouchPos = 0;
let touchStartY = 0;

let firstTouch = true;

map.addEventListener("touchend", (e) => {

    firstTouch = true;

});

map.addEventListener("touchmove", (e) => {

    if (firstTouch) {

        touchStartX = e.touches[0].clientX;
        svgPosX = svg.getBoundingClientRect().left;
        xTouchPos = touchStartX;

        svgPosY = svg.getBoundingClientRect().top;
        touchStartY = e.touches[0].clientY;
        yTouchPos = touchStartY;

        firstTouch = false;
    }


    xTouchPos = e.touches[0].clientX;
    yTouchPos = e.touches[0].clientY;

    svg.style.transform = `translate(${ touchStartX - xTouchPos + svgPosX }px, ${ touchStartY - yTouchPos + svgPosY  }px)`;





});
