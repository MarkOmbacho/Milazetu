// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

document.getElementById('more').addEventListener('click', function() {
  const nextSection = document.getElementById('nextsection');
  nextSection.scrollIntoView({ behavior: 'smooth' });
});