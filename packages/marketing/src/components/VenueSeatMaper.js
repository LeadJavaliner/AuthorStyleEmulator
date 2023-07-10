import React, { useRef, useState } from 'react';

function generateSeatData(numSections, numRowsPerSection, numSeatsPerRow) {
  const seatData = [];
  let seatId = 1;

  for (let section = 1; section <= numSections; section++) {
    for (let row = 1; row <= numRowsPerSection; row++) {
      for (let seatIndex = 0; seatIndex < numSeatsPerRow; seatIndex++) {
        const seatLetter = String.fromCharCode(65 + seatIndex);
        const seat = {
          id: seatId,
          row,
          seat: seatLetter,
          status: 'available',
        };
        seatData.push(seat);
        seatId++;
      }
    }
  }

  return seatData;
}

function drawArenaSection(x, y, width, height, numRows, numSeats, sectionName) {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const textElement = (
    <text x={x.toString()} y={(y + 95).toString()} fill="#000000">
      Section {sectionName}
    </text>
  );

  const rectElement = (
    <rect x={x.toString()} y={(y + 100).toString()} width={width.toString()} height={height.toString()} fill="#EDEDED" />
  );

  const seatData = [];
  for (let row = 1; row <= numRows; row++) {
    for (let seat = 0; seat < numSeats; seat++) {
      const seatId = seatData.length + 1;
      const seatChar = String.fromCharCode(65 + seat);
      const seatX = x + 20 + seat * 50;
      const seatY = y + 120 + (row - 1) * 100;
      const seatStatus = 'available';

      const seatElement = (
        <circle
          cx={seatX.toString()}
          cy={seatY.toString()}
          r="15"
          fill={seat.status === 'available' ? (selectedSeat === seat.id ? '#0000FF' : '#00FF00') : '#FF0000'}
          onClick={() => setSelectedSeat(seat.id)}
        />
      );
      

      seatData.push({
        id: seatId,
        seat: seatChar,
        row: row,
        status: seatStatus,
      });
    }
  }

  return (
    <svg>
      {textElement}
      {rectElement}
      {seatData.map((seat) => (
        <circle
          key={seat.id}
          cx={(x + 20 + (seat.seat.charCodeAt(0) - 65) * 50).toString()}
          cy={(y + 120 + (seat.row - 1) * 100).toString()}
          r="15"
          fill={seat.status === 'available' ? (selectedSeat === seat.id ? '#0000FF' : '#00FF00') : '#FF0000'}
          onClick={() => setSelectedSeat(seat.id)}
        />
      ))}
    </svg>
  );
}

const ArenaSection = () => {
  const svgRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [seatData, setSeatData] = useState(generateSeatData(3, 6, 9));



  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => (prevZoomLevel > 0.1 ? prevZoomLevel - 0.1 : prevZoomLevel));
  };

  const handlePan = (event) => {
    setPosition({
      x: event.target.scrollLeft,
      y: event.target.scrollTop,
    });
  };

  return (
    <div>
      {/* <div>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div> */}
      <div
        style={{
          width: '2000px',
          height: '2000px',
          overflow: 'scroll',
        }}
        onScroll={handlePan}
      >
        <svg
          ref={svgRef}
          width="2000"
          height="2000"
          transform={`translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`}
        >
          <text x="100" y="15" fill="#000000">Main Stage:</text>
          <rect x="100" y="20" width="1400" height="100" fill="#D9D9D9" />
          {drawArenaSection(40, 140, 460, 580, 6, 9, "A")}
          {drawArenaSection(565, 140, 460, 580, 6, 9, "B")}
          {drawArenaSection(1100, 140, 460, 580, 6, 9, "C")}
        </svg>
      </div>
    </div>
  );
};

export default ArenaSection;

