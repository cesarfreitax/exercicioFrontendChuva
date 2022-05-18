const moreTextBtn = document.querySelector('.moreTextBtn');
const text = document.querySelector('.text');
const moreText = document.querySelector('.moreText');

moreTextBtn.addEventListener('click', (e)=>{
    text.classList.toggle('showMore')
    if(moreText.style.display="flex"){
        moreTextBtn.style.display="none"
    }
})