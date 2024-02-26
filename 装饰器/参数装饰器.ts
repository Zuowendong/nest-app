const paramDoc: ParameterDecorator = (
  target: any,
  key: string | symbol | undefined,
  index: any
) => {
  console.log(target, key, index);
};

class DD {
  public name: string;
  constructor() {
    this.name = "world";
  }

  getName(name: string, age: number, @paramDoc address: string) {}
}
