export class Event {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.element = document.createElement('div');
        this.element.classList.add('event');
        this.update();
    }

    update() {

        this.element.innerHTML = `

        <img src="${this.image_url}" alt="event img" class="event_img">
            <h1 class="event_name">${this.name}</h1>
            <p class="event_description">${this.description}</p>
            <button class="event_reg_button">Register</button>
        `


        const regButton = this.element.querySelector('.event_reg_button');
        textRatingButton.addEventListener('click', async () => {
            //open registration form;
        });
    }

    async sendRegistration() {
        const res = await fetch('https://test-api.codingbootcamp.cz/api/9c68c1d0/ratings', {
            "method": "POST",
            "body": JSON.stringify({
                "rating_subject": this.header,
                "rating_value": this.value
            }),
            "headers": {
                'Content-Type': 'application/json'
            }
        });
        const response = await res.json();
        console.log(response);
    }

    setRating(stars, rating) {

        this.element.querySelector('.rating__value').textContent = rating;

        for (let i = 0; i < stars.length; i++) {
            if (i < rating) {
                stars[i].classList.add('rating__star--on');
            } else {
                stars[i].classList.remove('rating__star--on');
            }
        }
    }


}