(function () {
  'use strict';

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }
  function qa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  // Attach basic interactions
  window.addEventListener('DOMContentLoaded', () => {
    const root = qs('#home-screen-125-171');
    if (!root) return;

    const buttons = qa('.icon-btn', root);
    const fab = qs('.fab', root);

    // Assign roles for accessibility
    buttons.forEach(btn => {
      btn.setAttribute('role', 'button');
      btn.setAttribute('tabindex', '0');
      btn.addEventListener('click', () => {
        const label = btn.getAttribute('aria-label') || 'button';
        console.log(`Clicked ${label}`);
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    if (fab) {
      fab.setAttribute('role', 'button');
      fab.setAttribute('tabindex', '0');
      fab.addEventListener('click', () => {
        console.log('Add Note action triggered');
      });
      fab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          fab.click();
        }
      });
    }
  });
})();
