function Accumulator(initialValue) {
  this.value = initialValue;
}

Accumulator.prototype.increment = function () {
  this.value++;
};

Accumulator.prototype.decrement = function () {
  this.value--;
};
function CancelableAccumulator(initialValue) {
  Accumulator.call(this, initialValue);
  this.initialValue = initialValue;
}
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function () {
  this.value = this.initialValue;
};
