let arr = [" vivek", " ram", " vijay", " sourabh", " aman"];
console.log(`The original array is ${arr}`);

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i].toUpperCase());
}
console.log("");
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
console.log("");
let countryArr = [{ name: "India", capital: "Delhi", population: 50000 },{name:"Australia", capital:"Canberra", population:3000},{name:"China", capital:"Bejing", population:1000}];

console.log(countryArr);



for(i=0; i<countryArr.length; i++){
    if(countryArr[i].population<2000){
        console.log(`The coutry with population less than 2000 is ${countryArr[i].name}`);
    }
}
