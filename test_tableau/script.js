// var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // myArray[2] = 17;
// console.log(myArray);

// for (var i = 0; i < myArray.length; i++) {
// console.log(myArray[i]);
// }

// var myArray = [10, 20, 30, 40];
// var temp = myArray[1];
// myArray[1] = myArray[2];
// myArray[2] = temp;
//
// console.log(myArray);

// var tab = [785, 692, 7841, 9639, 8569, 1270, 9998, 1246, 2374, 127];
// var vide = 0;
//
// for (var i = 0; i < tab.length; i++) {
//     if (vide < tab[i]) {
//         vide = tab[i];
//
//     }
// }
// console.log(vide);

var tab = ["kayak", "soleil", "elle", "mouette"];
var palindrome = "kayak";
var verif = true;
for (var i = 0; i < palindrome.length; i++); {
    if (palindrome[i] != palindrome[palindrome.length -i -1]) {
        verif = false;
        // alert("Ceci n'est pas un palindrome");

    }

}

console.log(verif);
