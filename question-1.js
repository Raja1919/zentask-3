// for of loop:

let object ={
    "Name":"Raja",
    "Age" :25,
    "Gender":"Male",
    "Location":"kalpakkam", 
    "Married" :false
}

for(let key of Object.keys(object)){
    console.log(`${key} : ${object[key]}`)
}

// // output:
// //  Name : Raja
// //  Age : 25
// //  Gender : Male
// //  Location : kalpakkam
// //  Married : false
// --------------------------------------------------------------
// for loop:

 let object =[
    {"Name":"Raja"},
    {"Age":25},
    {"Gender":"Male"},
    {"Location":"Kalpakkam"},
       {"Married" : false}
 ];

for(let key=0;key<object.length;key++){
    console.log(object[key])
    
// }
// output:
// {Name: 'Raja'}
// {Age: 25}
// {Gender: 'Male'}
// {Location: 'Kalpakkam'}
// {Married: false}

// ---------------------------------------------------------------

// for in loop:

 let object ={
    "Name":"Raja",
    "Age" :25,
    "Gender":"Male",
    "Location":"kalpakkam", 
    "Married" :false
};
    

     for(let key in object){
        console.log(`${key} : ${object[key]}`)
     }


// // output:
//  Name : Raja
//  Age : 25
//  Gender : Male
//  Location : Kalpakkam
//  Married : false
// -----------------------------------------------------------------
//  foreach loop:

let object = {
    "Name" : "Raja",
    "Age" : 25,
    "Gender" :"Male",
    "location" : "Kalpakkam",
    "married" :false 
};

let keys =Object.keys(object)
keys.forEach(key =>{
    console.log(`${key} : ${object[key]}`)
});

// // output:
//  Name : Raja
//  Age : 25
//  Gender : Male
//  location : Kalpakkam
//  married : false