// let oracleNum = document.getElementById("oracleNum");
// let enterName = document.getElementById("enterName");

let oruko = [
  "seun",
  "akin",
  "lookman",
  "tunde",
  "delelowo",
  "akinkunmi",
  "veronica",
];

// ['seun', 'akin', 'lookman', 'tunde',
// 'delelowo', 'akinkumi', 'veronica']
// let scores = [45, 26, 24, 25, 36, 89, 53];
// for (let i = 0; i < oruko.length; i++)
  for (let sc = 0; sc < 7; sc++) {
  //  console.log(sc);
//     if (names[i] === names[3]) {
//         console.log(names[i] + ' is a good  boy');

//     }
//     else {
//          console.log(scores);
//     }

// if(names[i] = oracleNum.value)
 
  // console.log( scores[sc] == x) 
  
  }
// };

// checkValidity
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (inpObj.checkValidity() == false) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
   
    elseif(inpObj.checkValidity() == true); {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }

    
    document.querySelector('table').innerHTML = 'sfsfsf'
  }

  // checking out a code for experiment
  let scores = [45, 26, 24, 25, 36, 89, 53];
  let enterName = document.getElementById('enterName')
  let show = document.getElementById('show')
  // enterName.value;
  let x = enterName.value

  for (let sc = 0; sc < 7; sc++) {
  if(scores[sc] == x == true) {
    show.innerHTML = 'correct one oooo'
    console.log('correct one oooo')
  }

  // else{
  //   console.log('This wrong')
  // }
};
};
