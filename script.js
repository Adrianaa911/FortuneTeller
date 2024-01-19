const options = [
'It is certain',
'It is decidedly so',
'Without any doubt',
'Yes indeed',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
' My reply is No',
'Do not count on it',
'Cannot predict now',
'My sources say no',
'Very doubtful',
'Concentrate and ask again',
'Better not tell you now',
'Signs point to yes',
'Outlook not so good',
'Of course, No'
]

const magicBall = document.getElementById("mb-container");
const response = document.getElementById("response");

magicBall.addEventListener("click", function(){
    
    const index=Math.floor(Math.random()*19);
    const message = options[index]
    magicBall.className='magicBall_out animate'
     setTimeout(() => {
        response.textContent = message;
        response.style.fontSize = '1.1rem'
    magicBall.className='magicBall_out'
    }, 3000)
})
console.log();