/*Validates input in booking.html to ensure all required inputs are there, then sends
the data if all inputs are validated
@author Ben Zhang 15904358
*/

const name = document.getElementById('booking-name');
const phone = document.getElementById('booking-phone');
const address = document.getElementById('booking-address');
const suburb = document.getElementById('booking-suburb');
const unit = document.getElementById('booking-unit');
const date = document.getElementById('booking-date');
const time = document.getElementById('booking-time');
const form = document.getElementById('form');
const error = document.getElementById('error');
//validates if form exists
if(form){
	form.addEventListener('submit', (e) => {
		//instantiate error message
		let message = [];
		//prevent default submit action
		e.preventDefault();
		//validate if input exists
		if(name.value === '' || name.value == null) {
			message.push('Name is required');
		}
		if(phone.value === '' || phone.value == null) {
			message.push('Phone is required');
		}
		if(address.value === '' || address.value == null) {
			message.push('Address is required');
		}
		if(suburb.value === '' || suburb.value == null) {
			message.push('Suburb is required');
		}
		if(!time.value) {
			message.push('Time is required');
		}
		if(!date.value) {
			message.push('Date is required');
		}
		//if there are error messages then display them
		if(message.length > 0) {
			error.innerText = message.join('\n');
		}
		//if there are no error messages then run the function
		if(message.length < 1) {
			error.innerText = null;
			sendData('data.php', 'booking-message', name.value, phone.value, address.value, suburb.value, unit.value, date.value, time.value);
		}
	});
} 
