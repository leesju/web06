let nowIndex = 1;

const imageSlider = document.querySelector('#imageSlider');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');
const bottomBtn04 = document.querySelector('#imgTo4');
const bottomBtn05 = document.querySelector('#imgTo5');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottomBtn01.addEventListener('click' , moveA);
bottomBtn02.addEventListener('click' , moveB);
bottomBtn03.addEventListener('click' , moveC);
bottomBtn04.addEventListener('click' , moveD);
bottomBtn05.addEventListener('click' , moveE);

leftArrow.addEventListener('click' , moveLeft);
rightArrow.addEventListener('click' , moveRight);


function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex =1;
}

 
function moveB()
{
    imageSlider.style.transform = 'translate(-950px)';
    nowIndex =2;
}


function moveC()
{
    imageSlider.style.transform = 'translate(-1900px)';
    nowIndex =3;
}

function moveD()
{
    imageSlider.style.transform = 'translate(-2850px)';
    nowIndex =4;
}

function moveE()
{
    imageSlider.style.transform = 'translate(-3800px)';
    nowIndex =5;
}

function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}

function moveRight()
{
    if(nowIndex == 5)
    {
        nowIndex ==5;
    }
    else
    {
        nowIndex ++;
    }

    moveSlider(nowIndex);

}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
             moveB(); 
        break;
        case 3:
             moveC(); 
        break;
        case 4:
             moveD(); 
        break;
        case 5:
             moveE(); 
        break;
        
    }
}