/*Set and display date,time,name,no of tickets, price of the ticket for a customer
who has booked tickets for a movie to be screened in a specific auditorium.*/

//Declaration
let date="11/03/1999",time="6:30pm",name="H.Brijesh"
const ticket=2,price="Rs.500",audi=3

//Printing
console.log("\nDate= "+date+"\nTime= "+time+"\nName= "+name+"\nPersons= "+ticket+"\nPrice= "+price+"\nAuditorium ="+audi)

// Using Template String to Print: `$  
console.log(`${date} ${time} ${name}`)
console.log("Dummy text: "+ `${ticket} ${price} ${audi}`)