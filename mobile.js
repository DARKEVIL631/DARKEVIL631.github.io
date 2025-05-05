document.querySelectorAll('.paper').forEach(item => {
  item.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    item.style.position = 'absolute';
    item.style.zIndex = '1000';
    document.body.appendChild(item);

    function moveAt(pageX, pageY) {
      item.style.left = pageX - item.offsetWidth / 2 + 'px';
      item.style.top = pageY - item.offsetHeight / 2 + 'px';
    }

    function onTouchMove(event) {
      moveAt(event.touches[0].pageX, event.touches[0].pageY);
    }

    document.addEventListener('touchmove', onTouchMove);

    item.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', onTouchMove);
    });
  });
});