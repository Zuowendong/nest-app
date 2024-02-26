import axios from "axios";

const Get = (url: string) => {
  return (target: any, key: any, descriptor: PropertyDescriptor) => {
    const fnc = descriptor.value;

    axios
      .get(url)
      .then((res) => {
        fnc(res, {
          status: 200,
          success: true,
        });
      })
      .catch((e) => {
        fnc(e, {
          status: 500,
          success: false,
        });
      });
  };
};

class Controller {
  constructor() {}

  @Get("https://api.apiopen.top/api/getMiniVideo?page=0&size=10")
  getImage(res: any, status: any) {
    console.log(111, res.data.result.list, status);
  }
}
