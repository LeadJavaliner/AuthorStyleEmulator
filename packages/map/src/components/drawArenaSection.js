function drawArenaSection(seatData) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textElement.setAttribute("x", "40");
  textElement.setAttribute("y", "135");
  textElement.setAttribute("fill", "#000000");
  textElement.textContent = "Section A";
  svg.appendChild(textElement);

  const rectElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rectElement.setAttribute("x", "40");
  rectElement.setAttribute("y", "140");
  rectElement.setAttribute("width", "460");
  rectElement.setAttribute("height", "580");
  rectElement.setAttribute("fill", "#EDEDED");
  svg.appendChild(rectElement);

  seatData.forEach((seat) => {
    const circleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleElement.setAttribute("cx", `${60 + (seat.seat.charCodeAt(0) - 65) * 50}`);
    circleElement.setAttribute("cy", `${160 + (seat.row - 1) * 100}`);
    circleElement.setAttribute("r", "15");
    circleElement.setAttribute("fill", seat.status === 'available' ? '#00FF00' : '#FF0000');
    svg.appendChild(circleElement);
  });

  // Attach the SVG to the DOM or return it as needed
  return svg;
}

// Example usage:
const seatData = [
  { id: 1, seat: 'A', row: 1, status: 'available' },
  { id: 2, seat: 'B', row: 1, status: 'unavailable' },
  { id: 3, seat: 'A', row: 2, status: 'available' },
  // Add more seat objects as needed
];

const arenaSectionSVG = drawArenaSection(seatData);
document.body.appendChild(arenaSectionSVG);
