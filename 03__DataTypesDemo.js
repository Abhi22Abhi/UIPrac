
                                                // Number
var numberDecimal = 10;
var numberDouble = 12.45678;
var numberHexaDecimal = 0x1234;
var numberOctal = 0o1234;
var numberBinary = 0b1010;

console.log(numberDecimal);
console.log(numberDouble);
console.log(numberHexaDecimal);
console.log(numberOctal);
console.log(numberBinary);console.log();

// Number Note :== Any type of number o/p is always in Decimal Format Only.



                                        // String rep "" OR '' OR ``
var greatings = "Good Morning....!";
var task = 'Registration Module....!';
var description = `write in console....!`;

console.log(greatings); console.log(task); console.log(description);
console.log(); 

console.log("Hi Abhilash, "+`${greatings}`+' U R Task is '+`${task}`+` Constraints are :
 kjgkjubghkvgj klhklnbkjkjbhk gkjnjjljknjbhhgjnjbhjgj;lmn`);

// String Note :== `` is called Backtick or Templeate Litteral (ES6)


                                        //  Boolean
var possitive$flag = true;
var nagative_flag = false;

console.log(possitive$flag);    console.log(nagative_flag);  



                                        //  BigInt
var big_num = 123546789214567891008888888888888888888888007569413647895; 
console.log(big_num); // 1.235467892145679e+56

var big_num = 123546789214567891008888888888888888888888007569413647895n; 
console.log(big_num); // 123546789214567891008888888888888888888888007569413647895n

// BigInt Note :== 2^63 to -2^63-1 and value should be suffixed with 'n'.



                                        //  Symbol
var my_name = Symbol("abhilash");
console.log(my_name);   // Symbol(abhilash)

var my_num12 = Symbol(10);
console.log(my_num12);

var my_null = Symbol(null);
console.log(my_null);



                                        //  Undefind and null

var var_name1;
console.log("The value of variable is : "+var_name1);
var var_name2 = null;
console.log("The value of variable is : "+var_name2);



                                        //  == and ===
// console.log(10 == 10);
// console.log(10 == "ten");
// console.log(10 == "10");

// console.log(10 === 10);
// console.log(10 === "ten");
// console.log(10 === "10");

console.log(undefined == undefined);
console.log(null == null);
console.log(undefined == null);
console.log(undefined === undefined);
console.log(null === null);
console.log(undefined === null);

/*
Note :--

    == only for values comparision and existing of Object wonn't matter
    === values and datatypes comparison and existing of Object will be  matter
*/








