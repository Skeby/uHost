var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButtons = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(selectPlanButtons);

for(var i = 0; i < selectPlanButtons.length; i++){
    // Note: The addEventListener method accepts two arguments: the event in a string and the function name (the function that should be called when the event occurs)
    selectPlanButtons[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className += 'open'; This overwrites the complete string of class names
        modal.classList.add('open'); //This adds a CSS class, open to the modal
        backdrop.classList.add('open');
    });
}

modalNoButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal(){
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});