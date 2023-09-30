class Ticket {
  constructor(destination, price, status) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function f(ticketsStrings, sortBy) {
  const tickets = [];

  ticketsStrings.forEach(string => {
    let [destination, price, status] = string.split('|');
    price = Number(price);

    const ticket = new Ticket(destination, price, status);
    tickets.push(ticket);
  });

  tickets.sort((a, b) => {
    if (sortBy === 'destination' || sortBy === 'status') {
      return a[sortBy].localeCompare(b[sortBy]);
    }

    return a[sortBy] - b[sortBy];
  });
  console.log(tickets);
}

f(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
  ],
  'destination'
);

f(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
  ],
  'status'
);
