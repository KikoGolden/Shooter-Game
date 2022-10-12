//shoot bullets
addEventListener('click', (e)=>{
    let cursorX = e.pageX;
    let cursorY = e.pageY;

    let root = document.querySelector('#root');

    let bullet = document.createElement('img');
    bullet.src = 'images/bullet.png'
    bullet.classList.add('bullet');
    bullet.style.top = (cursorY - 200) + 'px';
    bullet.style.left = (cursorX - 200) + 'px';

    root.appendChild(bullet);

    setTimeout(()=>{root.removeChild(bullet)},399);

});

//summon spiders
setInterval((e)=>{

    let windowW = window.innerWidth;
    let windowH = window.innerHeight;
    
    let x = randomNumber(10, windowW - 410);
    let y = randomNumber(10, windowH - 230);

    let root = document.querySelector('#root');

    let spider = document.createElement('img');
    spider.src = 'images/spider.png'
    spider.classList.add('spider');
    spider.style.top = y + 'px';
    spider.style.left = x + 'px';

    spider.addEventListener('click',()=>{
        spider.classList.add('die');
        setTimeout(()=>{
            root.removeChild(spider);
        },799);
    })

    root.appendChild(spider);

},5000);

//return random number
function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }