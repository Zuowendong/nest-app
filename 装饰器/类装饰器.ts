const doc: ClassDecorator = (target: any) => {
  // 构造器函数接收target，传入的class
  console.log(target);
  target.prototype.name = "Hello world";
};

@doc
class A {
  constructor() {}
}

const aa: any = new A();
console.log(aa.name);
