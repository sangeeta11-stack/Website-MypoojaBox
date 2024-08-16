//++++++++++++++++++++++++++++++++++++++++++++++++shop and home decore arrow ++++++++++++++++++++++++++++++++++++++++++++++++++++//


const dropdowns = document.querySelectorAll('.dropdown-toggle');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (event) {
        event.preventDefault();
        const parentLi = this.parentElement;
        parentLi.classList.toggle('open');

        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== this && otherDropdown.parentElement.classList.contains('open')) {
                otherDropdown.parentElement.classList.remove('open');
            }
        });
    });
});

document.addEventListener('click', function (event) {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.parentElement.classList.remove('open');
        }
    });
});

//++++++++++++++++++++++++++++++++++++++++++++++++ slider items ++++++++++++++++++++++++++++++++++++++++++++++++++++//

const slides = document.querySelectorAll(".slider-items")
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = ` ${index * 13.5}% `
    }
)


const next = () => {
    if (counter < slides.length - 8) {
        counter++;
        slideImage();
    }
}

const prev = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}% )`
        }

    )
}
//++++++++++++++++++++++++++++++++++++++++++++++++ video automatic play ++++++++++++++++++++++++++++++++++++++++++++++++++++//

const video = document.getElementById('rakhiVideo');
const volumeIcon = document.getElementById('volumeIcon');

window.addEventListener('load', function () {
    video.play();
});

function mute() {
    if (video.muted) {
        video.muted = false;
        volumeIcon.src = './Assets/volume.png';
    } else {
        video.muted = true;
        volumeIcon.src = './Assets/mute.png';
    }
}



//++++++++++++++++++++++++++++++++++++++++++++++++ review slider++++++++++++++++++++++++++++++++++++++++++++++++++++//

const review = document.querySelectorAll(".review-items");
let nextStep = 0;


const createPagination = () => {
    const paginationContainer = document.getElementById("pagination-dots");
    paginationContainer.innerHTML = ''; 

    for (let i = 0; i < 5; i++) {
        const dot = document.createElement("div");
        dot.classList.add("pagination-dot");
        if (i === 0) {
            dot.classList.add("active"); 
        }
        dot.setAttribute("data-slide", i);
        dot.onclick = () => goToSlide(i);
        paginationContainer.appendChild(dot);
    }
};

const updatePagination = () => {
    const dots = document.querySelectorAll(".pagination-dot");
    dots.forEach(dot => dot.classList.remove("active"));

    const activeDotIndex = nextStep % 5;
    dots[activeDotIndex].classList.add("active");
};

const goToSlide = (index) => {
    nextStep = index;
    slidemessage();
    updatePagination();
};

const Gonext = () => {
    nextStep = (nextStep >= review.length - 7) ? 0 : nextStep + 1;
    slidemessage();
    updatePagination();
};

const Goprev = () => {
    nextStep = (nextStep <= 0) ? review.length - 7 : nextStep - 1;
    slidemessage();
    updatePagination();
};

const slidemessage = () => {
    document.querySelector('.review-testimonial').style.transform = `translateX(-${nextStep * 20}%)`;
    document.querySelector('.review-testimonial').style.transition = 'transform 0.5s ease'; 
};

const autoSlide = () => {
    Gonext();
};

setInterval(autoSlide, 3000);

createPagination();

