/* 
1) Luggage is loaded into containers as it arrives
2) When the weight is full (MAX 40lbs), the container is loaded into the aircraft
3) At the destination, th containers are then unloaded from the plane LIFO (last in, first out)
4) Finally, the luggage is handed back individually

EXAMPLE
Input [30,5,6]
Key Point #1 Loaded into containers: [[30.5][6]]
Key Point #2 LIFO Order [[6],[30.5]]
Output [6,30.5]
All one function
Must use Loops
*/

//This one only add two values... I am lost with this one. 

let bag = [10,30,20,20,18,12];
let x = 0;
let weight;    
for (let r = 0; r < bag.length; r++) {

  // console.log(bag[r]);
  weight = x += bag[r]
  // console.log(weight);
  // if (bag(10) + bag(30)){
    //     console.log(bag[r])};
    // // }else if() {
      if (weight <= 40) {
        console.log(weight)
      } 
}
        // }


//Returns the array with the last value to the first one.
let luggage = [15,11,8,6];
 for(let e = luggage.length -1; e >=0; e--){
    // if(luggage[e].startsWith("8")){
        // return e <= /3
        console.log(luggage[e]);
    };



// EVERYTHING UNDER HERE DOES NOT WORK



// let luggage = ["15","17","8"];
//  for(let e = 4; e > luggage.length; e--){
//         return e > 4
//     }
//     console.log(luggage[e]);

// function Counter([]) {
//     this.count = 0;
//     let self = this;
//     return {
//         deacrease: function () {
//             self.count--;
//         },
//         current: function () {
//             return self.count;
//         },
//         reset: function () {
//             self.count = 0;
//         }
//     }
// }
// const data = [15,30,25,27,24,32,17];
// let iterations = data.length;

// for (item of data)
// {
//     if (!--iterations)
//         console.log(item + " => This is the last iteration...");
//     else
//         console.log(item);
// }

// let luggage = [15,30,25,27,24,32,17];
//     do { 
//     luggage -= 1
//     console.log(luggage);
// }   while (luggage >= 0);