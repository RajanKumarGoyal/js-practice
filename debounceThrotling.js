

/**
 * Defination :
 * Event will fire when difference between 
 * 2 keystrokes is greater than delay
 * */
const debounce = (fn, delay) => {
    let timer;
    return function (...args) {

        if (timer) {
            clearInterval(timer);
        }

        timer = setTimeout(() => {
           return fn(...args);
        }, delay);
    }
};

/**
 * Defination :
 * Event will fire when difference between
 * 2 fired event is greater than delay
 * **/
const throtling = (fn, delay) => {

    let prev = 0;
    return (...args) => {

        let now = new Date().getTime();
        if(now - prev > delay){
          prev = now;
 
          return fn(...args); 
        }
    }
};

let counter = 0;

const clickFn = () => {
    console.log('You clicked me!', counter++);
};

document.getElementById('myBtnDebounce').addEventListener("click", debounce(clickFn, 300));

document.getElementById('myBtnThrotle').addEventListener("click", throtling(clickFn, 5000));