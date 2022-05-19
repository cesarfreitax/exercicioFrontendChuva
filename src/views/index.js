const moreTextBtn = document.querySelector('.moreTextBtn');
const text = document.querySelector('.text');
const moreText = document.querySelector('.moreText');

moreTextBtn.addEventListener('click', (e)=>{
    text.classList.toggle('showMore')
    if(moreText.style.display="flex"){
        moreTextBtn.style.display="none"
    }
})

const discuss = document.querySelector('.discuss');
const discussBtn = document.querySelector('.discussBtn');
const newTopic = document.querySelector('.newTopic');

discussBtn.addEventListener('click', (e)=>{
    discuss.style.display="none"
    newTopic.style.display="flex"
})

const newTopicBtn = document.querySelector('.newTopicBtn');
const topicCreated = document.querySelector('.topicCreated');
const assunto = document.querySelector('.assunto');
const conteudo = document.querySelector('.conteudo');
let assuntoMsg;

newTopicBtn.addEventListener('click', (e)=>{
    assuntoMsg = assunto.value;
    console.log(assuntoMsg)
    newTopic.style.display="none"
    topicCreated.style.display="flex"
})


const topicCreatedBtn = document.querySelector('.topicCreatedBtn'); 

topicCreatedBtn.addEventListener('click', (e)=>{
    topicCreated.style.display="none"
    newTopic.style.display="flex"
})




