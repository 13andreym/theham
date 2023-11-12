function liveTabs() {

  let tabsList = document.querySelector('.tabs-names');
  let tabsContent = document.querySelector('.tabs-content');
    
    tabsList.addEventListener('click', function (event) {
      
        if (event.target.classList.contains('tab-item')) {
      let index = Array.from(tabsList.children).indexOf(event.target);
      for (let i = 0; i < tabsList.children.length; i++) {
        tabsList.children[i].classList.remove('activation');
        tabsContent.children[i].classList.remove('activation');
            }
            
      event.target.classList.add('activation');
            tabsContent.children[index].classList.add('activation');
            
    }
  });
}


liveTabs();


// load more

const filterCards = document.querySelectorAll(".photo_card");
const photoButtons = document.querySelector(".photo_buttons");
const loadMoreBtn = document.querySelector(".load-more");
const loader = document.querySelector(".loader")

let  currFilter = "all";
let cardsNumber = 12;



function showLoader() {
    loadMoreBtn.classList.add("hide");
    loader.classList.remove("hide")
}

function hideLoader() {
    loadMoreBtn.classList.remove("hide")
    loader.classList.add("hide");

}

showCards();

loadMoreBtn.addEventListener("click", (event) => {
    event.preventDefault();


    showLoader();
    setTimeout(() => {
        cardsNumber += 12;
        hideLoader();
        showCards(currFilter);
    }, 2000);
});


photoButtons.addEventListener("click", function (event) {
    let currentBtn = document.querySelector(".photo-btn-active");
    currentBtn.classList.remove("photo-btn-active");
    event.target.classList.add("photo-btn-active");


    let filterButtons = event.target.dataset.filter;
    cardsNumber = 12;
    currFilter = filterButtons;
    showCards(filterButtons)
});


function showCards(filter = "all") {
    let j = 0;

    for (let i = 0; i < filterCards.length; i++) {
        if (
            (filterCards[i].classList.contains(filter) || filter === "all") &&
            j < cardsNumber
        ) {
            j++;
            filterCards[i].classList.remove("hide");
        } else {
            filterCards[i].classList.add("hide");
        }
    }

    if (j < cardsNumber) {
        loadMoreBtn.classList.add("hide");
    } else {
        loadMoreBtn.classList.remove("hide")
    }
}














// Testimonial slider - section "About Ham"
const slides = document.querySelectorAll(".slide"),
    thumbnails = document.querySelectorAll(".thumbnail"),
    leftArrow = document.querySelector(".left-arrow"),
    rightArrow = document.querySelector(".right-arrow");

let currentSlide = 0,
    currentActive = 0,
    testimTimer;

window.onload = function () {
    function playSlide(slide) {
        for (let k = 0; k < thumbnails.length; k++) {
            slides[k].classList.remove("active");
            thumbnails[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = slides.length - 1;
        }

        if (slide > slides.length - 1) {
            slide = currentSlide = 0;
        }

        slides[slide].classList.add("active");
        thumbnails[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide((currentSlide += 1));
        }, 4000);
    }

    leftArrow.addEventListener("click", function () {
        playSlide((currentSlide -= 1));
    });

    rightArrow.addEventListener("click", function () {
        playSlide((currentSlide += 1));
    });

    for (let l = 0; l < thumbnails.length; l++) {
        thumbnails[l].addEventListener("click", function () {
            playSlide((currentSlide = Array.from(thumbnails).indexOf(this)));
        });
    }

    playSlide(currentSlide);
};
