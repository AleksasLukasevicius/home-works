
const checkIfPersonVIP = (guests, guestName) => {
    const guest = guests.find(guest => guest.name === guestName);
    document.body.innerText = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;
    console.info({ guests })
}

const fetchPartyGuests = async () => {
    const userFullName = prompt("Enter your full name", 'Kristupas Lapeika')
    try {
        const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party');
        if (response.ok) {
            const guests = await response.json();
            checkIfPersonVIP(guests, userFullName)
        }
    } catch (error) {
        console.error(error);
    }

};

fetchPartyGuests();
