// CineMood — Controlled 3D Card Tilt & Glare Effect

function initCardTilt(card) {
  let bounds;

  function rotateToMouse(e) {
    if (!bounds) bounds = card.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.left;
    const topY = mouseY - bounds.top;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };

    // Keep tilt subtle (max 6 degrees) so it looks clean and premium
    const rotateX = (-center.y / (bounds.height / 2)) * 6;
    const rotateY = (center.x / (bounds.width / 2)) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }

  card.addEventListener('mouseenter', () => {
    bounds = card.getBoundingClientRect();
    card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease';
  });

  card.addEventListener('mousemove', rotateToMouse);

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.4s ease-out, box-shadow 0.3s ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
}
