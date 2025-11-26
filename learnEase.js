const mobileNav = document.querySelector('.header-menu');
const mobileMenu = document.querySelector('.section-mobile-menu');
const mobileCancel = document.querySelector('.mobile-cancel');
const mobileCancel1 = document.querySelector('.main-body');

function showMobileMenu() {
    mobileMenu.style.display = 'block';
}
mobileNav.addEventListener('click', showMobileMenu);

function hideMobileMenu() {
    mobileMenu.style.display = 'none';
}
mobileCancel.addEventListener('click', hideMobileMenu);
mobileCancel1.addEventListener('click', hideMobileMenu);


const SLNredirect = document.getElementById('SLN-redirect-div')
const SLNredirectFetch = document.getElementById('SLN-summaryBtn')
const SLNredirectCancel = document.getElementById('SLN-redirect-cancel')

function showSlnRedirect() {
    SLNredirect.style.display = 'block';
}
SLNredirectFetch.addEventListener('click', showSlnRedirect);

function hideSlnRedirect() {
    SLNredirect.style.display = 'none';
}
SLNredirectCancel.addEventListener('click', hideSlnRedirect);



const redirect = document.getElementById('redirect-div')
const redirectFetch = document.getElementById('summaryBtn')
const redirectCancel = document.getElementById('redirect-cancel')

function showRedirect() {
    redirect.style.display = 'block';
}
redirectFetch.addEventListener('click', showRedirect);

function hideRedirect() {
    redirect.style.display = 'none';
}
redirectCancel.addEventListener('click', hideRedirect);




const exredirect = document.getElementById('ex-redirect-div')
const exredirectFetch = document.getElementById('explainBtn')
const exredirectCancel = document.getElementById('ex-redirect-cancel')

function exShowRedirect() {
    exredirect.style.display = 'block';
}

exredirectFetch.addEventListener('click', exShowRedirect);

function exHideRedirect() {
    exredirect.style.display = 'none';
}
exredirectCancel.addEventListener('click', exHideRedirect);




const quredirect = document.getElementById('qu-redirect-div')
const quredirectFetch = document.getElementById('quizBtn')
const quredirectCancel = document.getElementById('qu-redirect-cancel')

function quShowRedirect() {
    quredirect.style.display = 'block';
}

quredirectFetch.addEventListener('click', quShowRedirect);

function quHideRedirect() {
    quredirect.style.display = 'none';
}
quredirectCancel.addEventListener('click', quHideRedirect);