// console is an object
console.log("Hello World!");

const myNum = 24;
console.log(myNum);

console.error("alert");
console.warn("this is a warning");
console.table({ name: "Chloe", footballTeam: "liverpool" });
// groups
console.group("simple");
console.error("alert");
console.warn("this is a warning");
console.table({ name: "Chloe", footballTeam: "liverpool" });
console.groupEnd();

// add css styles to console

const styles = "background-color: white, color: red, padding: 15px";

console.log("%cHello World", styles);
