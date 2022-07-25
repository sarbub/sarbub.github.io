// CONSTANT O(1) --constant time() 
// LOGARITHMIC O(log n) --logarithmic time (binary search)
//LINEAR O(n) --
//QUADRATIC O(n^2)
//EXPONENTIAL O(2^n)

//O(n)

let number = [1,2,3,4];
console.log(number[1]);   // O(1)
console.log(number[2]);


console.log(""); // O(1)
for(let i = 0;i<number.length;i++){  // O(n)   
  console.log(number[i]);
}
console.log("");//O(1)

//O(n);


console.log(""); // O(1)
for(let i = 0;i<number.length;i++){  // O(n)   
  console.log(number[i]);
}
for(let i = 0;i<number.length;i++){  // O(n)   
  console.log(number[i]);
}

//O(2n)

function dataS(number1,number2){
console.log(""); // O(1)
for(let i = 0;i<number1.length;i++){  // O(n)   
  console.log(number[i]);
}
for(let i = 0;i<number2.length;i++){  // O(m)   
  console.log(number[i]);
}
}
// O(n+m) => O(n)

function nested(number1){
  for(let i = 0;i<number1.length;i++){  // O(n)   
    for(let i = 0;i<number1.length;j++){  // O(n)   
      console.log(number1[j]);
    }
  }

  //O(n^2)

  //O(n*n) =>O(n^2)
}

function nested2(number1){
  for(let i = 0;i<number1.length;j++){  // O(n)   
    console.log(number1[j]);
  }
  for(let i = 0;i<number1.length;i++){  // O(n)   
    for(let i = 0;i<number1.length;j++){  // O(n)   
      console.log(number1[j]);
    }
  }
  //O(n)+O(n^2) =>O(n + n^2) => O(n^2)
}

function nested3(number1){
  for(let i = 0;i<number1.length;i++){  // O(n)   
    for(let i = 0;i<number1.length;j++){  // O(n)   
      for(let i = 0;i<number1.length;j++){  // O(n)   
      }
    }
  }
  //O(n^3)
}

//O(log n)  binary search

function log1(){

}

//O(2^n) is the oposit of logarithmic grouth

//SPACE complexity

//O(x)->Space complexity 

function spaceComplexity(name){
   //O(n)
  let n = name.length; 
  for(let i = 0 ;i<name.length;i++){
    console.log(name[i]);
  }

}

//Arrays

function arrays(){
  //O(n)
  const names = [1,2,3,5];   // integers take 2 or 4 bytes  memory in java-script
  //insert item time complexity is O(n);
  //delete last item in array time complexity is O(1);
  //delete first item in array time complexity is O(n)

}

//js classes

class car{
  constructor(){
    console.log("my car is dacia");
  }
}

let dacia = new car();










