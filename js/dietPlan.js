

var current_page = 1;
var records_per_page = 5;

var objJson = [
  {
    dietPlan: `  <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>`,
  },
  {
    dietPlan: `
      <div class="divloads">
                      <div>
                         <img src="./img/img3.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>
      `,
  },
  {
    dietPlan: `
      <div class="divloads">
                      <div>
                         <img src="./img/img4.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>
      `,
  },
  {
    dietPlan: `
     <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>
      `,
  },
  {
    dietPlan: `
     <div class="divloads">
                      <div>
                         <img src="./img/img5.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>
      `,
  },
  {
    dietPlan: `
        <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>           
      `,
  },
  {
    dietPlan: ` <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>`,
  },
  {
    dietPlan: `    <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>`,
  },
  {
    dietPlan: ` <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>`,
  },
  {
    dietPlan: ` <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>`,
  },
  {
    dietPlan: `
         <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>            
      `,
  },
  {
    dietPlan: `  <div class="divloads">
                      <div>
                         <img src="./img/img2.png" />
                      </div>
                       <div>
                         <a href="#">Fav Diet Plan</a>
                         <span>Type goes here</span>
                       </div>
                    </div>`,
  }
]; // Can be obtained from another source, such as your objJson variable

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  var btn_next = document.getElementById("btn_nextd");
  var btn_prev = document.getElementById("btn_prevd");
  var listing_div = document.getElementById("dietplanloadid");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_div.innerHTML = "";

  for (
    var i = (page - 1) * records_per_page;
    i < page * records_per_page && i < objJson.length;
    i++
  ) {
    listing_div.innerHTML += objJson[i].dietPlan;
  }
  
  if (page == 1) {
    btn_prev.style.visibility = "hidden";
    btn_prev.style.display = "none";
  } else {
    btn_prev.style.visibility = "visible";
    btn_prev.style.display = "block";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
    btn_next.style.display = "none";
  } else {
    btn_next.style.visibility = "visible";
    btn_next.style.display = "block";
  }
}

function numPages() {
  return Math.ceil(objJson.length / records_per_page);
}

window.onload = function () {
  changePage(1);
};




