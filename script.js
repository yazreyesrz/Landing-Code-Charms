let index = 0;

function moverCarrusel(direccion) {
  const track = document.getElementById("carruselTrack");
  const cards = track.querySelectorAll("img");
  const visible = 3;
  const total = cards.length;

  const cardWidth = cards[0].offsetWidth + 32; // imagen + gap

  index += direccion;

  if (index < 0) index = 0;
  if (index > total - visible) index = total - visible;

  const scrollAmount = index * cardWidth;
  track.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}
