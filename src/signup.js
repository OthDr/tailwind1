

const signup_btn = document.querySelector("#signup_btn");

const email_input = document.querySelector("#email_input");
const password_input = document.querySelector("#password_input");


async function btn_click(){
    //email_input.className += " border-red-500 border-solid border-2 ";
    console.log('clicked');
    const URL = "http://localhost:3001/v2/api/login";
    /*let email = "author1@mail.com";
    let password = "123456";*/
    
    let email = email_input.value;
    let password = password_input.value ;
   
    const data =  { email, password };
    
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body:JSON.stringify(data)
        });
        console.log(response.status);

    } catch (error) {
        console.log(error);
    }
    
}
