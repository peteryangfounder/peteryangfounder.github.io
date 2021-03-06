// Store DOM elements for later use
const cards = document.querySelectorAll('.card');
const images = document.querySelectorAll('img');
const restoreButton = document.querySelector('.btn-success');
const mediaQueryList = window.matchMedia('(min-width: 800px)');
const flexContainer = document.querySelector('.p-2');
const greyBtn = document.querySelector('#greyscale');
const blurBtn = document.querySelector('#blur');

// Add event listeners to each card using loop to hide upon click
for (let card of cards) {
	// Pre: No preconditions/function parameters
	// Post: Clicked card will disappear
	card.addEventListener('click', function () {
		// Function description: Sets display property of card to 'none'
		this.style.display = 'none';
	});
}

// Set onclick property of restoreButton to anonymous function
// Pre: No preconditions/function parameters
// Post: All cards will appear/reappear without filters
restoreButton.onclick = function () {
	// Function description: Resets cards to default state by recovering any deleted cards and removing any image filters
	// First loop makes cards reappear on screen
	for (let card of cards) {
		card.style.display = 'block';
	}
	// Second loop removes all classes from image nodes and then adds the "card-img-top" Bootstrap default class to each
	for (let image of images) {
		image.className = '';
		image.classList.add('card-img-top');
	}
};

// Add listener to mediaQueryList to call makeResponsive function upon crossing breakpoint
mediaQueryList.addListener(makeResponsive);

// Pre: mql will be a MediaQueryList object
// Post: Page will be responsive
function makeResponsive(mql) {
	// Function description: Makes website responsive across devices
	// If screen resolution is less than 800px, remove desktop class
	if (!mql.matches) {
		flexContainer.classList.remove('d-flex');
		// If screen resolution is at least 800px, add desktop class
	} else {
		flexContainer.classList.add('d-flex');
		// Loop through cards and add 5px margins all around
		for (let card of cards) {
			card.style.margin = '5px';
		}
	}
}

// Call makeResponsive function at run time
makeResponsive(mediaQueryList);

// Set onclick property of greyBtn to anonymous function
// Pre: No preconditions/function parameters
// Post: Greyscale filter on images will be toggled
greyBtn.onclick = function () {
	// Function description: Applies/removes greyscale filter on images
	// Loop through images and ensure proper filter classes are active
	for (let image of images) {
		if (image.classList.contains('blur') && !image.classList.contains('greyscale'))
			image.classList.toggle('blur-greyscale');
		else if (image.classList.contains('blur-greyscale')) {
			image.classList.toggle('blur-greyscale');
			image.classList.toggle('greyscale');
			image.classList.toggle('blur');
		} else {
			image.classList.toggle('greyscale');
		}
	}
};

// Set onclick property of blurBtn to anonymous function
// Pre: No preconditions/function parameters
// Post: Blur filter on images will be toggled
blurBtn.onclick = function () {
	// Function description: Applies/removes blur filter on images
	// Loop through images and ensure proper filter classes are active
	for (let image of images) {
		if (image.classList.contains('greyscale'))
			image.classList.toggle('blur-greyscale');
		else if (image.classList.contains('blur-greyscale')) {
			image.classList.toggle('blur-greyscale');
			image.classList.toggle('greyscale');
			image.classList.toggle('blur');
		} else {
			image.classList.toggle('blur');
		}
	}
};
