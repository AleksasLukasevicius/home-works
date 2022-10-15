const displayGuests = (guests) => {
    const tbody = document.querySelector('tbody');
    guests.forEach(guest => {
        const name = document.createElement('td');
        console.info(guest)
        name.innerText = guest.name;

        const attending = document.createElement('td');
        attending.innerText = guest.attending ? '+' : '-';

        const plusOne = document.createElement('td');
        plusOne.innerText = guest.plusOne ? '+' : '-';

        const tr = document.createElement('tr');
        tr.append(name, attending, plusOne);
        tbody.append(tr);
    })

}

const fetchPartyGuests = async () => {
    try {
        const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding');
        if (response.ok) {
            const guests = await response.json();
            displayGuests(guests);
        }
    } catch (error) {
        console.error(error);
    }
};

fetchPartyGuests();
