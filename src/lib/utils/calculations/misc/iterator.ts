export class Iterator<T> {
  private array: Array<T>;
  private pointer: number;
  private length: number;

  constructor(array: Array<T>) {
    if (!array.length) throw new Error('Array is empty.');

    this.array = array;
    this.pointer = -1;
    this.length = array.length;
  }

  next() {
    this.pointer += 1;

    if (this.pointer > this.length) this.pointer = this.length - 1;

    return this.array[this.pointer];
  }

  prev() {
    this.pointer -= 1;

    if (this.pointer < 0) this.pointer = 0;

    return this.array[this.pointer];
  }

  getArray() {
    return [...this.array];
  }

  getLength() {
    return this.length;
  }

  getPointer() {
    return this.pointer;
  }
}
