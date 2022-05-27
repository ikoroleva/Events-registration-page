export class Event {
    constructor(name, date, description, image_url) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.image_url = image_url;
        this.element = document.createElement('div');
        this.element.classList.add('event_card');
        this.render();
    }

    // openModal() {
    //     const modal = document.getElementById("myModal");
    //     console.log(modal);
    //     modal.style.display = "block";

    //     const span = document.getElementsByClassName("close")[0];
    //     btn.onclick = function () {
    //         modal.style.display = "block";
    //     }
        
    //     // When the user clicks on <span> (x), close the modal
    //     span.onclick = function () {
    //         modal.style.display = "none";
    //     }
        
    //     // When the user clicks anywhere outside of the modal, close it
    //     window.onclick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }
    //     }
    // }

    render() {
        const events = document.querySelector('.events');

        //console.log(events);

        this.element.innerHTML = `
        <h1 class="event_name">${this.name}</h1>
        <img class="event_image" src="${this.image_url}" alt="Event Photo" width:400px/>
        <p class="event_about">${this.description} </p>
        <button class="event_reg_button"> Register </button>`

        events.appendChild(this.element);

        const buttonReg = this.element.querySelector('.event_reg_button');
        console.log(buttonReg);

        buttonReg.addEventListener('click', () => {

                       
            const modal = document.getElementById("myModal");
            console.log(modal);
            modal.style.display = "block";

    
            const span = document.getElementsByClassName("close")[0];
            buttonReg.onclick = function () {
                modal.style.display = "block";
            }
            
            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
            
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            const modalHeader = modal.querySelector('.event_modal_name');
            modalHeader.textContent = this.name;

            const modalImg = modal.querySelector('.event_modal_img');
            modalImg.setAttribute('src', this.image_url);

            const modalDisc = modal.querySelector('.event_modal_disc');
            modalDisc.textContent = this.description;


            const modalBtn = modal.querySelector('.btn_register');
            


        });
    }


}
/*'use strict';
 
const button = document.querySelector('.button');

 
const datainput = () => {
 
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => {
        quote.innerHTML = `<img src="${json.icon_url}" alt="chuck-norris-joke" />`
        quote.innerHTML += json.value;
    });
}
 
button.addEventListener('click', data);


        // this.element.innerHTML = `

        // <img src="${this.image_url}" alt="event img" class="event_img">
        //     <h1 class="event_name">${this.name}</h1>
        //     <p class="event_description">${this.description}</p>
        //     <button class="event_reg_button">Register</button>
        


        // const regButton = this.element.querySelector('.event_reg_button');
        // textRatingButton.addEventListener('click', async () => {
        //     //open registration form;
        // });

    // async sendRegistration() {
    //     const res = await fetch('https://test-api.codingbootcamp.cz/api/9c68c1d0/ratings', {
    //         "method": "POST",
    //         "body": JSON.stringify({
    //             "rating_subject": this.header,
    //             "rating_value": this.value
    //         }),
    //         "headers": {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const response = await res.json();
    //     console.log(response);
    // }
*/
