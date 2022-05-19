class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
  }
}

function logError(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
): void {
  const method = descriptor.value;

  descriptor.value = function () {
    try {
      method();
    } catch {
      console.log('Ooops, boat was sunk');
    }
  };
}

new Boat().pilot();
