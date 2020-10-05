const changeCalcState = (state) => {
    const windowType = document.querySelectorAll(".balcon_icons_img");
    const windowWidth = document.querySelectorAll("#width");
    const windowHeight = document.querySelectorAll("#height");
    const windowOption = document.querySelectorAll("#view_type");
    const windowCheckboxes = document.querySelectorAll("[name = 'checkbox-test']")

    function bindActionToElems(event, elem, prop) {
        elem.forEach( (item, i) => {
            const name = item.nodeName
            item.addEventListener(event, () => {
                switch (name){
                    case "SPAN":
                        state[prop] = i;
                        break;

                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox"){
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплые";
                            elem.forEach( (checkbox, x) => {
                                checkbox.checked = false;
                                if (x === i){
                                    checkbox.checked = true; 
                                }
                            }) 
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                        
                        case "SELECT":
                            state[prop] = item.value;
                            break;
                }
            })
        })
    }

    bindActionToElems("click", windowType, "type")
    bindActionToElems("input", windowWidth, "width")
    bindActionToElems("input", windowHeight, "height")
    bindActionToElems("change", windowOption, "options")
    bindActionToElems("click", windowCheckboxes, "temp")
}

export default changeCalcState