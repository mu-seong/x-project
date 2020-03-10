$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item').hasClass('active')) {
        // Remove active classes
        $('.accordion-item').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-item').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-item').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});



const targets = document.querySelectorAll('[data-observer]')
const images = document.querySelectorAll('[data-img]')

const options = {
  rootMargin: '0px',
  threshold: 1.0
}

const addClass = (el) => {
	if (!el.classList.contains('is-visible')) {
		el.classList.add('is-visible')
	}
}

const removeClass = (el) => {
	if (el.classList.contains('is-visible')) {
		el.classList.remove('is-visible')
	}
}

const doThings = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			addClass(entry.target)
		} else {
			removeClass(entry.target)
		}
  })
}

const observer = new IntersectionObserver(doThings, options)

const observer2 = new IntersectionObserver(doThings, { ...options, threshold: 0.4 })

targets.forEach(target => {
	observer.observe(target)
})

images.forEach(target => {
	observer2.observe(target)
})
