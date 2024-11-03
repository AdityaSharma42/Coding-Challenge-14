async function fetchTickets() {
    const ticketContainer=document.getElementById('ticket-container');
    const errorMessage=document.getElementById('error-message');

try{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok){
        throw new Error('Network response issue');
    }

const tickets = await response.json();
if (tickets.length===0){
    throw new Error ('No tickets currently available');
}

displayTickets(tickets);
}catch (error){
    errorMessage.textContent= error.message;
}

}
function displayTickets(tickets){
    const ticketContainer= document.getElementById('ticket-container');

    tickets.forEach(ticket => {
        const ticketDiv= document.createElement('div');
        ticketDiv.innerHTML=`
        <h2> Ticket ID: ${ticket.id}</h2>
        <p> Customer Name: User ${ticket.userId}</p>
        <p> Issue Descriptions: ${ticket.title}</p>
        <p> Details:${ticket.body}</p>
        `;

        ticketContainer.appendChild(ticketDiv);
        
    });
}
fetchTickets();



