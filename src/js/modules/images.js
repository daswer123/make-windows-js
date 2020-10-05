const images = () => {
    const imgPopup = document.createElement("div");
    const bigImg = document.createElement("img");

    const worksBlock = document.querySelector(".works");
    const links = worksBlock.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click",e =>{
            e.preventDefault()
        })
    })

    worksBlock.appendChild(imgPopup)

    imgPopup.classList.add("popup");
    imgPopup.style.display = "none";
    imgPopup.style.alignItems = "center";
    imgPopup.style.justifyContent = "center"


    worksBlock.addEventListener("click", event => {
        const target = event.target;
        
        if (target.classList.contains("preview")){
            
            const path = target.parentNode.getAttribute("href");
            console.log(target.parentNode)

            bigImg.setAttribute("src",path);
            bigImg.style.width = "40%";
            bigImg.style.height = "auto"

            imgPopup.style.display = "flex";
            imgPopup.appendChild(bigImg)
        }

        if (target.classList.contains("popup")){
            imgPopup.style.display = "none";
        }
    })
}

export default images