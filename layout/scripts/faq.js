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

// Pagination Configuration
const totalPages = 3; // Total number of pages
const currentPage = 1; // Current page (can be dynamically updated)
const paginationList = document.getElementById('pagination-list');

// Function to generate pagination links
function generatePagination(totalPages, currentPage) {
  let paginationHTML = '';

  // Previous Button
  if (currentPage > 1) {
    paginationHTML += `<li><a href="#" data-page="${currentPage - 1}">&laquo; Previous</a></li>`;
  }

  // First Page
  if (currentPage > 1) {
    paginationHTML += `<li><a href="#" data-page="1">1</a></li>`;
    if (currentPage > 2) {
      paginationHTML += `<li><strong>&hellip;</strong></li>`;
    }
  }

  // Middle Pages
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
    if (i === currentPage) {
      paginationHTML += `<li class="current"><strong>${i}</strong></li>`;
    } else {
      paginationHTML += `<li><a href="#" data-page="${i}">${i}</a></li>`;
    }
  }

  // Last Page
  if (currentPage < totalPages - 2) {
    if (currentPage < totalPages - 3) {
      paginationHTML += `<li><strong>&hellip;</strong></li>`;
    }
    paginationHTML += `<li><a href="#" data-page="${totalPages}">${totalPages}</a></li>`;
  }

  // Next Button
  if (currentPage < totalPages) {
    paginationHTML += `<li><a href="#" data-page="${currentPage + 1}">Next &raquo;</a></li>`;
  }

  // Insert pagination HTML into the list
  paginationList.innerHTML = paginationHTML;

  // Add click event listeners to pagination links
  const paginationLinks = document.querySelectorAll('#pagination-list a');
  paginationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = parseInt(link.getAttribute('data-page'));
      updatePagination(page);
    });
  });
}

// Function to update pagination
function updatePagination(newPage) {
  currentPage = newPage; // Update the current page
  generatePagination(totalPages, currentPage); // Re-render pagination
  // Add logic here to load content for the new page (e.g., fetch data or update the DOM)
  console.log(`Loading page ${currentPage}...`);
}

// Initial pagination generation
generatePagination(totalPages, currentPage);