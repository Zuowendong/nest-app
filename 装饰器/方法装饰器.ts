const methodDoc: MethodDecorator = (
  target: any,
  key: string | Symbol,
  descriptor: any
) => {
  console.log(target, key, descriptor);
};

class CC {
  public name: string;
  constructor() {
    this.name = "Hello World";
  }

  @methodDoc
  getName() {}
}
