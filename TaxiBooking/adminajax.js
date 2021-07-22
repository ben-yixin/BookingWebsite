/*Sends an XMLHttpRequest object to the server which is send back to the browser,
this class stores functions used by the admin side of the program
@author Ben Zhang 15904358
*/

var xhr = createRequest();
function searchbooking(dataSource, divID) {
 if(xhr) {
	 var obj = document.getElementById(divID);
	 //initialise new request
	 xhr.open("POST", dataSource, true);
	 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	 //whenever the ready state changes run this function
	 xhr.onreadystatechange = function() {
 if (xhr.readyState == 4 && xhr.status == 200) {
	 obj.innerHTML = xhr.responseText;
	} 
 } 
 	//send the requestbody data
	 xhr.send(requestbody);
} 
} 

function assigntaxi(dataSource, divID, assign) {
 if(xhr) {
	 var obj = document.getElementById(divID);
	 //initialise request body to be sent
	 var requestbody ="assign="+encodeURIComponent(assign)

	 xhr.open("POST", dataSource, true);
	 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	 xhr.onreadystatechange = function() {
 if (xhr.readyState == 4 && xhr.status == 200) {
	 obj.innerHTML = xhr.responseText;
	} 
 } 
	 xhr.send(requestbody);
} 
} 