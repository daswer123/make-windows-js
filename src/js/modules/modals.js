const modals = () => {
    function makeModal(btnSelector,popupSelector,closeSelector){

        const btns = document.querySelectorAll(btnSelector);
        const popup = document.querySelector(popupSelector) ;
        const close = document.querySelector(`${popupSelector} ${closeSelector}`)

        function showModal(){
            popup.style.display = "block";
            document.body.classList.add("modal-open");
            // document.body.style.overflow = "hidden";
        }

        function closeModal(){
            popup.style.display = "none";
            document.body.classList.remove("modal-open");
            // document.body.style.overflow = "auto";
        }
        
        // Показываем модальное окно
        btns.forEach(btn => {
            btn.addEventListener("click",(e) => {
                e.preventDefault();
                showModal();
            })
        })  
        
        // Убираем модальное окно
        popup.addEventListener("click",(event) =>{
            const target = event.target;
            if (target === popup && target){
                closeModal()
            }
        })

        close.addEventListener("click", () =>{
            closeModal()
        })
    }

    function showModalByTime(selector,timer){
        const popup = document.querySelector(selector);
        setTimeout(() => {
            popup.style.display = "block";
            document.body.classList.add("modal-open");
        }, timer)
    }

    // 1 Задание из ТЗ
    makeModal(".popup_engineer_btn",".popup_engineer",".popup_close")

    // 2 Задание из ТЗ
    makeModal(".phone_link",".popup",".popup_close")


    // 10 Задание из ТЗ
    showModalByTime(".popup",60000)
}
export default modals
