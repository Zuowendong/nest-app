// 依赖注入，控制反转
class AA {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class BB {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Container {
  mo: any;
  constructor() {
    this.mo = {};
  }

  provide(key: string, mo: any) {
    this.mo[key] = mo;
  }

  get(key: string) {
    return this.mo[key];
  }
}

const mo = new Container();
mo.provide("a", new AA("111111111"));
mo.provide("b", new BB("222222222"));

class CC {
  a: any;
  b: any;
  constructor(mo: Container) {
    this.a = mo.get("a");
    this.b = mo.get("b");
  }
}
