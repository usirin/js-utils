Number.prototype.floor = function() {
  return Math.floor(this);
};

Number.prototype.ceil = function() {
  return Math.ceil(this);
};

Number.prototype.round = function() {
  return Math.round(this);
};

Number.prototype.sqrt = function() {
  return Math.sqrt(this);
};

Number.prototype.powerOf = function(power) {
  return Math.pow(this, power);
};

Number.prototype.log = function() {
  return Math.log(this);
};

Number.prototype.abs = function() {
  return Math.abs(this);
};

Number.prototype.exp = function() {
  return Math.exp(this);
};

Number.prototype.times = function(callback) {
  for (var i = 0; i < this; i ++) {
    callback();
  }
  return this;
};