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
	card.addEventListener('click', function () {
		this.style.display = 'none';
	});
}

// Set onclick property of restoreButton to anonymous function
restoreButton.onclick = function () {
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

function makeResponsive(mql) {
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
greyBtn.onclick = function() {
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
blurBtn.onclick = function () {
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
