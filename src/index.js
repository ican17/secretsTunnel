//Goal : encoding messages using the Base64 representation , and decoding them 

const createDiv = document.querySelector('#create');
const linkDiv = document.querySelector('#link');
const showDiv = document.querySelector('#show');

//if there's a message to decode
const {hash} = window.location;
const msgToDecode = hash.replace('#', '');
if (msgToDecode) {
    createDiv.classList.add('hide');
    showDiv.classList.remove('hide');
    showDiv.querySelector('.card-panel').innerHTML = `
    <p>${atob(msgToDecode)}</p>
    <a href="./index.html" />Create a new secret message and share it with your friends</a>
    `;
}
// to encode a message
createDiv.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const msgInput = createDiv.querySelector('input');
    const linkInput = linkDiv.querySelector('input');
    const msgToEncode = msgInput.value.trim();
    if(msgToEncode){
        linkInput.value = `${window.location}#${btoa(msgToEncode)}`;
        linkDiv.classList.remove('hide');
    }else{
    
        showMessageForAWhile({
            msg: "The secret message should not be empty",
            duration: 1500,
            element : createDiv.querySelector('.validation')
        });
    }
});

// To copy the link
linkDiv.querySelector('button').addEventListener('click', () => {
    const linkInput = linkDiv.querySelector('input');
    textToBeCopied = linkInput.value.trim();
    
    if(textToBeCopied){

        linkInput.select();
        linkInput.setSelectionRange(0, 99999); //For mobile
        document.execCommand("copy");

        showMessageForAWhile({
            msg: "Link copied...",
            duration: 500,
            element : linkDiv.querySelector('.copied')
        });
    }
});