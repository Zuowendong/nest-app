class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// B C 强耦合 A

class B {
  b: any;
  constructor() {
    this.b = new A("111").name;
  }
}

class C {
  c: any;
  constructor() {
    this.c = new A("222").name;
  }
}
