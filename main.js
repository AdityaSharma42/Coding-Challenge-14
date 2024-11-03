async function fetchTickets() { //async function to fetch tickets from the API
    const ticketContainer=document.getElementById('ticket-container');
    const errorMessage=document.getElementById('error-message');
    const loadingMessage=document.getElementById('loading');

loadingMessage.style.display='block';

try{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts'); //fetching data from the API
    if (!response.ok){
        throw new Error('Network response issue');//throws an error
    }

const tickets = await response.json();
if (tickets.length===0){//checking if the tickets array is empty
    throw new Error ('No tickets currently available'); //throws an error
}

displayTickets(tickets); //calling the function, this displays the fetched tickets

}catch (error){
    errorMessage.textContent= error.message; //displays errors that may have occurred
} finally{
    loadingMessage.style.display='none';//hides the loading message
}

}
function displayTickets(tickets){
    const ticketContainer= document.getElementById('ticket-container');

    tickets.forEach(ticket => { //go through every ticket in the array
        const ticketDiv= document.createElement('div'); //holds ticket information
        ticketDiv.innerHTML=`
        <h2> Ticket ID: ${ticket.id}</h2>
        <p> Customer Name: User ${ticket.userId}</p>
        <p> Issue Descriptions: ${ticket.title}</p>
        <p> Details:${ticket.body}</p> 
        `; 

        ticketContainer.appendChild(ticketDiv); 
        
    });
}
fetchTickets(); //calling the function