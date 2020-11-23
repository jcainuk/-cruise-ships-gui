/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
  describe('Ship', () => {
    describe('with ports and an itinerary', () => {
      let ship;
      let dover;
      let calais;
      let itinerary;
      let port;
      beforeEach(() => {
        port = {
          removeShip: jest.fn(),
          addShip: jest.fn(),
        };

        dover = {
          ...port,
          name: 'Dover',
          ships: [],
        };

        calais = {
          ...port,
          name: 'Calais',
          ships: [],
        };
        itinerary = {
          ports: [dover, calais],
        };

        ship = new Ship(itinerary);
      });
      it('can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
      });
      it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
      });
      it('can set sail', () => {
        // const dover = new Port('Dover');
        // const calais = new Port('Calais');

        // const itinerary = new Itinerary([dover, calais]);
        // const ship = new Ship(itinerary);

        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        // expect(dover.ships).not.toContain(ship);
        expect(dover.removeShip).toHaveBeenCalledWith(ship);
      });
      it('gets added to port on instantiation', () => {
        // const dover = new Port('Dover');
        // const itinerary = new Itinerary([dover]);
        // const ship = new Ship(itinerary);

        // expect(dover.ships).toContain(ship);
        expect(port.addShip).toHaveBeenCalledWith(ship);
        expect(calais.addShip).toHaveBeenCalledWith(ship);
      });
    });
  });
});

describe('setSail', () => {
  it('can\'t sail further than its itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});

describe('dock', () => {
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');

    const itinerary = {
      ports: [dover, calais],
    };

    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});
