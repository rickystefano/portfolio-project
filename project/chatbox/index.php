<?php
session_start();
if(isset($_POST['close'])) { unset($_SESSION); session_destroy(); }
if(isset($_POST['username'])) $_SESSION['username']=$_POST['username'];
if(!isset($_SESSION['username'])) $_SESSION['username']=false;
if(isset($_POST['']))
?>
<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8">
<title>Chat</title>
<link rel="stylesheet" href="css/style.css">
<script src="js/jquery-3.2.1.min.js"></script>
<script>
$(document).ready(function(){	

	var newInterval = setInterval(function(){
		var e= document.getElementById("servers");
		var server = e.options[e.selectedIndex].value;

		loadChats(server);
	}, 500);

	// Zet deze bestanden op een online webserver.
	// Maak een database aan en importeer het SQL bestand.
	// Pas je PDO connectie aan in chats.php en savechats.php
	
	// Voeg alleen hier code toe.
	// Let op! Wijzig niks aan bestaande code in al deze bestanden!
	$("#servers").on("change", function(){
		var e = document.getElementById("servers");
		var server = e.options[e.selectedIndex].value;

		loadChats(server);
	})


	$(document).on("click", "#sendMsg", function(){
		event.preventDefault();

		var user   = "<?php echo $_SESSION["username"]; ?>";
		var msg    = document.getElementById("chatMessage");
		var e = document.getElementById("servers");
		var server = e.options[e.selectedIndex].value;

		console.log(server);

		$.ajax({
			url: "savechats.php",
			method: "GET",
			data: {
				username: user,
				chatMsg: msg.value,
				server: server
			}
		});

		loadChats(server);

		// console.log(user, msg.value);
		msg.value = "";
	});
	
	function loadChats(server){
		var chatBox = document.getElementById("chatsContainer");

		$.ajax({
			url: "chats.php",
			method: "GET",
			data: {
				server: server
			}
		}).done(function(chats){
			chatBox.innerHTML = chats;
			$("#allMessagesArea").scrollTop($("#chatsContainer").height());
		});
	}
});
</script>
</head>
<body>

<div id=container>
	
<?php if(!$_SESSION['username']){ ?>
	
	<!-- Geef een gebruikersnaam op -->
	<div id="startChat">
		<h1>Start de chat!</h1>
		<form method="post">
			<label>Gebruikersnaam:</label>
			<br>
			<input type="text" name="username" value="">
			<br>
			<input type="submit" value="Start">
		</form>
	</div>
	
<?php }else{ ?>
	
	<!-- Chat venster -->
	<h3><?php print $_SESSION['username']; ?></h3>
	<select id="servers">
		<option selected value="1">Server 1</option>
		<option value="2">Server 2</option>
		<option value="3">Server 3</option>
	</select>
	<div id="close">
		<form method="post">
			<input type="submit" name="clear" value="Clear Chat">
		</form>
		<form method="post">
			<input type="submit" name="close" value="X">
		</form>
	</div>
	
	<div id=allMessagesArea>
		<div id="chatsContainer"></div>
	</div>
	<div id=addMessageArea>
		<form id="sendChat" method="post">
			<input type="text" name="message" value="" id="chatMessage">
			<input id="sendMsg" type="submit" value="Verstuur">
		</form>
	</div>
	
<?php } ?>
	
</div>

</body>
</html>