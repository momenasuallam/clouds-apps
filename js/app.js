$(".slick-carousel").slick({
  infinite: true,
  slidesToShow: 3, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#toggletype").click(function () {
  $(".togletypediv").toggle();
});

$("#togglesort").click(function () {
  $(".toglesortdiv").toggle();
});

      var current_page = 1;
      var records_per_page = 10;

      var objJson = [
        {
          adName: ` <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img1.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: `
       <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img2.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
       <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img3.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
       <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img4.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
      <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img5.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
        <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img6.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>               
      `,
        },
        {
          adName: ` <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img7.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: `   <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img8.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: `  <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img9.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: ` <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img10.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: `
        <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img6.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>               
      `,
        },
        {
          adName: ` <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img7.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: `   <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img8.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: `  <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img9.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: ` <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img10.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: ` <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img1.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>`,
        },
        {
          adName: `
       <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img2.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
       <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img3.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
       <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img4.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
      <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img5.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
      <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img5.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
        {
          adName: `
       <div class="flexdivs">
                  <a href="#">
                    <img src="./img/img4.png" />
                  </a>
                  <div class="starsflex">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star notfillstar"></i>
                  </div>
                  <h5>Title Goes Here</h5>
                </div>
      `,
        },
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
        var btn_next = document.getElementById("btn_next");
        var btn_prev = document.getElementById("btn_prev");
        var listing_div = document.getElementById("listingdiv");
        var page_span = document.getElementById("pagination");

        // Validate page
        if (page < 1) page = 1;
        if (page > numPages()) page = numPages();

        listing_div.innerHTML = "";

        for (
          var i = (page - 1) * records_per_page;
          i < page * records_per_page && i < objJson.length;
          i++
        ) {
          listing_div.innerHTML += objJson[i].adName;
        }
        page_span.innerHTML = page + "/" + numPages();

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

     


