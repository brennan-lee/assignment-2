// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area of rhombus.
 */
function enterClicked() {
  // input
  const base = parseInt(document.getElementById("base-of-rhombus").value)
  const height = parseInt(document.getElementById("height-of-rhombus").value)

  // process
  const area = base * height

  // output
  document.getElementById("area-of-rhombus").innerHTML =
    "the area of the rhombus is: " + area + " cm²."
}
