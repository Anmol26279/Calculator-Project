let string = "";

let btns = document.querySelectorAll(".cal-btn");

let arr = Array.from(btns);

let input = document.querySelector('.main-para');



arr.forEach((button) => {
    button.addEventListener('click', (e)=> {
        console.log(e.target);

        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        } 
            else if(e.target.innerHTML == 'AC'){
                string = '';
                input.value = string;
            }

            else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length-1);
                input.value = string;
            }

            else {
                string = string + e.target.innerHTML;
                input.value = string;
            }
             
    })
})


let body = document.querySelector('body');



