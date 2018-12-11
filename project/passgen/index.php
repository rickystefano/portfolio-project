<?php
	$pass= '';
	$options= '';
	$pass_length_options = array(6, 8, 10, 12, 14, 16, 18, 32, 64);


	foreach ($pass_length_options as $key => $value) {
		$options .= '<option value='.$key.'>'.$value.'</option>';
	}

	$checkedLowercase = '';
	$checkedUppercase = '';
	$checkedNumbers = '';
	$checkedSpecials = '';

	if ( isset($_GET["submit"]) ) {
		$lowercase = explode( ' ', 'a b c d e f g h i j k l m n o p q r s t u v w x y z');
		$uppers = explode( ' ', 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z');
		$numbers = explode( ' ', '0 1 2 3 4 5 6 7 8 9');
		$specials = explode( ' ', '! @ # $ % ^ & * ( ) - _ + = / ? | ~ ` : ; " < > , .');

		$characters = array();

		if (isset($_REQUEST['lowercase'])) { //lowercase charcter
			$characters = array_merge($characters, $lowercase);
			$checkedLowercase = ' selected';
		}

		if (isset($_REQUEST['uppercase'])) { //uppercase character
			$characters = array_merge($characters, $uppers);
			$checkedUppercase = ' selected';
		}

		if (isset($_REQUEST['numbers'])) { //numbers charcter
			$characters = array_merge($characters, $numbers);
			$checkedNumbers = ' selected';
		}

		if (isset($_REQUEST['specials'])) { //special character
			$characters = array_merge($characters, $specials);
			$checkedSpecials = ' selected';
		}
		$passwordLength = $pass_length_options[$_REQUEST['pass_length']];
		$pass = generatePassword($characters, $passwordLength);
	}


	function generatePassword($chars, $length){
		$randomPassword = '';
		for ($i=0; $i < $length; $i++) {
			$index = rand(0, count($chars)-1);
			$char = $chars[$index];
			$randomPassword .= $char;
		}
		return $randomPassword;
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Random Password Generator</title>
	</head>
	<body>
		<form action='' method='get' id="formulier">
			<h1>Random Password Generator V0.04</h1><br/>

			<label for='pass_length'>password length:</label>

			<select name="pass_length" id="pass_length"><br/>
  				<?php echo "$options";  ?>

			</select>	<br/><br/>

			<label for='lowercase'>Include lowercase characters</label>
			<input type='checkbox' name='lowercase' id='lowercase' <?php echo $checkedLowercase; ?>/><br/>

			<label for='uppercase'>Include uppercase characters</label>
			<input type='checkbox' name='uppercase' id='uppercase' <?php echo $checkedUppercase; ?>/><br/>

			<label for='numbers'>include numbers</label>
			<input type='checkbox' name='numbers' id='numbers' <?php echo $checkedNumbers; ?>/><br/>

			<label for='specials'>Include special characters</label>
			<input type='checkbox' name='specials' id='specials' <?php echo $checkedSpecials; ?>/><br/><br/>

			<input type="submit" name="submit" value= "Generate Password" />
		</form>
		<br>
		<input type='text' id='pass' value='<?php echo $pass; ?>' />
	</body>
</html>
