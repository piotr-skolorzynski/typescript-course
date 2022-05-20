@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Ooops, boat was sunk in ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  // console.log(target);
  console.log(key);
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
