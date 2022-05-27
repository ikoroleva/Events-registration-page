export class Event {
    constructor(header) {
        this.header = header;
        this.element = document.createElement('div');
        this.element.classList.add('additional_event');
        this.update();
    }

    update() {

        this.element.innerHTML = `
        <h1 class="additional_event_name"></h1>
        <div class="additional_event_description">0</div>
        <button class = "additional_event_more_button">More info...</button>
        `

        this.element.querySelector('.event__header').textContent = this.header;


        const eventMoreInfo = this.element.querySelector('.event_more_button');
        textRatingButton.addEventListener('click', async () => {
            //await this.sendRating();
x
            
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
