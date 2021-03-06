export function closeAllPopModals(){
    const windows = document.querySelectorAll("[data-modal]")
    windows.forEach(elem => {
        elem.style.display = "none"
    })
    document.body.classList.remove("modal-open");
}

const modals = () => {
    function makeModal(btnSelector,popupSelector,closeSelector,closeClickOverlay = true, canGoNext = true){

        const btns = document.querySelectorAll(btnSelector);
        const popup = document.querySelector(popupSelector) ;
        const close = document.querySelector(`${popupSelector} ${closeSelector}`)
        const windows = document.querySelectorAll("[data-modal]")
        
        function showModal(){
            closeModal()
            popup.style.display = "block";
            document.body.classList.add("modal-open");
            // document.body.style.overflow = "hidden";
        }

        function closeModal(){
                popup.style.display = "none";
                document.body.classList.remove("modal-open");

            closeAllPopModals()
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

            if (target === popup && closeClickOverlay){
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

    //6 Задание из ТЗ
    makeModal(".popup_calc_btn",".popup_calc",".popup_calc_close")
    makeModal(".popup_calc_button",".popup_calc_profile",".popup_calc_profile_close",false)
    makeModal(".popup_calc_profile_button",".popup_calc_end",".popup_calc_end_close",false)
    

    // 10 Задание из ТЗ
    // showModalByTime(".popup",60000)
}
export default modals






