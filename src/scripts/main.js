'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

const localHostname = window.location.hostname;
const buttonsLearnMore = document.querySelectorAll('.learn-more');

buttonsLearnMore.forEach(button => {
  button.addEventListener('click', event => {
    document.location.href = localHostname + '#about-us';
    event.preventDefault();
  });
});

const buttonApply = document.querySelector('.button-apply');

buttonApply.addEventListener('click', event => {
  document.location.href = localHostname + '#contact-us';
  event.preventDefault();
});
