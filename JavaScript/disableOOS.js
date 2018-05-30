if (window.location.pathname.includes('product-p') || window.location.pathname.includes('ProductDetails')) {
  window.addEventListener('load', function() {
    if (document.querySelector('.PageText_L331n')) {
      var $vbuttons = document.getElementById('options_table').nextElementSibling.nextElementSibling.nextElementSibling;
      $vbuttons.style.display = 'none';
    }
  });
};
