// let score: number | string | boolean  = 33;
// score = "44"
// score = true;
// type Student = {
//     name: string;
//     age: number;
//     isActive: boolean;
// }
// type Teacher = {
//     name: string;
//     age: number;
//     subject: string;
// }
// let Bharat : Student | Teacher = {
//     name: "Bharat",
//     age: 23,
//     isActive: true
// }
// Bharat = {
//   name: "Bharat",
//   age: 24,
//   subject: "Maths"
// }
// function getDbId(id: number | string){
//   if(typeof id === "number"){
//     return id;
//   }
//   if(typeof id === "string"){
//   return id.toUpperCase();
//   }
// }
// let data = getDbId("hey");
// console.log(data,'data');
var data = [2, 3, 43, 534, 2];
var info = ["Bharat", "Raj", "Rahul"];
var mixData = [2, 3, 43, 534, 2, "Bharat", "Raj", "Rahul"];
console.log(mixData, 'mixData');
