const tabs = () => {

    // Выбераем активный таб
    function showCurrentTab(tabContent,tabI,links,activeClassName,display = "block"){
        tabContent.forEach((elem,i) => {
            if (tabI === i){
                elem.style.display = display;
                links[i].classList.add(activeClassName);
            } else {
                elem.style.display = "none"
                links[i].classList.remove(activeClassName)
            }
    })}

    //Создаем табы на основе селекторов
    function makeTabs(tabsSelector,tabContentSelector,linkSelector,activeClassName,display){

        const tabs = document.querySelectorAll(tabsSelector);
        const tabContent = document.querySelectorAll(tabContentSelector);
        const links = document.querySelectorAll(linkSelector)

        tabs.forEach((tab,tabI) => {
            tab.addEventListener("click",() =>{ 
                    showCurrentTab(tabContent,tabI,links,activeClassName,display)
                })
            })
    }

    // 5 и 7 задание по ТЗ
    makeTabs(".glazing_block",".glazing_content",".glazing_slider a","active")
    makeTabs(".decoration_item",".decoration_content > .row > div",".no_click","after_click")
    makeTabs(".balcon_icons_img",".big_img img",".balcon_icons_img","do_image_more","inline")
  

}
export default tabs