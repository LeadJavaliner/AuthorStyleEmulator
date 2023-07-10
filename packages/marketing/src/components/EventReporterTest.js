import React from 'react';

const TicketSalesReport = () => {
  const ticketSalesData = [
    { ticketType: 'General Admission', ticketsSold: 150, totalTickets: 200, ticketPrice: 20 },
    { ticketType: 'VIP', ticketsSold: 50, totalTickets: 100, ticketPrice: 150 },
    { ticketType: 'Backstage Pass', ticketsSold: 10, totalTickets: 20, ticketPrice: 200 },
  ];

  const calculateRevenue = (ticketsSold, ticketPrice) => {
    return ticketsSold * ticketPrice;
  };

  const calculatePercentage = (ticketsSold, totalTickets) => {
    return ((ticketsSold / totalTickets) * 100).toFixed(2);
  };

  const calculatePossibleRevenue = (ticketSalesData) => {
    let totalPossibleRevenue = 0;
    ticketSalesData.forEach((ticket) => {
      totalPossibleRevenue += calculateRevenue(ticket.totalTickets, ticket.ticketPrice);
    });
    return totalPossibleRevenue;
  };

  const calculateCurrentTotalSales = (ticketSalesData) => {
    let currentTotalSales = 0;
    ticketSalesData.forEach((ticket) => {
      currentTotalSales += ticket.ticketsSold;
    });
    return currentTotalSales;
  };

  const calculateCurrentRevenueTotal = (ticketSalesData) => {
    let currentRevenueTotal = 0;
    ticketSalesData.forEach((ticket) => {
      const revenue = calculateRevenue(ticket.ticketsSold, ticket.ticketPrice);
      currentRevenueTotal += revenue;
    });
    return currentRevenueTotal;
  };

  const totalPossibleRevenue = calculatePossibleRevenue(ticketSalesData);
  const totalCurrentSales = calculateCurrentTotalSales(ticketSalesData);
  const totalCurrentRevenue = calculateCurrentRevenueTotal(ticketSalesData);

  const renderPieChart = () => {
    const colors = ['#FF6384', '#36A2EB', '#FFCE56'];
    let cumulativeAngle = 0;

    return (
      <svg width="220" height="220">
        {ticketSalesData.map((ticket, index) => {
          const percentageSold = calculatePercentage(ticket.ticketsSold, ticket.totalTickets);
          const sliceAngle = (ticket.ticketsSold / totalCurrentSales) * 360;
          const sliceRadius = 100;

          const startAngle = cumulativeAngle;
          const endAngle = cumulativeAngle + sliceAngle;
          cumulativeAngle += sliceAngle;

          const startRadians = (startAngle * Math.PI) / 180;
          const endRadians = (endAngle * Math.PI) / 180;

          const startX = Math.cos(startRadians) * sliceRadius + sliceRadius;
          const startY = Math.sin(startRadians) * sliceRadius + sliceRadius;
          const endX = Math.cos(endRadians) * sliceRadius + sliceRadius;
          const endY = Math.sin(endRadians) * sliceRadius + sliceRadius;

          const largeArcFlag = sliceAngle <= 180 ? '0' : '1';

          return (
            <path
              key={ticket.ticketType} // Use a unique key for each slice
              d={`M ${sliceRadius} ${sliceRadius} L ${startX} ${startY} A ${sliceRadius} ${sliceRadius} 0 ${largeArcFlag} 0 ${endX} ${endY} Z`}
              fill={colors[index]}
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div>
      <h1>Event Ticket Sales Report</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Ticket Type</th>
              <th>Tickets Sold</th>
              <th>Tickets Left</th>
              <th>Total Revenue</th>
              <th>Percentage Sold</th>
            </tr>
          </thead>
          <tbody>
            {ticketSalesData.map((ticket, index) => {
              const ticketsLeft = ticket.totalTickets - ticket.ticketsSold;
              const revenue = calculateRevenue(ticket.ticketsSold, ticket.ticketPrice);
              const percentageSold = calculatePercentage(ticket.ticketsSold, ticket.totalTickets);
  
              return (
                <tr key={index}>
                  <td>{ticket.ticketType}</td>
                  <td>{ticket.ticketsSold}</td>
                  <td>{ticketsLeft}</td>
                  <td>${revenue}</td>
                  <td>{percentageSold}%</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" align="right">
                <strong>Total Possible Revenue:</strong>
              </td>
              <td colSpan="2">${totalPossibleRevenue}</td>
            </tr>
            <tr>
              <td colSpan="3" align="right">
                <strong>Current Total Ticket Sales:</strong>
              </td>
              <td colSpan="2">{totalCurrentSales}</td>
            </tr>
            <tr>
              <td colSpan="3" align="right">
                <strong>Total Current Revenue:</strong>
              </td>
              <td colSpan="2">${totalCurrentRevenue}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div>{renderPieChart()}</div>
    </div>
  );
};  

export default TicketSalesReport;