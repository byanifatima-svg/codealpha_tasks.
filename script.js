const images = document.querySelectorAll(".gallery_images img");

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

const currentNumber = document.querySelector(".current_number");
const totalNumber = document.querySelector(".total_number");

let currentIndex = 0;


// Total number of images

totalNumber.textContent = String(images.length).padStart(2, "0");


// Update Gallery

function updateGallery() {

    images.forEach(function (img, index) {

        img.className = "";

        let position = index - currentIndex;

        const total = images.length;


        // Circular movement

        if (position > total / 2) {
            position -= total;
        }

        if (position < -total / 2) {
            position += total;
        }


        // Center

        if (position === 0) {
            img.classList.add("active");
        }


        // Left

        else if (position === -1) {
            img.classList.add("left");
        }


        // Right

        else if (position === 1) {
            img.classList.add("right");
        }


        // Left 2

        else if (position === -2) {
            img.classList.add("left2");
        }


        // Right 2

        else if (position === 2) {
            img.classList.add("right2");
        }


        // Other images

        else {
            img.classList.add("hidden");
        }

    });


    // Update counter

    currentNumber.textContent =
        String(currentIndex + 1).padStart(2, "0");

}



// Next Button

nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateGallery();

});



// Previous Button

prevBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateGallery();

});


updateGallery();