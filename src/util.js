const showMessageForAWhile = ({msg, duration = 1000, element}) => {
    element.innerHTML = msg;
    setTimeout(() => {
        element.innerHTML = "";
    }, duration);
}