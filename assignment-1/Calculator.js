class Calculator {
  constructor() {
    this.totalPrice = 0;
    this.isMember = false;
    this.menus = {
      red: new Menu("red", 50),
      green: new Menu("green", 40),
      blue: new Menu("blue", 30),
      yellow: new Menu("yellow", 50),
      pink: new Menu("pink", 80),
      purple: new Menu("purple", 90),
      orange: new Menu("orange", 120),
    };
  }

  membership(isMember) {
    this.isMember = isMember;
    return this.isMember
  }
  clear() {
    this.isMember = false;
    this.totalPrice = 0;
    for (const key in this.menus) {
      const menu = this.menus[key];
      menu.order = 0;
    }
  }
  addOrder(orderList) {
    if(!Array.isArray(orderList)){
        return "wrong input";
    }
    for (const order of orderList) {
        if (!(order in this.menus) || typeof order !== "string") {
          return "not found menu in order list";
        }
      }
      for (const order of orderList) {
        if (order in this.menus) {
          this.menus[order].order += 1;
        }
      }
    return this.menus;
  }

  calculation() {
    this.totalPrice = 0;
    for (const key in this.menus) {
      const menu = this.menus[key];
      let price = menu.price * menu.order;
      if (["orange", "pink", "green"].includes(key) && menu.order >= 2) {
        if(menu.order%2 == 1){
          price = price - menu.price;
          price = price * 0.95;
          price = price + menu.price;
        } else {
          price = price * 0.95;
        }
      }
      this.totalPrice += price;
    }
    if (this.isMember) {
      this.totalPrice *= 0.9;
    }

    return this.totalPrice.toFixed(2);
  }

  getResult() {
    return {totalPrice: this.totalPrice,order: this.menus,member: this.isMember};
  }

  deleteOrder(orderList) {
    for (const order of orderList) {
        if (!(order in this.menus) || typeof order !== "string") {
          return "not found menu in order list";
        }
      }
    for (const order of orderList) {
    if (this.menus[order].order > 0) {
        this.menus[order].order -= 1;
    }
    }
    return this.menus;
  }
}

class Menu {
  constructor(name, price) {
    this.menu = name;
    this.price = price;
    this.order = 0;
  }
}

export default Calculator;
