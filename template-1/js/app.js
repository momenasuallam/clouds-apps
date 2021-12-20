$(document).ready(function () {
  $("#datableresults").DataTable({
    // ajax: "../ajax/table.txt",
  });
});
// Interest Rate


let minDollarsIR = 1;
let maxDollarsIR = 100;

let minSliderIR = document.querySelector("#minir");
let maxSliderIR = document.querySelector("#maxir");

function numberWithSpacesIR(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function updateDollarsIR() {
  let fromValueIR =
    ((maxDollarsIR - minDollarsIR) * minSliderIR.value) / 100 + minDollarsIR;
  let toValueIR =
    ((maxDollarsIR - minDollarsIR) * maxSliderIR.value) / 100 + minDollarsIR;

  document.querySelector("#fromIR").textContent = `$${numberWithSpaces(
    Math.floor(fromValueIR)
  )}`;
  document.querySelector("#toIR").textContent = `$${numberWithSpaces(
    Math.floor(toValueIR)
  )}`;
}

maxSliderIR.addEventListener("input", () => {
  let minValueIR = parseInt(minSliderIR.value);
  let maxValueIR = parseInt(maxSliderIR.value);

  if (maxValueIR < minValueIR + 10) {
    minSliderIR.value = maxValueIR - 10;

    if (minValueIR === parseInt(minSliderIR.min)) {
      maxSliderIR.value = 10;
    }
  }

  updateDollarsIR();
});

minSliderIR.addEventListener("input", () => {
  let minValueIR = parseInt(minSliderIR.value);
  let maxValueIR = parseInt(maxSliderIR.value);

  if (minValueIR > maxValueIR - 10) {
    maxSliderIR.value = minValueIR + 10;

    if (maxValueIR === parseInt(maxSliderIR.max)) {
      minSliderIR.value = parseInt(maxSliderIR.max) - 10;
    }
  }

  updateDollarsIR();
});



// -----------------------------------------------


let minDollars = 500
let maxDollars = 15000

let minSlider = document.querySelector('#min')
let maxSlider = document.querySelector('#max')

function numberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function updateDollars() {
  let fromValue = (maxDollars - minDollars) * minSlider.value / 100 + minDollars
  let toValue   = (maxDollars - minDollars) * maxSlider.value / 100 + minDollars

  document.querySelector('#from').textContent = `$${numberWithSpaces(Math.floor(fromValue))}`
  document.querySelector('#to').textContent   = `$${numberWithSpaces(Math.floor(toValue))}`
}

maxSlider.addEventListener('input', () => {
  let minValue = parseInt(minSlider.value)
  let maxValue = parseInt(maxSlider.value)
   
  if (maxValue < minValue + 10) {
    minSlider.value = maxValue - 10
      
    if (minValue === parseInt(minSlider.min)) {
      maxSlider.value = 10
    }
  }

  updateDollars()
})

minSlider.addEventListener('input', () => {
  let minValue = parseInt(minSlider.value)
  let maxValue = parseInt(maxSlider.value)
 
  if (minValue > maxValue - 10) {
    maxSlider.value = minValue + 10
      
    if (maxValue === parseInt(maxSlider.max)) {
      minSlider.value = parseInt(maxSlider.max) - 10
    }
  }

  updateDollars()
})

// ----------------------------------------------------
$(function () {

  $(".tableresults1 tbody tr").on("click", function () {
    $("#tablerowdatamodal").modal("show");
  });
});