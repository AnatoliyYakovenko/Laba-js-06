class Accumulator {
  constructor(initialValue) {
    this.value = initialValue;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}

class CancelableAccumulator extends Accumulator {
  constructor(initialValue) {
    super(initialValue);
    this.originalValue = initialValue;
  }

  clear() {
    this.value = this.originalValue;
  }
}
