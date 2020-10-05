import "./modules/slider"
import modals from "./modules/modals";
import tabs from "./modules/tabs"
import forms from "./modules/forms"
import timer from "./modules/timer"
import calcState from "./modules/calcState"
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {

    const state = {}

    modals()
    tabs()
    forms(state)
    timer(new Date("10-20-2020"))
    calcState(state)
    images();
})