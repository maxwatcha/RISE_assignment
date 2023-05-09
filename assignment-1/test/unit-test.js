import assert from "assert";
import { expect } from "chai";
import Calculator from "../calculator.js";
const testCases = {
  tc1: {
    title: "tc1: normal",
    orders: ["red", "green", "orange", "blue", "yellow", "pink", "purple"],
    result: 460.0,
    resultMember: 414.0,
  },
  tc2: {
    title: "tc2: with 3 orange for check 5% discount",
    orders: [
      "red",
      "green",
      "orange",
      "blue",
      "yellow",
      "pink",
      "orange",
      "orange",
      "purple",
    ],
    result: 688.0,
    resultMember: 619.2,
  },
  tc3: {
    title: "tc3: with 2 pink for check 5% discount",
    orders: ["orange", "blue", "yellow", "pink", "pink"],
    result: 352.0,
    resultMember: 316.8,
  },
  tc4: {
    title: "tc4: with 3 green for check 5% discount",
    orders: ["red", "green", "green", "green","purple", "orange"],
    result: 376.0,
    resultMember: 338.4,
  },
  tc5: {
    title: "tc5: with 2 pink + 11 orange for check 5% discount",
    orders: ["pink", "pink", "orange", "orange","orange", "orange","orange", "orange","orange", "orange","orange", "orange", "orange"],
    result: 1412.0,
    resultMember: 1270.8,
  },
  tc6: {
    title: "tc6: with 2 green + 2 orange for check 5% discount",
    orders: ["green", "green", "orange", "orange"],
    result: 304.0,
    resultMember: 273.6,
  },
  tc7: {
    title: "tc7: with 2 green + 5 pink for check 5% discount",
    orders: ["green", "green", "pink", "pink", "pink", "pink", "pink"],
    result: 460.0,
    resultMember: 414,
  },
  tc8: {
    title: "tc8: with 2 green + 2 pink + 2 orange for check 5% discount",
    orders: ["green", "green", "pink", "pink", "orange", "orange"],
    result: 456.0,
    resultMember: 410.4,
  },
};

describe("Test calculator function", () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("calculation service", () => {
    for (const key in testCases) {
      let testCase = testCases[key];
      let order = testCase.orders;
      let result = testCase.result;
      let memberResult = testCase.resultMember;
      it(testCase.title, () => {
        calculator.clear();
        calculator.addOrder(order);
        expect(parseFloat(calculator.calculation())).to.equal(result);
      });
      it(testCase.title + " and member discount 10%", () => {
        calculator.clear();
        calculator.membership(true);
        calculator.addOrder(order);
        expect(parseFloat(calculator.calculation())).to.equal(memberResult);
      });
    }
  });
});
