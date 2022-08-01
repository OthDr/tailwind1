

const signup_btn = document.querySelector("#signup_btn");

const email_input = document.querySelector("#email_input");
const password_input = document.querySelector("#password_input");


async function btn_click(){
    //email_input.className += " border-red-500 border-solid border-2 ";
    console.log('clicked');
    const URL = "http://localhost:3001/v2/api/login";
    let email = "author1@mail.com";
    let password = "123456";

    try {
        /*const response = await fetch(URL ,{
            method : 'POST',
            headers : {
                'Content-Type':'aplication/json',
            },
            body:{ email, password }
        })
        console.log(response);*/

    } catch (error) {
        
    }
}
