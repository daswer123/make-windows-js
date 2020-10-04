const timer = (deadline = 0) => {
    // Если время таймера не указанно, то таймер поставится на 12 часов
    if (deadline === 0){
        deadline = Date.now() + 3600 * 1000 * 12
    }

    function addZero(num){
        return num < 10 ? `0${num}` : num 
    }

    function getTime(deadline){
        
        const time = ( deadline - Date.now() ) / 1000; // Сразу переводим в секунды
        if (time < 0){
            console.log("Время вышло, введите новую дату");
        }

        const days = addZero(Math.floor(time / (60 * 60 * 24)))
        const hours = addZero(Math.floor(time / 60 / 60 % 24))
        const minutes = addZero(Math.floor(time / 60 % 60))
        const seconds = addZero(Math.floor(time % 60))

        return {days,hours,minutes,seconds}
    }

    const updateClock = () => {

        const day = document.querySelector("#days")
        const hour = document.querySelector("#hours")
        const minute = document.querySelector("#minutes")
        const second = document.querySelector("#seconds")

        const time = getTime(deadline);

        day.textContent = time.days;
        hour.textContent = time.hours;
        minute.textContent = time.minutes;
        second.textContent = time.seconds;
    }

    setInterval(() => updateClock(), 1000);
    updateClock()

}

export default timer