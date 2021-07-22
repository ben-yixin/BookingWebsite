<!--admin.php
This file inputs the booking information from the user into the SQL table and returns the confirmation back to
the browser
@author Ben Zhang 15904358-->

<?php
	require_once("/home/dvt2758/public_html/conf/settings.php");
	$conn = mysqli_connect($host, $user, $pswd, $dbnm);
	//if unable to connect
	if(!$conn){
		echo "<p>Unable to connect to server</p>";
	} else {  
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$address = $_POST['address'];
		$suburb = $_POST['suburb'];
		$unit = $_POST['unit'];
		$date = $_POST['date'];
		$time = $_POST['time'];
		//generates a random unique booking reference
		$code = '#'.(rand(1,5000000)).'A';
		$sql = "INSERT INTO booking
		(`name`,`phone`,`address`,`suburb`,`unit`,`date`,`time`,`code`)
		VALUES 
		('$name','$phone','$address','$suburb','$unit','$date','$time','$code')";
		$result = mysqli_query($conn,$sql);
	}
	mysqli_close($conn);

	echo "<br>Thank you! Your booking reference number is ".$code.". You will be picked up
	in front of your provided address at ".$time." on ".$date.".";
	
?>

