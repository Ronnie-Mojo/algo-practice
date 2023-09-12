   //  Bulb
let btn = document.querySelector(".btn");
let cir = document.querySelector(".circle");

let press = 0;
btn.addEventListener("click",function(){
    if(press === 0){
       cir.style.backgroundColor="yellow" ;
       press=1;
       console.log("Switched on");
    }
    else{
        cir.style.backgroundColor="transparent" ;
        press=0;
       console.log("Switched off");
      
    }
})


// Changing CSS 

// const title = document.querySelector('#main-heading');
// title.style.color = 'yellow';
// title.style.backgroundColor = 'black';
// console.log(title);

    //    Applyng style using querySelectorAll

// const listItems = document.querySelectorAll('li');
// listItems.forEach(element => {
//   element.style.fontSize = '2rem'  
// });



    //   Creating an element
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    
    // Adding elements
    ul.append(li);

    //  use of innerText , textContent and innerHTML 
/* note - There maybe a little danger using innerHTML and maybe a 
security issue  because we don't user input to be displayed in the inner
Html bcz this actually allows the user to control the javascript and the 
Html on your web page and it is a problem so in most cases we'll be using 
"innerText"  */

const firstListItem = document.querySelector('li')
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);


//  Modifying Text
  li.innerText = 'X-men';


    // Setting Attributes
     li.setAttribute('id', 'main-heading');

    //  Deleting Attribute
    // li.removeAttribute('id', 'main-heading');
        
    // Getting Attrributes
    const title = document.querySelector('#main-heading');
    // console.log(title.getAttribute('id'));

    // Modifying Classes
    li.classList.add('list-items');
    // li.classList.remove('list-items');

    // console.log(li.classList.contains('list-items'));
    

    // Remove Elements
      // li.remove();


    //   ---------------------------------------------------------
       
    //   TRAVERSING  THe DOM

    // Parent node Traversal:
      // const ul1 =document.querySelector('ul');

    //   console.log(ul1.parentNode.parentNode);
    //   console.log(ul1.parentElement);

    //    Difference b/w. node and element
    // const html = document.documentElement;
    // console.log(html.parentNode);
    // console.log(html.parentElement);



    //  Child Node Traversal
    // const ul2 = document.querySelector('ul');
    // console.log(ul.childNodes);
    // console.log(ul.firstChild);
    // console.log(ul.lastChild);
   
    // ul2.childNodes[1].style.backgroundColor = 'magenta';
    
    
    // console.log(ul2.children);
    // console.log(ul2.children[2]);
    // console.log(ul2.firstElementChild);
    // console.log(ul2.lastElementChild);


    // // Sibling Node Traversal 
    // const ulSib = document.querySelector('ul');

    // console.log(ulSib.previousSibling);
    // console.log(ulSib.nextSibling);
    
    // console.log(ulSib.previousElementSibling);
    //  console.log(ulSib.nextElementSibling);






