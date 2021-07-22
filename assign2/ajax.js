/*Sends an XMLHttpRequest object to the server which is send back to the browser,
this class stores functions used by the booking side of the program
@author Ben Zhang 15904358
*/

var xhr = createRequest();
function sendData(dataSource, divID, name, phone, address, suburb, unit, date, time) {
 if(xhr) {
	 var obj = document.getElementById(divID);
	 //if unit is null instantiate this request body
	 if(unit === '' || unit == null){
		 var requestbody ="name="+encodeURIComponent(name)+"&phone="+encodeURIComponent(phone)
		 +"&address="+encodeURIComponent(address)+"&suburb="+encodeURIComponent(suburb)
		 +"&date="+encodeURIComponent(date)+"&time="+encodeURIComponent(time);
		}
	//if unit is not null instantiate this request body
	else {
		 var requestbody ="name="+encodeURIComponent(name)+"&phone="+encodeURIComponent(phone)
		 +"&address="+encodeURIComponent(address)+"&unit="+encodeURIComponent(unit)
	 	 +"&suburb="+encodeURIComponent(suburb)+"&date="+encodeURIComponent(date)
	 	 +"&time="+encodeURIComponent(time);;
		}
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