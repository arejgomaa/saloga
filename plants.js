document.addEventListener("DOMContentLoaded", function () {
    const wrappers = document.querySelectorAll('.cards-wrapper');
  
    wrappers.forEach(wrapper => {
      const container = wrapper.querySelector('.cards-container');
      const leftBtn = wrapper.querySelector('.scroll-btn.left');
      const rightBtn = wrapper.querySelector('.scroll-btn.right');
  
      // لو الأزرار موجودة
      if (leftBtn && rightBtn && container) {
        leftBtn.addEventListener('click', () => {
          container.scrollBy({
            left: -container.clientWidth,
            behavior: 'smooth'
          });
        });
  
        rightBtn.addEventListener('click', () => {
          container.scrollBy({
            left: container.clientWidth,
            behavior: 'smooth'
          });
        });
      }
    });
  });



