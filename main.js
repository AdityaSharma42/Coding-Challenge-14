async function fetchTickets() {
    const API_URL= 'https://jsonplaceholder.typicode.com/posts';
    const tixContainer=document.getElementById('ticket-container');
    const errorMessage=document.getElementById('error-message');

try{
    const response= await fetch(API_URL);
    if (!response.ok){
        throw new Error('Network response issue');
    }

const data = await response.json();
if (data.length===0){
    throw new Error ('No tickets currently available');
}

displayTickets(data);
}catch (error){
    errorMessage.textContent= error.message;
}

}

