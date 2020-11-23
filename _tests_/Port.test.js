/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Port', () => {
  let port;

  beforeEach(() => {
    port = new Port('Calais');
  });

  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('has a name property', () => {
    expect(port).toHaveProperty('name', 'Calais');
  });
});

describe('addShip', () => {
  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = jest.fn();

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
});

describe('removeShip', () => {
  it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = jest.fn();
    const queenMary = jest.fn();

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
