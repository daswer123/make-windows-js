const forms = () => {

    function makeServerData(form){
        let formData = new FormData(form);
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
        setTimeout(() => formMessage.remove(),2000)
    }

   async function sendData(data) {
        const request = await fetch("http://localhost:3020/orders", {
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

            const message = document.createElement("p");
            message.innerHTML = makeMessage(messages.loading,"blue")

            form.append(message)
            
            sendData(data)
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