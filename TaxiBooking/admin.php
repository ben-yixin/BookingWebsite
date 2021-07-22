<!--admin.php
This file returns booking data that matches the requirements. i.e bookings within 2 hours from current time on
the current date. 
@author Ben Zhang 15904358-->

<?php
	require_once("/home/dvt2758/public_html/conf/settings.php");

	$conn = mysqli_connect($host, $user, $pswd, $dbnm);
	if(!$conn){
		echo "<p>Unable to connect to server</p>";
	}
	//select data on current date within 2 hours from now on the current day
	$sql = "SELECT * FROM booking WHERE status = '0'
			AND time <= ADDTIME(CURRENT_TIME, '2:00:00')
			AND time >= CURRENT_TIME
			AND date = CURRENT_DATE ";
	
		$result = mysqli_query($conn,$sql);
		if(!$result) {
			//if result function is unable to query
			echo "Error: " .mysqli_error($conn);
			echo "<br>Something wrong with " .$sql;
			} else {  
			//if result is able to query
				while($row = mysqli_fetch_assoc($result)){
					echo "<br>";
					echo "<table border = \"1\">";
					echo "<tr><td>Code:</td><td>".$row["code"]."</td></tr>";
					echo "<tr><td>Name:</td><td>".$row["name"]."</td></tr>";
					echo "<tr><td>Address:</td><td>".$row["address"].", ".$row["suburb"]." ".$row["unit"]."</td></tr>";
					echo "<tr><td>Time</td><td>".$row["time"]."</td></tr>";
					echo "<tr><td>Date</td><td>".$row["date"]."</td></tr>";
					echo "</table>";
					echo "<br>";
				}	
			echo "<br>There are no other bookings to be displayed at this time.";
			}

?>
