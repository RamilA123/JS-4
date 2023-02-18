"use strict"

//#region Task 2 ---- 1th method / using (while) loop

// let string = "Azərbaycan";
// function reverse(string)
// {
//     let reverse = "";
//     let length = string.length - 1;
//     while (length >= 0)
//     {
//         reverse =  reverse + string[length];
//         length--;
//     }

//     return reverse;
// }

// let result = reverse(string);
// console.log(result);

//#endregion 


//#region Task 2 ---- 2th method / using string and array methods

// let string = "Ramil";
// const reverse = string => {
//     let arr = string.split("");
//     arr.reverse();
//     let reverse = arr.join("");
//     return reverse;
// }

// let result = reverse(string);
// console.log(result);

//#endregion


//#region Task 1  - Practices in lesson

// let date = new Date();
// console.log(date.getDay() + " " + (date.getMonth() + 1) + " " + date.getFullYear() + " " + date.getHours() + " " + date.getMinutes() + " " + date.getSeconds() + " " + date.getMilliseconds());

// var name = "Ramil";

// var name = "Yunis";

// console.log(name);

// if (true){
//     var age = 60;
// }

// console.log(age);


// function test(){
//     var age = 55;
// }
// test();
// console.log(age);


// console.log(address.length);

// let address = "Ehmedli";
// console.log(address.includes("m"));

// let result = address.includes("m");
// if(result){
//     console.log("Found");
// }
// else{
//     console.log("Not found");
// }

// let result = address.includes("m") ? "Found" : "Not found";
// console.log(result);

// let fullName = "Ramil Allahverdiyev";
// console.log(fullName.includes("vey"));

// const checkLetter = address => {
//     let check = address.includes("m");
//     return check;
// }

// let result = checkLetter(address) ? "Found" : "Not found";
// console.log(result);

// function search(address){
//     for (let i = 0; i < address.length; i++) {
//         if (str[i] == "m"){
//             return true;
//         }
//     }

//     return false;
// }

// let result = search(address) ? "Found": "Not found";
// console.log(result);


// let str1 = "Resul yaxsi oglandir";
// let result = str1.includes("Resul") ? "Found" : "Not found";
// console.log(result);

// let string = "allahverdiyev";

// function UpperCaseForFirstLetter(string){
//     return string.at(0).toUpperCase() + string.slice(1);
// }

// let result = UpperCaseForFirstLetter(string);
// console.log(result);

// let address = "Ehmedli";
// // console.log(address.at(0));
// // console.log(address.charAt(1));
// // console.log(address.charCodeAt(0));

// document.querySelector("button").addEventListener("keydown",function(e){
//     if (e.keyCode == 38)
//     {
//         console.log("yuxari");
//     }
//     else if (e.keyCode == 13)
//     {
//         console.log("enter");
//     }
// })


// console.log(address.slice(1,3));
// console.log(address.substring(2));
// console.log(address.substr(1,3));

// let address = "Ehmedli";
// let str = "Resul yaxsi oglandir.";
// console.log(address.replace("E", "A"));
// console.log(str.replace("oglandir", "kisidir"));


// let username = "Allahverdiyev";
// console.log(username.replaceAll("e","a"));


// let str = "Resul yaxsi oglandir.";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str1 = "Resul yaxsi oglandir";
// let str2 = ", ancaq bezi problemleri var.";

// let result = str1.concat(str2);
// console.log(result);

// let str = "        Resul yaxsi oglandir        ";
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimStart());

// let str = "Resul-yaxsi-oglandir";
// // console.log(str.startsWith("R"));
// // console.log(str.endsWith("oglandir."));


// let result = str.split("-");
// console.log(result);

// let text = "5";
// // let padded = text.padStart(8,"ramil");
// let padded = text.padEnd(8,"ramil");
// console.log(padded);

// const SUCCESS_MESSAGE = "Registered successfully";
// const ERROR_MESSAGE = "This email already used";

// let user = {
//     name: "Ramil",
//     surname: "Allahverdiyev",
//     email: "ramil901@code.edu.az",
//     password: "Ramil123"
// }


// function register(user) {

//     let emails = getEmails();

//     for (const email of emails) {
//         if (user.email == email) {
//             return ERROR_MESSAGE;
//         }
//     }
//     return SUCCESS_MESSAGE;
// }

// let result = register(user);
// console.log(result);


// function getEmails() {
//     let emails = "cavid@gmail.com,resul@gmail.com,ramil90@code.edu.az,qoshqar@mail.ru"
//     return emails.split(",");
// }

// let names = ["Anar","Resul","Musa","Murad","Lale","Qoshqar"];

// console.log(names[0]);
// console.log(names[names.length-1]);

// names.reverse();

// names.sort();

// console.log(names);

// console.log(names.join(","));

// console.log(names.toString());

// const arr1 = ["Cecilie","Lone"];
// const arr2 = ["Emil","Tobio","Linus"];
// const children = arr1.concat(arr2);
// console.log(children);

// names.push("Mahir");

// names.pop();

// names.unshift("salam");

// names.shift();

// const fruit = ["Banana","Orange","Apple","Mango"];
// const res = fruit.entries();
// for (const item of res) {
//     console.log(item);
// }


// console.log(names);

// let nums = [1,5,10,20,64];

// console.log(nums.every(m=>m>0));

// nums.fill("ramil");
// nums.fill(100,0,2);
// console.log(nums);


// let nums = [1,5,10,20,64];
// let result = nums.find(m => m > 5);
// console.log(result);
// console.log(nums.findIndex(m => m > 5));

// const fruits = ["Banana","Orange","Apple","Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index);

// let nums = [1,5,44,10,20,44];
// console.log(nums.lastIndexOf(44));

// function checkArray(data){
//     return Array.isArray(data);
// }

// let nums = [1,5,44,10,20,44];
// console.log(checkArray(nums));



// const fruits = ["Banana","Orange","Apple","Mango"];
// const keys = fruits.keys();
// for (const key of keys) {
//     console.log(key);
// }

// const numbers = [175,50,25];
// let result = numbers.reduce((total,current) => (total + current),100);
// console.log(result);

// let nums = [1,2,3,4,5,6,7,8,9];

// function findOddNum(arr){
//     let oddArr = arr.filter(m => m % 2 == 1);
//     return oddArr.reduce((total,current) => total + current);
// }
// console.log(findOddNum(nums));

// const ages = [3,5,8,9];
// console.log(ages.some(m => m > 10));

//#endregion


//#region notes for string and array methods

// string methods --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// length (property) - string'in uzunlugunu (elementlerinin sayini) gostermek ucun istifade olunur.
// includes(string) - string'in icinde her hansi bir simvol ve ya soz olub-olmadigini yoxlamaq ucun istifade olunurr.
// at(index) - string'in indeksine muraciet ederek indeksdeki elementi goturmek ucun istifade olunur. (bir elementi goturmek ucun)
// charAt(index) - string'in indeksine muraciet ederek indeksdeki elementi goturmek ucun istifade olunur. (bir elementi goturmek ucun)
// charCodeAt(index) - string'in indeksine muraciet ederek indeksdeki elementin (simvolun) arxa plandaki kodunu goturmek ucun istifade olunur. (bir elementi goturmek ucun)
// slice(index) - string'in indeksine muraciet ederek hemin indeksden baslayaraq elementleri goturmek ucun istifade olunur. (birden cox elementi goturmek ucun)
// slice(index1,index2) - string'in indeksine muracet ederek mueyyen araligdaki (intervaldaki) elementleri goturmek ucun istifade olunur. (birden cox elementi goturmek ucun)
// substring(index1) - string'in indeksine muraciet ederek hemin indeksden baslayaraq elementleri goturmek ucun istifade olunur. (birden cox elementi goturmek ucun)
// substring(index1,index2) - string'in indeksine muracet ederek mueyyen araligdaki (intervaldaki) elementleri goturmek ucun istifade olunur. (birden cox elementi goturmek ucun)
// slice metoduyla substring metodu arasindaki ferq odur ki, slice metodu menfi deyer alir ancaq substring metodu almir.
// substr(index1) - string'in indeksine muraciet ederek hemin indeksden baslayaraq elementleri goturmek ucun istifade olunur. (birden cox elementi goturmek ucun)
// substr(index1,index2) - string'in indeksine muracet ederek mueyyen araligdaki (intervaldaki) elementleri goturmek ucun istifade olunur. (birden cox elementi goturmek ucun)
// slice metoduyla substr metodu arasindaki ferq odur ki, 2 parametr qebul etdikde slice metodunda 2-ci parametr daxil olmur, ancaq substr metodunda daxil olur.
// replace(string1,string2) - string'in icindeki her hansi bir simvolu ve ya sozu basqa simvolla ve ya sozle evez etmek (deyisdirmek) ucun istifade olunur. (sadece birinci deyisdirir)
// replace() - 1-ci parametr string'deki simvolu ve ya sozu, 2-ci parametr ise hansi simvolla ve ya sozle evez olundugunu (deyisdirildigini) gosterir. (sadece birinci deyisdirir)
// replaceAll(string1,string2) - string'in icindeki her hansi bir simvolu ve ya sozu basqa simvolla ve ya sozle evez etmek (deyisdirmek) ucun istifade olunur. (eyni olan simvollarin ve ya sozlerin hamisini deyisdirir)
// toUpperCase() - string'in butun herflerini boyuk herfe cevirmek ucun istifade olunur.
// toLowerCase() - string'in butun herflerini kicik herfe cevirmek ucun istifade olunur.
// concat(string) - 2 string'i bir-birine birlesdirmek ucun istifade olunur.
// trim() - string'in evvelinden ve axirindan bosluqlari silmek ucun istifade olunur.
// trimStart() - string'in evvelinden bosluqlari silmek ucun istifade olunur.
// trimEnd() - string'in axirindan bosluqlari silmek ucun istifade olunur.
// startsWith(string) - string'in hansi simvol ve ya sozle basladigini gostermek ucun istifade olunur.
// endsWith(string) - string'in hansi simvol ve ya sozle qurtardigini gostermek ucun istifade olunur.
// padStart(number,string) - string'in evveline simvol ve ya soz elave etmek ucun istifade olunur.
// padEnd(number,string) - string'in axirina simvol ve ya soz elave etmek ucun istifade olunur.
// padStart ve ya padEnd metodunda 1-ci parametr umumi elementlerin sayini, 2-ci parametr elave olunacaq simvolu ve ya sozu gosterir.
// split(string) - string'i gelen parametre gore ayirib array'e cevirmek ucun istifade olunur.
// -- split() - parametr qebul etmirse string'i her hansi bir parametre gore ayirmadan birbasa array'e cevirir.
// -- split("") - parametr olaraq empty string ("") qebul edirse string'i simvollara gore ayirib array'e cevirir.

// array methods ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// filter(predicate or callback) -- array'in icinden serti odeyen elementleri secib goturmek ucun istifade olunur.
// find(predicate or callback) -- array'in icinden serti odeyen elementlerden ilk elementi secib goturmek ucun istifade olunur.
// findIndex(predicate or callback) -- array'in icinden serti odeyen elementlerden ilk elementin indeksini secib goturmek ucun istifade olunur.
// reverse() -- array'in elementlerini tersine cevirmek ucun istifade olunur.
// join(string) -- array'in elementlerini gelen parametre gore birlesdirib string'e cevirmek ucun istifade olunur.
// -- join() - parametr qebul etmirse, arrayin elementlerini her hansi bir parametre gore birlesdirmeden birbasa string'e cevirir.
// -- join("") - parametr olaraq empty string ("") qebul edirse, arrayin elementlerini aralarinda vergul ve ya bosluq qoymadan tam sekilde birlesdirib string'e cevirir.
// at(index) - array'in indeksine muraciet ederek indeksdeki elementi goturmek ucun istifade olunur. (bir elementi goturmek ucun)
// charAt(index) - array'in indeksine muraciet ederek indeksdeki elementi goturmek ucun istifade olunur. (bir elementi goturmek ucun)
// slice(index) - array'in indeksine muraciet ederek hemin indeksden baslayaraq elementleri goturmek ucun istifade olunur. (birden cox elementi goturmek ucun)
// slice(index1,index2) - arrayi'in indeksine muracet ederek mueyyen araligdaki (intervaldaki) elementleri goturmek ucun istifade olunur. (birden cox elementi goturmek ucun)
// slice() - metodunda 2-ci parametr daxil olmur.
// sort() - array'in elementlerini siralamaq (sirayla duzmek) ucun istifade olunur.
// sort() - elementler string ve ya herf olduqda arrayi'in elementlerini elifba sirasina gore duzur(siralayir).
// sort() - elementler number olduqda arrayi'in elementlerini kicikden boyuye dogru duzur(siralayir).
// toString() - array'i birbasa string'e cevirmek ucun istifade olunur.
// concat(string) - 2 array'i bir-birine birlesdirmek ucun istifade olunur.
// push(string) - array'in axirina(sonuna) element elave etmek ucun istifade olunur.
// unshift(string) - array'in evveline element elave etmek ucun istifade olunur.
// pop() - array'in axirinci (sonuncu) elementini silmek ucun istifade olunur.
// shift() - array'in ilk (birinci) elementini silmek ucun istifade olunur.
// entries() - array'in indeksleriyle beraber elementlerini gostermek ucun istifade olunur.
// every(predicate or callback) - array'in butun elementlerinin serti odeyip-odemedigini yoxlamaq ucun istifade olunur. (true ve ya false qaytarir)
// fill(string or number or boolean) - array'in butun elementlerini eyni elementle doldurmaq ucun istifade olunur.
// fill metodu 3 parametr de qebul edir (2-ci ve 3-cu parametr indeksleri gosterir). 3 parametr qebul ettikde mueyyen araliqdaki (intervaldaki) elementleri eyni elementle doldurmaq ucun istifade olunur.
// indexOf(string or number or boolean) - arrayin icindeki eyni elementlerden ilk (birinci) elementin indeksini gostermek ucun istifade olunur. (eger tapmirsa -1 qaytarir)
// lastIndexOf(string or number or boolean) - arrayin icindeki eyni elementlerden axirinci (sonuncu) elementin indeksini gostermek ucun istifade olunur. (eger tapmirsa -1 qaytarir)
// isArray() - datanin array olub-olmadigini yoxlamaq ucun istifade olunur.
// keys() - arrayin butun elementlerinin indeksini gostermek ucun istifade olunur. (array formati qaytarir ona gore donguye saliriq)
// reduce(predicate or callback) - array'in elementlerinin cemini hesablamaq ucun istifade olunur.
// some(predicate or callback) - array'in her hansi bir elementinin serti odeyip-odemedigini yoxlamaq ucun istifade olunur. (true ve ya false qaytarir)
// splice() - array'in indeksindeki elementi silib yerine basqa elementler elave etmek ucun istifade olunur.
// splice(index,number,string,string,.....)
//#endregion