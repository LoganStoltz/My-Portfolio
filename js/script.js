// Author: Logan Stoltz 

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      } else {
          console.warn(`Target element ${targetId} not found.`);
      }
  });
});


let currentPage = 0;
const classPages = document.querySelectorAll('.class-page');
const totalPages = classPages.length;

function updatePage() {
  classPages.forEach((page) => {
      page.style.transform = `translateX(-${currentPage * 100}%)`;
  });

  document.querySelector('.left-button').disabled = currentPage === 0;
  document.querySelector('.right-button').disabled = currentPage === totalPages - 1;
}

function prevPage() {
  if (currentPage > 0) {
      currentPage--;
      updatePage();
  }
}

function nextPage() {
  if (currentPage < totalPages - 1) {
      currentPage++;
      updatePage();
  }
}