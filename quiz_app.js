const questions = [
    {
        'que': 'Who is making the Web standards?',
        'a': 'Mozilla',
        'b': 'Google',
        'c': 'The World Wide Web Consortium',
        'd': 'Microsoft',
        'correct': 'c'
    },

    {
        'que': 'Choose the correct HTML element for the largest heading:',
        'a': '<h1>',
        'b': '<heading>',
        'c': '<h6>',
        'd': '<head>',
        'correct': 'c'
    },

    {
        'que': 'Which HTML tag is used to define an internal style sheet?',
        'a': '<css>',
        'b': '<script>',
        'c': '<title>',
        'd': '<style>',
        'correct': 'd'
    },

    {
        'que': 'Which is the correct CSS syntax?',
        'a': 'body{color:black;}',
        'b': 'body:color=black;',
        'c': '{body;color:black;}',
        'd': '{body:color=black;}',
        'correct': 'a'
    },

    {
        'que': 'Inside which HTML element do we put the JavaScript?',
        'a': '<scripting>',
        'b': '<script>',
        'c': '<javascript',
        'd': '<js>',
        'correct': 'b'
    },

    {
        'que': 'How do you write "Hello World" in an alert box?',
        'a': 'msgBox("Hello World");',
        'b': 'alert("Hello World");',
        'c': 'alertBox("Hello World");',
        'd': 'msg("Hello World");',
        'correct': 'b'
    }
]  

let index = 0;
let total = questions.length;
let right = 0,
    worng = 0;

const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () =>{

    if(index === total){
        return endQuiz();
    }
    reset();

    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        worng++;
    }
    index++;
    loadQuestion();
    return; 
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value; 
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById('box').innerHTML = `
        <h3>Thank You For Playing The Quiz</h3>
        <h2> ${right} / ${total} are correct</h2>
    `
}
loadQuestion();