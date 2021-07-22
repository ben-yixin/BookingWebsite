<!--assign.php
This file updates the status of bookings where the input code matches a booking code
@author Ben Zhang 15904358-->

<?php
	require_once("/home/dvt2758/public_html/conf/settings.php");

	$conn = mysqli_connect($host, $user, $pswd, $dbnm);
	if(!$conn){
		echo "<p>Unable to connect to server</p>";
	}
	//code takes data input into taxi field through post
	$code = $_POST['assign'];
	//Updates SQL if the code matches data and status is unassigned
	$sql = "UPDATE booking SET status = '1'
			WHERE `code` = '$code' AND
			status = '0'";
						
		$result = mysqli_query($conn,$sql);
		if(!$result) {
			//if result function is unable to query
			echo "Error: " .mysqli_error($conn);
			echo "<br>Something wrong with " .$sql;
			} else {  
			//if result is able to query
				echo "<br>The booking request ".$code." has been properly assigned.";
			}	
			

?>
