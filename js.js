

// Get all navigation links
const section = [
    '#header',
    '#about',
    '#Projects',
    '#contact',
    '#Blog'
]
    // Add more entries for other sections


const navLinks = document.querySelectorAll('nav a');
console.log(navLinks)

        // Add click event listener to each navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior

                const targetId = link.getAttribute('href'); // Get the target section's ID
                console.log(targetId)
                
                const targetSection = document.querySelector(targetId); // Get the target section element
                console.log(targetSection)

                if (targetSection) {
                    
                   // Hide all sections

                    section.forEach(section => {
                        console.log(section)
                        const targetSection1 = document.querySelector(section); // Get the target section element
                        
                        targetSection1.style.display = 'none';
                        console.log(targetSection1)
                        console.log("this one works 454")
                        
                        
                    });

                    // Show the target section
                    targetSection.style.display = 'block';
                    
                    console.log("this one works")

                    // Scroll to the target section smoothly
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

// Get references to the button and the about section
const aboutButton = document.getElementById("button1");
const aboutSection = document.getElementById("about");
const homeSection = document.getElementById("header");

// Add a click event listener to the button
aboutButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of the link
     // Toggle the "hidden" class on the about section
     homeSection.style.display='none';
     aboutSection.style.display='block';
});


// contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycby_KchC1J0UHsKQILjfmRF_chn_jFbGEoPnskIlEJ2xFEdYnOTED1rTDFo9HBwskXwpvw/exec'
const msg=document.getElementById("msg")

  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            msg.innerHTML="Message sent successfully!"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            // Clear form fields
            form.reset();
            // Show success alert
           // alert('Form submitted successfully!');
        })
        .catch(error => console.error('Error!', error.message));
    });



   

// small screen

const openmenu1=document.getElementById("openmenu")
const openmenu_contact1=document.getElementById("openmenu-contact")
const openmenu_about1=document.getElementById("openmenu-about")
const openmenu_project1=document.getElementById("openmenu-project")
const openmenu_blog1=document.getElementById("openmenu-blog")

function openmenu(){
    openmenu1.style.right="0";   
}
function closemenu(){
    openmenu1.style.right="-180px"

}
function openmenu_contact(){
    openmenu_contact1.style.right="0"
}
function closemenu_contact(){
    openmenu_contact1.style.right="-180px"
}
function openmenu_about(){
    openmenu_about1.style.right="0"
}
function closemenu_about(){
    openmenu_about1.style.right="-180px"
}
function openmenu_project(){
    openmenu_project1.style.right="0"
}
function closemenu_project(){
    openmenu_project1.style.right="-180px"
}
function openmenu_blog(){
    openmenu_blog1.style.right="0"
}
function closemenu_bolg(){
    openmenu_blog1.style.right="-180px"
}

document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const anchor of smoothScrollLinks) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});