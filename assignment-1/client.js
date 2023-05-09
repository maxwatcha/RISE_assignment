import readline from "readline";
import Calculator from "./calculator.js";

const calculator = new Calculator();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(
  "Hello\nPlease push your command to use\n:add [item...]\n:member [active,inactive]\n:calculate\n:show\n:delete [item...]\n:clear"
);
const askForOrder = () => {
  rl.question("Please type:", (input) => {
    const args = input.toLowerCase().trim().split(" ");
    if (input.toLowerCase() === "quit") {
      rl.close();
    } else if (args[0] == "add") {
      let orders = [];
      for (let i = 1; i < args.length; i++) {
        orders.push(args[i]);
      }
      console.log(calculator.addOrder(orders));
    } else if (input.toLowerCase() === "calculate") {
      console.log(calculator.calculation());
    } else if (input.toLowerCase() === "show") {
      console.log(calculator.getResult());
    } else if (input.toLowerCase() === "clear") {
      console.log(calculator.clear());
    } else if (args[0] == "member") {
        console.log(args)
      if (args.length != 2 || !(args[1] == "active" || args[1] == "inactive")) {
        console.log("incorrect command active inactive");
      } else {
        const isMember = args[1] == "active" ? true : false;
        console.log(calculator.membership(isMember));
      }
    } else if (args[0] == "delete") {
      let orders = [];
      for (let i = 1; i < args.length; i++) {
        orders.push(args[i]);
      }
      console.log(calculator.deleteOrder(orders));
    } else {
      console.log("command incorrect");
    }
    askForOrder();
  });
};

askForOrder();
