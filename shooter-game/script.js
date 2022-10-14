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

    let spiderDiv = document.createElement('div');
    spiderDiv.classList.add('spider-container');

    let spider = document.createElement('img');
    spider.src = 'images/spider.png'
    spider.classList.add('spider');
    spiderDiv.style.top = y + 'px';
    spiderDiv.style.left = x + 'px';

    spiderDiv.appendChild(spider);

    //animate spider
    function animateSpider(){
      if (spider.style.right == 0) {
     spider.style.right = '96px';
  }else if (spider.style.right == '96px') {
    spider.style.right = '192px';
 }else if (spider.style.right == '192px') {
    spider.style.right = '96px';
 }else if (spider.style.right == '288px') {
    spider.style.right = 0;
 }

  setTimeout(()=>{
     animateSpider();
  },300)
}
    animateSpider();

    function animateWalk(){
        y = y + 2;
        spiderDiv.style.top = y + 'px';
  
    setTimeout(()=>{
       animateWalk();
    },100)
  }
      animateWalk();

    spider.addEventListener('click',()=>{
        spider.classList.add('die');
        setTimeout(()=>{
            root.removeChild(spiderDiv);
        },799);
    })

    root.appendChild(spiderDiv);

},5000);



//return random number
function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }