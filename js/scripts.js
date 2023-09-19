/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const timelineItems = document.querySelectorAll('.timeline-item');

        window.addEventListener("scroll", () => {
            const triggerPoint = window.innerHeight ; 
            timelineItems.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop<triggerPoint) {
                    
                    item.classList.add('anim');
                }
            });
        });
        function validatename() {
            const Name = document.querySelector('#name').value;
            const errorname = document.getElementById('error-name');
          
            if (Name === '') {
               
                errorname.innerText = 'please Enter your Name.';
            } else if (!/^[A-Za-z\s]+$/.test(Name)) {
               
                errorname.innerText = 'Only alphabets & spaces are allowed!';
            } else {
                errorname.innerText = '';
            }
        }
        function validate(){
            
            //validate name
            var NameInput =document.querySelector('#name').value;
            let numInput= document.querySelector("#phone").value;
            if (!/^[A-Za-z\s]+$/.test(NameInput)) {
                alert("Please enter a valid  name");
                    return false;
                        }
                        else if(isNaN(numInput)||numInput==""){
                            alert("Please enter a valid  phone number");
                            return false;
                        }
                        else{
                            alert("Form submitted");
                                }
                        }