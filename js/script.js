/* JavaScript for pagination */

let header = document.querySelector('.page-header');    // getting the heading of page
// console.log(header);

let contactList = document.querySelector('.contact-list');  // getting the container (ul) for adding contacts in the list
// console.log(contactList);

const contacts = Array.from(document.querySelectorAll('li'));   // getting array of students' name, email and picture
// contacts.map(contacts=>console.log(contacts));

let count = contacts.length;
let pageNums = Math.ceil(count/10); // calculating num of pages required for displaying 10 contacts in each page
//console.log(pageNums);


// function for adding 10 contacts in 1 page
function addContacts(pageNum) {

    header.innerHTML = "<h2>" + "STUDENTS" + "</h2>";   // changing heading of page from CONTACTS to STUDENTS

    contactList.innerHTML = ""; // erasing content of the list
        
    contactList.innerHTML += "<ul class='contact-list>";    

    pageNum--;  // decreasing 1 from current page num for getting the exact position of first contact of a page from contacts array

    let first = 10 * pageNum;  // starting position of contact from the contacts array
    let last = first + 10;  // last contact for a page

    // for keeping the loop in the bound
    if((contacts.length - first) >= 1 && (contacts.length - first) <= 9) {
        let a = contacts.length - first;
        last = a + first;
    }

    // adding contacts to the list
    for(let i=first; i<last; i++) {  
        contactList.innerHTML += "<li class='contact-item cf'>" + contacts[i].innerHTML + "</li>";      
    }

    contactList.innerHTML += "</ul>";    

} 


// for adding pages of contacts to the buttons
function addPage() { 

    let container = document.querySelector('.page');    // for setting up the pagination

    let space = document.createElement('div');
    space.setAttribute("style", "display: inline-block; margin-left: 35%;");
    container.appendChild(space);   // adding some space before the buttons so that the buttons appear in the centre of page

    for(let i=1; i<=pageNums; i++){        
        let buttons = document.createElement('div');
        buttons.classList.add('pagination');      
        buttons.setAttribute("style", "display: inline-block;");
        
        let list = document.createElement('li');
        buttons.appendChild(list);  // appending 'li' inside 'div' having class 'pagination'

        let link = document.createElement('a');
        link.innerText = i;
        list.appendChild(link); // appending 'a' element (having page num) inside 'li' element
       
        buttons.addEventListener('click', function(){addContacts(i);}); // adding 'click' event listener to the button
                    // I got the logic of responding to click event listener from https://youtu.be/IqYiVHrO2U8  

        container.appendChild(buttons);     // adding buttons at the bottom of the page     
    }

}

addContacts(1); // initializing the first page 
addPage();  // adding contacts to their respective page's button