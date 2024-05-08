// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string="";
// let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             console.log(string);

//             input.value = string;
//         }
//           else if(e.target.innerHTML =='AC'){
//             string = "";
//             input.value = string;
//           }
//           else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0,string.length-1);
//             console.log(string);
//             input.value = string
//           }
//           else{

//         string += e.target.innerHTML;
//         console.log(string);
//         input.value = string;
//           }



//     })
// })

let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let string = ""

Array.from(buttons).forEach(function (buttons){
  buttons.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      console.log(string);
      input.value = string;
      
    }
    else if(e.target.innerHTML=='AC'){
      string  = "";
      input.value = string;
    }
    else if(e.target.innerHTML=="DEL"){
      string = string.substring(0,string.length-1)
      
      input.value = string;
    }
    else{
    
    
    console.log(e.target);
    string = string + e.target.innerHTML;
    input.value = string;
  }
  })
})