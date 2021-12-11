// workout page

$(".tabswrapper .tab")
  .click(function () {
    $(".tabswrapper .tab")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  })
  .eq(0)
  .addClass("active");



$(function () {
  var accItemlength = 2;

  var days1length = 7;
  var divsdayslength = 1;
  var weekTablength = 3;

  var objJson = [
    {
      daysName0: `Day 1 (Chest)`,
      daysName1: `Day 1 (Chest)`,
      exceriseDic: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass1">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass2">
                        </div>
                      </div>
                    </div>`,
      exceriseDic2: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass9">
                        </div>
                      </div>
                    </div>`,
    },
    {
      daysName0: `Day 2 (Arms)`,
      daysName1: `Day 2 (Arms)`,
      exceriseDic: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass3">
                        </div>
                      </div>
                    </div>`,
      exceriseDic2: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass10">
                        </div>
                      </div>
                    </div>`,
    },
    {
      daysName0: `Day 3 (Chest)`,
      daysName1: `Day 3 (Arms)`,
      exceriseDic: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass4">
                        </div>
                      </div>
                    </div>`,
      exceriseDic2: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass11">
                        </div>
                      </div>
                    </div>`,
    },
    {
      daysName0: `Day 4 (Chest)`,
      daysName1: `Day 4 (Chest)`,
      exceriseDic: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass5">
                        </div>
                      </div>
                    </div>`,
    },
    {
      daysName0: `Day 5 (Chest)`,
      exceriseDic: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass6">
                        </div>
                      </div>
                    </div>`,
    },
    {
      daysName0: `Day 6 (Chest)`,
      exceriseDic: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass7">
                        </div>
                      </div>
                    </div>`,
    },
    {
      daysName0: `Day 7 (Chest)`,
      exceriseDic: `<div class="row">
                      <div class="col-md-3">
                        <img src="./img/wop1.png" class="woimg" />
                      </div>
                      <div class="col-md-6">
                        <div>
                          <h1>Name of Excercise</h1>
                          <p>4 Sets X 8 Reps</p>
                          <a href="#" class="youtubebtn"><img src="./img/youtube-btn.svg" /></a>
                          <p>Play Video on YouTube</p>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="setsclass checkbox" id="setsclass8">
                        </div>
                      </div>
                    </div>`,
    },
  ];

  myFunction();

  function myFunction() {
    var text1 = ' ';
    var text2 = " ";
    var week2 = " ";
    var tabs = " ";
    for (var i = 1; i < weekTablength; i++) {
      text1 += "<div class='accordion tab_item' id='tab" + i + "'></div>";
    }
       document.getElementById("tabs-content").innerHTML = text1;
    for (var j = 0; j < days1length; j++) {
      text2 +=
        `<div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse0` +
        j +
        `"
                  aria-expanded="true">
                  ` +
        objJson[j].daysName0 +
        `
                </button>
              </h2>
              <div id='collapse0` +
        j +
        `' class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="acmainbody">
                       ` +
        objJson[j].exceriseDic +
        `
                  </div>
                </div>
              </div>
            </div> `;
            tabs= "tab1"; 
    }
      document.getElementById(tabs).innerHTML = text2;
    for (var showweek2 = 0; showweek2 <= 2; showweek2++) {
      week2 +=
        `<div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1` +
        showweek2 +
        `"
                  aria-expanded="true">
                  ` +
        objJson[showweek2].daysName1 +
        `
                </button>
              </h2>
              <div id='collapse1` +
        showweek2 +
        `' class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="acmainbody">
                       ` +
        objJson[showweek2].exceriseDic2 +
        `
                  </div>
                </div>
              </div>
            </div> `;
             tabs = "tab2"; 
    }
    document.getElementById(tabs).innerHTML = week2;



  }

});



$(function () {

  var looplebgth = 0;
  var lengthsets = 11;

  for (let setsOuter = 1; setsOuter <= lengthsets; setsOuter++) {
    looplebgth = looplebgth + 1;
    for (let setsInner = 1; setsInner <= 1; setsInner++) {
      for (let b = 1; b <= 4; b++) {
        $("#setsclass" + looplebgth + "").append(
          "<p>Set " +
            b +
            " <input id='check" +
            b +
            looplebgth +
            "' type='checkbox' name='check' value='check" +
            b +
            looplebgth +
            "' /><label for='check" +
            b +
            looplebgth +
            "'>Done</label> </p>"
        );
      }
    }
  }

});
