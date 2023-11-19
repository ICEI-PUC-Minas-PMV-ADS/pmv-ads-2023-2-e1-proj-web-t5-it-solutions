var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const filterInput = document.getElementById('filterInput');
  const items = document.querySelectorAll('.item');

  filterInput.addEventListener('input', () => {
      const filterText = filterInput.value.toLowerCase();

      items.forEach(item => {
          const button = item.querySelector('.accordion');
          const text = button.textContent.toLowerCase();

          if (text.includes(filterText)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
});