
//--------------------------------------------перевірка на тип------------------------------------
// const x=10;
// console.log(typeof x)
// console.log(x)


//-------------------------------методи promt i  confirm---------------------------------
// const isComing = confirm("Please confirm hotel reservation");
// if(isComing===true){
// console.log("Ok, I am agree");
// }


// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);
// console.log(typeof hotelName); //prompt завжди повертає рядок. Тобто якщо користувач ввів 5, то повернеться не число 5, а рядок "5".
  //--------------------------------------оператори---------------------------------------
// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // 

//---------------------Методи Number.parseInt()Number.parseFloat()------------------
// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN


// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN


//----------------------------------------------------------------------

// console.log(0.175 + 0.241); // 0.41000000000000003
// console.log((0.175 + 0.241).toFixed(2)); // 0.41
//------------------------------------Класс Math------------------------


// console.log(Math.floor(1.7)); // 1


// console.log(Math.ceil(1.2)); // 2


// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2


// console.log(Math.max(20, 10, 50, 40)); // 50

// console.log(Math.min(20, 10, 50, 40)); // 10


// console.log(Math.pow(2, 4)); // 16


// console.log(Math.random()); // випадкове число між 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10



//---------------------------------------шаблонні рядки---------------------------------

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"


//-----------------------Методы toLowerCase() и toUpperCase()-----------------
// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

//--------------------Метод indexOf()
// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

//------------------------------------Метод includes()
// const productName = "Ремонтнbй дроiд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроід")); // true
// console.log(productName.includes("Дроід")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false

//---------------------------Метод endsWith()
// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

//-----------------------------------Методы replace() и replaceAll()
// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"


//-------------------------------------Метод slice()
// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

//------------------------------тернарник-----------------------------
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"


// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

//-----------------------------конструкція switch----------------
// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 1000;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 5000;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 


//-------------------область видимості-----------------------
// const value = 5;

// if (true) {
//   console.log("Block scope: ", value); // 5
// }

// console.log("Global scope: ", value); // 5
// //--------------------------------
// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Видим глобальную + локальную A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Переменные blockB и blockC не найдены в доступных областях видимости.
//   // Будет ошибка обращения к переменной.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Видим глобальную + внешнюю A + локальную B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Переменная blockC не найдена в доступных областях видимости.
//     // Будет ошибка обращения к переменной.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // змінні blockA i blockB не знайдеі в доступних областях видимості.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // бачимо лише глобальну
// console.log(global); // global

// // змінні blockA i blockB i blockC не знайдеі в доступних областях видимості.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

//------------------------цикли------------------
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);


//--------------------------------
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, переривається цикл");
//     break;
//   }
// }

// console.log("Лог пiсле циклу");
//----------------------Масиви-----------------------
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


//------------------------for... of-------------------
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//-------------------------
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {

  if (client === clientNameToFind) {
    message = "Клієнт з таким ім`ям є у базі даних";
    break;
  }

  
  message = "Клієнтf з таким ім`ям ytvfє у базі даних";
}

console.log(message);