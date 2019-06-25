class Carousel {
    constructor(carouselElement){
        this.imgData = carouselElement.dataset.img
        this.images = Array.from(carouselElement.querySelectorAll(`.imgWheel`))
        this.rightButton = carouselElement.querySelector('.right-button')
        this.leftButton = carouselElement.querySelector(".left-button")
        this.rightButton.addEventListener('click', () => goRight())
        this.leftButton.addEventListener('click', () => goLeft())
        this.currentIndex = 0
        console.log(this.images)
        console.log(this.images[this.currentIndex])
    }
}

let carouselElements = document.querySelectorAll('.carousel');
carouselElements.forEach((carouselElement) => new Carousel(carouselElement))

// this.imgArr = Array.from(document.querySelectorAll('imgWheel'))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
