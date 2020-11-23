(function exportShip(){
function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
  const { itinerary } = this;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  if (currentPortIndex === (itinerary.ports.length - 1)) {
    throw new Error('End of itinerary reached');
  }

  this.previousPort = this.currentPort;
  this.currentPort = null;
  this.previousPort.removeShip(this);
};

Ship.prototype.dock = function () {
  const { itinerary } = this;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Ship;
} else {
  window.Ship = Ship;
}

}());