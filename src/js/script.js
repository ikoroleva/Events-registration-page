import { Event } from './Event';

const loadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/6e2aa2a2/events')
    const responseConverted = await response.json();

    // console.log(responseConverted);
    return responseConverted
}
// loadData();

const renderElements = (data) => {
    //console.log(data)

    const events = document.querySelector('.events');


    data.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('event_card')
        events.appendChild(card);
        card.innerHTML = `
            <h1 class="event_name">${element.name}</h1>
            <button class="event_reg_button">Register</button>`

    });


    // data available
}
const loadDataAndRender = async () => {
    const data = await loadData()
    // data available
    renderElements(data)
}


loadDataAndRender()
// no data ever

// const event1 = new Event('Something', '27-05-2022');
// const event2 = new Event('Something', '27-05-2022');
// const event3 = new Event('Something', '27-05-2022');



// const event2 = new Event('Something else');
// const event3 = new Event('Something else');