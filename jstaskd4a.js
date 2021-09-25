//(Q.4)
//Task 1: Simple Programs to do for variables
//1.
var a;
var b;
var c; 
var d;
console.log(a, b, c, d);

//2.
var myvar= 100;
console.log(myvar);

//3.
let first = "Gokul";
let last = "P";
let country = "India";
let mstatus = "Single";
let age = 28;
console.log(first);
console.log(last);
console.log(country);
console.log(mstatus);
console.log(age);

//4.
console.log(first, last, country, mstatus, age);

//5.
var a1 = "Hello";
var b1 = true;
var c1;
var d1 = null;
console.log(a1, b1, c1, d1);

//6.
var a2 = "55";
console.log(parseInt(a2));
var b2 = "66";
console.log(Number(b2));
var c2 = "77";
console.log(+c2);

//7.
console.log("5" === "5");
console.log("Hi");
console.log(25);
console.log("6" === 6);
var a8;
console.log(a8);
console.log(4 % 2);

//Task 2: Simple Programs todo for Operators
//1.
var sq = 5;
console.log(sq * sq);

//2.
let a3 = 7;
let b3 = 8;
let temp;

temp = a3;
a3 = b3;
b3 = temp;

console.log(a3);
console.log(b3);

//3.
let num1 = 45;
let num2 = 55;
console.log(num1 + num2);

//4.
let cel = 40;
let faren = (cel * 1.8) + 32;
console.log(faren);

//5.
let inMeters = 20000;
let inMiles = inMeters / 1609.344;
console.log(inMiles);

//6.
let inPounds = 180;
let inKgs = inPounds / 2.2046;
console.log(inKgs);

//7.
let totalRuns = 2000;
let totalMatches = 150;
let notOut = 25;
let result = totalRuns / (totalMatches - notOut);
console.log(result);

//8.
let testScores = [50, 75, 80, 95, 98];
let sum = 0;
for (let i=0; i<testScores.length; i++) {
    sum = sum + testScores[i]; 
   }
let avg = sum / testScores.length;
console.log("The Average is ", avg);

//9.
let num3 = 5;
let power = 3;
console.log(Math.pow(num3, power));

//10.
let p = 1000;
let n = 5;
let r = 3;
let si = (p * n * r) / 100;
console.log(si);

//11.
let side = 5;
console.log((Math.sqrt(3)/4) * (side * side));

//12.
let aa = 13;
let bb = 24;
let areaIsoceles = (Math.sqrt(Math.pow(aa, 2) - (Math.pow(bb, 2) / 4))) * (bb/ 2);
console.log(areaIsoceles); 

//13.
let radius = 3;
let vol = (4/3) * Math.PI * Math.pow(radius, 3);
console.log(vol);

//14.
let priHeight = 5;
let rectLength = 9;
let rectWidth = 7;
let priBase = rectLength * rectWidth;
let priVol = priBase * priHeight;
console.log(priVol);

//15.
let triHeight = 10;
let triBase = 20;
let triArea = (triBase * triHeight) / 2;
console.log(triArea);

//16.
let actualCost = 100;
let soldCost = 80;
let discount = actualCost - soldCost;
console.log(discount);

//17.
let cR = 5;
let cArea = Math.PI * cR * cR;
let cDiameter = 2 * cR;
let cCircum = 2 * Math.PI * cR;
console.log (cArea, cDiameter, cCircum);

//18.
let no1 = 44;
let no2 = 22;
console.log(no1 + no2);
console.log(no1 - no2);
console.log(no1 * no2);
console.log(no1 / no2);
console.log(no1 % no2);

//19.
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

//20.
let power_Hour = 100;
let totalPower = power_Hour * 24 * 30;
let kwh = totalPower / 1000;
let perUnit = 10;
console.log(kwh * perUnit);

//21.
let sub1 = 8;
let sub2 = 7;
let sub3 = 8.5;
let sub4 = 6;
let sub5 = 9;
console.log("Your CGPA is",(sub1 + sub2 + sub3 + sub4 + sub5) / 5);

//Task 3: Simple Programs todo for Condition , Looping and Arrays
//1.
let output = "";
for(let i=0; i<=7; i++) {
    output = output + "# ";
    console.log(output);
}

//2.
var myarray = [11,22,33,44,55];
var count = 0;
if(myarray[count] !== 0){
    count++;
}
console.log(count);

//3.
let foods = ["Cake","Cookie","Fruit","Eggs","Meat","Nuts","Seeds","Veggies","Seafood","Grains","Bread","Biscuit","Milk","Chicken","Idly","Chappathi","Wheat","Parotta","Noodles","Dosa"];
console.log(foods.length);

//4.
//a.
let friends = ["Mari","Mary Jane","Captain America","Munnabhai","Jeff","AAK chandran"];
friends[0] = friends[3];
console.log(friends);
//b.
for(let i=0; i<=2; i++) {
    console.log(friends[i]);
}
//c.
function dataHandling(input, name)
    {
        for (let i = 0; i < input.length; i++) {
            if(input[i] === "Jeff")
            console.log("Found my Friend");
        }
    }
dataHandling(friends,"Jeff");
//d.
let friends1 = ["Rajini","Kaml","Ajay","Ajith","Abi","Gokul"];
let frndList = friends.concat(friends1);
console.log(frndList.sort());

//5.
let egArray = ["Mari","Mary Jane","Captain America","Munnabhai","Jeff","AAK"];
//a.
let firstItem = egArray[0];
let lastItem = egArray[egArray.length - 1];
console.log(firstItem, lastItem);
//b.
egArray.splice(0,0,"Gk");
console.log(egArray);
egArray.splice(7,0,"Elon");
console.log(egArray);
//c.
let egArray1 = ["Mari","MaryJane","CaptainAmerica","Munnabhai","Jeff","AAK"];
let finalArray = [];
for(i=0; i<egArray1.length; i++){
    let modArray = "Mr/Ms." + egArray1[i];
    finalArray.push(modArray);
}
console.log(finalArray);
//d.
console.log(egArray1.slice(0,7).join(","));
//f.
let nameLen = egArray1.map((lenName) => lenName.length).reduce((sum, lenName1) => sum + lenName1, 0);
console.log(nameLen / egArray1.length);

//g.
const startWithM = egArray1.filter((letter) => letter.startsWith("M"));
console.log(startWithM);
//h.
let arrLen = egArray1.reduce((lenMax,lenElement1) => {
    if(lenMax.length > lenElement1.length ){return lenMax} else{
        return lenElement1
    }
})
console.log(arrLen);
//i.
let arrLen1 = egArray1.reduce((lenMax,lenElement1) => {
    if(lenMax.length > lenElement1.length ){return lenElement1} else{
        return lenMax
    }
})
console.log(arrLen1);

//6.
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
const findNum = friendsInfo.filter((isNum1) => Number.isInteger(isNum1))
const findNum1 = findNum.reduce((sum,curr) => sum + curr, 0);
console.log(findNum);
console.log(findNum1 / findNum.length);

//7.
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989"," Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965","Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970","Berkebun"]
];
console.log(input[0] + input[1] + input[2] + input[3]);


//Objects
//1.
myobject = {
    1:"one",
    11: 1,
    "name":"arun"
}
console.log(myobject);
console.log(myobject.name);

//2.
myobject.ten = "ten"
console.log(myobject);

//3.
let details = {
    "fName": "Guvi",
    "lName": "Geek",
    "id": 6,
    "add": "IIT-M RP",
    "city": "Chennai"
}
console.log(details);

//4.
//Answer : Can be represented using array of objects.

    
   








