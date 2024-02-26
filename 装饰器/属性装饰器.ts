/**
 *
 * @param target 原型对象
 * @param key 属性
 */
const proDoc: PropertyDecorator = (target: any, key: string | Symbol) => {
  console.log(target, key);
};

class BB {
  @proDoc
  public name: string;
  constructor() {
    this.name = "hello ";
  }
}
