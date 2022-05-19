class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Ooops, boat was sunk in ocean')
  pilot(): void {
    throw new Error();
  }
}

function logError(errorMessage: string) {
  return function (
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ): void {
    const method = descriptor.value;

    descriptor.value = function () {
      try {
        method();
      } catch {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();
