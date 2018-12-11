
/* FUNCTIE VOOR HET OPVANGEN VAN TOETSEN */
document.addEventListener('keydown', function(event) {
	console.log(event.keyCode);
	event.preventDefault();
	var prev = BMW.bediening.versnelling;
	if (BMW.motor.aan) {
		switch (event.keyCode) {
			case 32: BMW.gassen();  break; //space
			case 78: BMW.schakelen(0);  break; //n
			case 82: BMW.schakelen(-1); break; //reverse
			case 97: BMW.schakelen(1);  break; //num1
			case 98: BMW.schakelen(2);  break; //num2
			case 99: BMW.schakelen(3);  break; //num3
			case 100: BMW.schakelen(4); break; //num4
			case 101: BMW.schakelen(5); break; //num5
			case 102: BMW.schakelen(6); break; //num6

			case 49: BMW.schakelen(1);  break; //num1
			case 50: BMW.schakelen(2);  break; //num2
			case 51: BMW.schakelen(3);  break; //num3
			case 52: BMW.schakelen(4);  break; //num4
			case 53: BMW.schakelen(5);  break; //num5
			case 54: BMW.schakelen(6);  break; //num6

			case 38: BMW.schakelen(prev+1);break;
			case 40: BMW.schakelen(prev-1); break;
		}
	}
	// switch(event.keyCode) {
	// 	case 8:    BMW.schakelen(-1);  /* SPACE     */ break;
	// 	case 32:   BMW.gassen();       /* GASPEDAAL IN */ break;
	// 	case 78:   BMW.schakelen(0);   /* BACKSPACE */ break;
	// 	case 82:   BMW.schakelen(-1);  /* CHAR R    */ break;
	//
	// 	//case 37:   					   break;
	// 	//case 38:   					   break;
	// 	//case 39:   					   break;
	// 	//case 40:   					   break;
	//
	// 	case 45:   BMW.schakelen(0);   /* NUMPAD 0  */ break;
	// 	case 35:   BMW.schakelen(1);   /* NUMPAD 1  */ break;
	// 	case 40:   BMW.schakelen(2);   /* NUMPAD 2  */ break;
	// 	case 34:   BMW.schakelen(3);   /* NUMPAD 3  */ break;
	// 	case 37:   BMW.schakelen(4);   /* NUMPAD 4  */ break;
	// 	case 12:   BMW.schakelen(5);   /* NUMPAD 5  */ break;
	// 	case 39:   BMW.schakelen(6);   /* NUMPAD 6  */ break;
	//
	// 	case 48:   BMW.schakelen(0);   /* NUM 0     */ break;
	// 	case 49:   BMW.schakelen(1);   /* NUM 1     */ break;
	// 	case 50:   BMW.schakelen(2);   /* NUM 2     */ break;
	// 	case 51:   BMW.schakelen(3);   /* NUM 3     */ break;
	// 	case 52:   BMW.schakelen(4);   /* NUM 4     */ break;
	// 	case 53:   BMW.schakelen(5);   /* NUM 5     */ break;
	// 	case 54:   BMW.schakelen(6);   /* NUM 6     */ break;
	// }
}, false);


/* FUNCTIE VOOR CONTROLE OF HET BESTAND GELADEN IS */
window.addEventListener('load', function() {
	// BMW.init();
	var contactslot = document.getElementById('contactslot');
	contactslot.addEventListener('mousedown', function(){
		BMW.starten();
	}, false);
	contactslot.addEventListener('mouseup', function(){
		BMW.stoppen();
	}, false);
	contactslot.addEventListener('mouseout', function(){
		// BMW.stoppen();
	}, false);
}, false);


/* FUNCTIE VOOR HET VERWIJDEREN VAN CLASSES */
function removeFromList(classList) {
	if(typeof(classList) == 'object') {
		if(classList.length > 0) {
			console.log('removing '+classList.length+' item(s) from classList');
			for(var i=classList.length-1; i>=0; i--) {
				classList.remove(classList[i]);
			}
		}else{
			console.log('failed to remove any item(s) from classList, list is empty');
		}
	}
}


/////// N = 114px,-126px
/////// R =  -1px,-125px  58px,-168px  114px,-126px
/////// 1 = 136px,-187px  88px,-146px  114px,-126px
/////// 2 =  36px,-106px  88px,-146px  114px,-126px
/////// 3 = 169px,-170px  114px,-126px
/////// 4 =  66px, -82px  114px,-126px
/////// 5 = 200px,-149px  146px,-106px  114px,-126px
/////// 6 =  97px, -59px  146px,-106px  114px,-126px
