console.log("Hello Github");

// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];


// const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE

// for(let idx = 0; idx < firstNames.length; idx++)
//   {
//     bios.push(`My name is ${firstNames[idx]} ${lastNames[idx]} and I am from ${places[idx]}`);
//   }

// bios.forEach(function(bio)
// {
//     console.log(bio);
// })

// let num = 1;

// while(num < 35)
// {
//   if(num % 3 === 0)
//   {
//     console.log(num);
//   }

//   num++;
// }

// console.log('Finished');


// let multOfFive = 1;

// while(multOfFive <= 100)
// {
//   if(multOfFive % 5 == 0)
//   {
//     console.log(multOfFive)
//   }

//   multOfFive++;
// }

// let count = 0;

// while (count <= 20)
// {
//   if(count % 2 == 0)
//   {
//     console.log(count*3)
//   }
//   count++;
// }

// let primeNum = 1;

// while(primeNum < 20)
// {
//   if(primeNum / primeNum == 1)
//   {
//     if(primeNum % 2 !== 0)
//     {
//       console.log(primeNum)
//     }
//   }

//   primeNum++;
// }

//standard function
// function addThreeNumbers(num1, num2, num3)
// {
//   console.log(Number.parseFloat(num1+num2+num3).toFixed(2));
// }

// addThreeNumbers(5.7,6,10.45);

// //arrow function
// let num = (n1,n2,n3) => {
//   return n1+n2+n3;
// }

// console.log(num(6,8,90));

// //implicit arrow function
// let addNumbers = (x,y,z) => (x+y+z);
// console.log(addNumbers(5,7,3));



// Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. He paid with a $10 bill,
// the vending machine paid him back in quarters. Write a loop that says how many quarters he got in return.


//  let cookieCost = 4;
//  let pricePaid = 10;

//  while(change > 0)
//  {
//    console.log(change*4);
//    change--;
//  }

//  function calcChange(cookieCost,pricePaid)
//  {
//     let change = (pricePaid - cookieCost) * 100;


//     return (change / 25);
//  }

//     let userChange = calcChange(2,20)

//     console.log(userChange);

//if divisible by two, print fizz, if divisible by three, print buzz

    // function printFizzBuzz(firstNum, lastNum)
    // {
    //   let fizzArray = [];
    //   let buzzArray = [];

    //   while(firstNum < lastNum)
    //   {
    //     if(firstNum % 3 == 0)
    //     {
    //       fizzArray.push("Fizz");

    //     }
    //     if(firstNum % 5 == 0 && firstNum % 3 !== 0)
    //     {
    //       buzzArray.push("Buzz");

    //     }

    //     firstNum++;
    //   }

    //   for(let i = 0; i < fizzArray.length; i++)
    //   {
    //     for(let j = 0; j < buzzArray.length; j++)
    //     {
    //       console.log(fizzArray[i]+buzzArray[j])
    //     }
    //   }
    // }

    // printFizzBuzz(1,100);

let fb = [];
// ADD CODE HERE

for(let x = 1; x <= 16; x++)
  {
    if(x % 3 == 0 && x % 5 != 0)
      {
        fb.push("fizz");
      } else if (x % 5 == 0 && x % 3 != 0)
        {
          fb.push("buzz");
        } else if(x % 3 == 0 && x % 5 == 0)
      {
        	fb.push("fizzbuzz")
      } else if(x % 3 != 0 && x % 5 != 0)
      {
       		fb.push(x);
       }
  }

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

for(let count = 0; count < fb.length; count++)
  {
    console.log(fb[count]);
  }
