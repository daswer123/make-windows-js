import "./modules/slider"
import modals from "./modules/modals";
import tabs from "./modules/tabs"
import forms from "./modules/forms"
import timer from "./modules/timer"

window.addEventListener("DOMContentLoaded", () => {
    modals()
    tabs()
    forms()
    timer(new Date("10-20-2020"))
})