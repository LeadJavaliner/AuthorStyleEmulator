import React from 'react';

const TicketingSystem = () => {
  const event = {
    name: 'Awesome Concert',
    date: '2023-06-15',
    venue: 'Stadium Arena',
    tickets: [
      {
        id: 1,
        type: 'General Admission',
        price: 50,
        available: 1000,
      },
      {
        id: 2,
        type: 'VIP',
        price: 150,
        available: 100,
      },
      {
        id: 3,
        type: 'Premium',
        price: 100,
        available: 500,
      },
    ],
  };

  const handleBuyTicket = (ticketId) => {
    // TODO: Implement ticket purchase logic
    console.log(`Ticket ID ${ticketId} purchased!`);
  };

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Venue: {event.venue}</p>
      <h3>Tickets</h3>
      <ul>
        {event.tickets.map((ticket) => (
          <li key={ticket.id}>
            <p>Type: {ticket.type}</p>
            <p>Price: ${ticket.price}</p>
            <p>Available: {ticket.available}</p>
            <button
              onClick={() => handleBuyTicket(ticket.id)}
              disabled={ticket.available === 0}
            >
              Buy Ticket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketingSystem;
