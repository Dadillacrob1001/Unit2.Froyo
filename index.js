//List the available froyo flavors
const custFlavString = "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
//Split the string of flavors into an array of strings
const flavorsArray = custFlavString.split(",")
//Convert the array of strings into a array of flavors
const flavorsObject = {};
for (let i = 0; i < flavorsArray.length; i++) {
 const flavor = flavorsArray [i];
 if (flavorsObject[flavor] > 0){
flavorsObject[flavor] = flavorsObject[flavor] + 1
 } else {
  flavorsObject[flavor] = 1

 }
 
}

console.log(flavorsObject)
