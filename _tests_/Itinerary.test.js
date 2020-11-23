const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it('has a ports property', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');

    const itinerary = new Itinerary([calais, dover]);

    expect(itinerary).toHaveProperty('ports');
  });

  it('can have ports', () => {
    const dover = jest.fn();// new Port('Dover');
    const calais = jest.fn();// new Port('Calais');

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
