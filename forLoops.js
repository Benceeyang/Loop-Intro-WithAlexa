//For loop is the most common loop that's used and tpyically used to run a chunk of code a certain amount of time



//Syntax
// for (initializer; Condition; iteration) {
    //chunk code
// }

//NOTE Example
//Initilizer:
//Condition:
//Iteration:
//Simple 0 - 5 loop
// for (let i = 0; i <= 5; i++){
//     //chunk code
//     console.log(i);
// }


// Avengers For Loop
let avengers = ["Thor", "CptAmerica", "IronMan", "Hulk", "HawkEye"];
    for (let a = 0; a < avengers.length; a++){
        console.log("You chose " + avengers[a])
};


//Selecting a specific string using the first letter with a loop
let jjk = ["Gojo", "Jogo", "Panda", "Itadori", "Maki", "Nobora", "Zenin"]
for (let f = 0; f < jjk.length; f++){
    if (jjk[f].startsWith("G")) {
        console.log(jjk[f]);
    }
    // console.log(jjk[f])
}

//Selective String 
let anime = ["Bleach", "Naruto", "HunterxHunter", "86", "DBZ","One Piece"]
    for (let c = 0; c < anime.length; c++){
        if (c === 3){
            console.log(anime[c]);
        }
    }

//NOTE Continue
for (let r = 0; r < 8; r++){
    if (r == 4) {
        continue; //Skips the value 4
    } else{
        console.log(r);
    }
}
// Example #2
// let veggies = ["Broccoli", "Cauliflower", "Carrots", "Beets", "Cilantro", "Potatoes"];
//     for (let v = 0; v < veggies.length; v++)
//         if (v == 2){
//             continue;
//         } else {
//             console.log(veggies[v])
//         }


//NOTE Break

for (let s = 0; s <= 10; s++){
    if (s == 7){
        break;
    } else {
        console.log(s);
    }
};

let veggies = ["Broccoli", "Cauliflower", "Carrots", "Beets", "Cilantro", "Potatoes"];
for (let g = 0; g < veggies.length; g++){
    if (g == 4){
        break;
    } else {
        console.log(veggies[g])
    }
}