let car = {
  color: "red",
  brand: "Fiat",
  model: 500,
  capacity: 120,
};

console.log(car.color, car.model);

delete car.capacity;

car.owner = "Daniil";

let users = ["John", "Steve", "Adam", "Matthew", "Billy"];

console.log(users[2]);

users.push("Matilda");

users.shift();

// console.log([] && "John"); / ლოგიკური ოპერატრორი და."როგორც მივხვდი" მასივი მარცხვნივ არის true და john string არის true ამიტომაც გამოიტანს john ბოლო მნიშვნელობას
// console.log(null && "John"); გამოიტანს null პირველ მნიშვნელობას. null ბულიანში რომ გადავიყვანოთ იქნება false და john true
// console.log(0 && -0); გამოიტანს 0 იმიტომ რომ ორივეა falsy values
// console.log(Infinity && -Infinity); ეგ ვერ მივხვდი რატომ გამოაქ -infinity ორივე True? და მაგიტომაც გამოაქ ბოლო მნიშვნელობა?
// console.log([] || "John"); ორივე True დააბრუნებს პირველ მნიშვნელობას
// console.log(null || "John"); დააბრუნებს john იმიტომ რომ ეგ არის true
// console.log(0 || -0); false ორივე -0 ბოლო მნიშვნელობა
// console.log(Infinity || -Infinity); ???
