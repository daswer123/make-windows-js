import {closeAllPopModals} from "./modals";

const forms = (state) => {

    function makeServerData(form){
        let formData = new FormData(form);

        if (form.getAttribute("data-calc")){
            for (let key in state){
                formData.append(key,state[key])
            }
            state = {}
        }

        let data = {};
        
        formData.forEach((elem,key) => {
            data[key] = elem
        })

        return JSON.stringify(data)
    }

    function makeMessage(text,color = "green"){
        return `<p style="color : ${color}">${text}</p>`
    }

    function clearForm(inputs,formMessage){
        inputs.forEach(input => {
            input.value = "";
        })
        setTimeout(() => {
            formMessage.remove()
            closeAllPopModals()
        },2000)
    }

   async function sendData(data,postType) {
        const url = "http://localhost:3020/"+postType
        const request = await fetch(url, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : data
        })

        if (!request.ok){
            return Promise.reject("error")
        }

        return Promise.resolve("succssess")
    }

    function onInput(inputs){
        inputs.forEach(input => {
            if (input.getAttribute("name") === "user_phone"){
                input.addEventListener("input",(event) => {
                    // const value = event.target.value.replace(/\D/gi,"")
                    const value = event.target.value
                    if (value.match(/[a-zA-Z]/gi)){
                        input.style.border = "1px solid red";
                    } else {
                        input.style.border = "";
                    }
                    // event.target.value = value
                })
            }
        })
    }



    const forms = document.querySelectorAll("form");
    const input = document.querySelectorAll("input");

    const messages = {
        loading : "Отправка формы...",
        succsess : "Мы получили вашу заявку, скоро мы с вами свяжемся",
        error : "Произошла ошибка, повторите отправку чуть позже"
    }

    forms.forEach(form => {
        form.addEventListener("submit",(event) => {
            event.preventDefault();
            const data = makeServerData(form);
            let postType = "clients"

            if (form.getAttribute("data-calc")){
                postType = "orders"
            }

            const message = document.createElement("p");
            message.innerHTML = makeMessage(messages.loading,"blue")

            form.append(message)
            

            sendData(data,postType)
            .then((res) => {
                console.log(res)
                message.innerHTML = makeMessage(messages.succsess)
            })
            .catch((err) => {
                console.log(err)
                message.innerHTML = makeMessage(messages.error,"red")
            })
            .finally(() => {
                clearForm(input,message);
            })

        })  
    })

    onInput(input)
}

export default forms