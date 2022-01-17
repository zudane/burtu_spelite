const inital = document.querySelector('.start');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let score = document.querySelector('.score-1');
score.innerHTML = 0;
let sc = 0;
let game = false;
let newV = "";
let randomV = "";

const words = ['dators', 'dati', 'portatīvais', 'zinātne', 'monitors', 'peler', 'tastatūra', 'printeris', 'HTML', 'spēle','diks','serveris','privāts','teksts','nekorekts','pietiekams','kalendārs','mūris','logs','windows','skola','kanāls','vadi','sloti','RAM','ROM','USB'];

const createWords = () => {
    let number = Math.floor(Math.random() * words.length);
    let random = words[number];
    // console.log(random.split(""));
    return random;
}

const jumbleWord = (el) => {
    for (let i = el.length - 1; i >= 0; i--) {
        let temp = el[i];
        let j = Math.floor(Math.random() * (i + 1));
        el[i] = el[j];
        el[j] = temp;

    }
    return el.join("");


}

btn.addEventListener('click', function () {
    if (!game) {
        game = true;
        inital.style.color = 'darkred';

        btn.textContent = 'Uzmini vārdu!';
        guess.classList.toggle('hidden');
        newV = createWords();
        randomV = jumbleWord(newV.split(""));
        console.log(randomV);
        inital.innerHTML = 'Sajauc vārdu \'' + randomV + '\'';

    } else {

        let inputWord = guess.value;
        if (inputWord === newV) {
            console.log('correct');
            game = false;
            inital.innerHTML = `Tas ir pareizi!.\n
                          It is ${newV}`;
            inital.style.color = 'darkviolet';
            sc += 5;
            score.innerHTML = sc;
            guess.classList.toggle('hidden');
            btn.innerHTML = 'start again';
            guess.value = "";

        } else {
            console.log('incorrect');
            inital.innerHTML = `Mēģini vēlreiz! '${randomV}'`;
            inital.style.color = 'red';
            btn.innerHTML = 'Atkārtot';
            guess.value = "";
            guess.classList.toggle('hidden');
        }

    }
})