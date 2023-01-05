// burger=document.querySelector('.burger')
// navbar=document.querySelector('.navbar')
// navList=document.querySelector('.nav-list')
// rightNav=document.querySelector('.rightNav')

// burger.addEventListener('click',()=>{

//     rightNav.classList.toggle('v-class-resp');
//     navList.classList.toggle('v-class-resp')
//     navbar.classList.toggle('h-nav-resp');


// })
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.search-box')

burger.addEventListener('click', () => {

    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp');


})

const searchFun = () => {
    let filter = document.getElementById('myinput').value.toUpperCase();

    var arr = ["BURGER", "PIZZA", "DESIFOOD", "ABOUTUS"];

   let magna = document.querySelector('i')
    for (var i = 0; i < 4; i++) 
    {
        if (filter == arr[i] ) 
        {  
            arr[i].toLowerCase();       
             open(arr[i] + '.html');
        }
    }
    if (filter == 'HOME' || filter=='CONTACT US') 
    {
        open('index.html');
    }
}

var noti=document.querySelector('h1');
var select=document.querySelector('.select');
var button=document.getElementsByTagName('button');
for(but of button)
{
    but.addEventListener('click',(e)=>{
        var add=Number(noti.getAttribute('data-count')||0);
        noti.setAttribute('data-count',add+1);
        noti.classList.add('zero');

        var parent=e.target.parentNode;
        var clone=parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText="Buy-now";
        if(clone)
        {
            noti.onclick=()=>
            {
                select.classList.toggle('display'); 
               //select.classList.toggle('display2'); 
            }
        }

        var image=e.target.parentNode.querySelector('img');
        var span=e.target.parentNode.querySelector('span');
        var  s_image=image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(()=>{
            span.removeChild(s_image);
            span.classList.remove('active');
        },500);
        
    })
}