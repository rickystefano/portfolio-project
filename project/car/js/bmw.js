var BMW = { motor:{}, bediening:{}, animeren:false, interval:null };

BMW.motor.aan             = false;		// Staat de motor aan?
BMW.motor.olie            = 68;			// Huidig percentage olie resterend
BMW.motor.olieMin         = 32;			// Minimum percentage olie
BMW.motor.toeren          = 0;			// Huidig toerental
BMW.motor.toerenMax       = 8500;		// Maximum toerental

BMW.bediening.sleutel     = false;		// Huidige stand van sleutel in contactslot
BMW.bediening.handrem     = false;		// Huidige stand van de handrem
BMW.bediening.versnelling = 0;			// Huidige stand van versnelling (schakelbak)
BMW.bediening.rem         = false;		// Rempedaal ingedrukt?
BMW.bediening.gas         = false;		// Gaspedaal ingedrukt?
BMW.bediening.koppel      = false;		// Koppelingspedaal ingedrukt?

BMW.starten = function(){
	if(!this.bediening.sleutel && !this.motor.aan){
		var contact = document.getElementById('contactslot_sleutel').classList;
		removeFromList(contact);
		contact.add('contactstart');

		this.gassen('starten');
		var self = this;
		var sound = document.getElementById('startEngineSound');
		sound.loopCountBeforeStart = 2;
		sound.play();
		sound.addEventListener('ended', function(){
			if(--this.loopCountBeforeStart == 0) {
				self.startenSuccesvol();
			} else{
				this.currentTime = 0.4;
				this.play();
			}
		} , false);

		document.getElementById('voertuig').classList.add('trillen');
		this.bediening.sleutel = true;
		this.motor.aan = true;
	}
}

BMW.stoppen = function(){
	if(this.bediening.sleutel && this.motor.aan){
		BMW.gassen('stoppen');
		var contact = document.getElementById('contactslot_sleutel').classList;
		removeFromList(contact);
		contact.add('contactstop');

		var sound = document.getElementById('startEngineSound');
		sound.pause();
		sound.currentTime = 0.52;

		document.getElementById('voertuig').classList.remove('trillen');
		this.bediening.sleutel = false;
		this.motor.aan = false;
	}
}

BMW.startenSuccesvol = function(){
	console.log('STARTEN SUCCESVOL');
	var self = this;
	var sound = document.getElementById('runningEngineSound');
	var canvas = document.getElementById('canvas');
	sound.addEventListener('ended', function(){
		this.currentTime = 0.52;
		this.play();
	}, false);
	sound.play();
	setTimeout(function(){
		self.motor.aan = true;
	}, 750);

	var pook = document.getElementById('pook');
	pook.className = 'pook_start';
	canvas.classList.toggle('invisible');
}

BMW.stoppenSuccesvol = function(){

}

BMW.init = function() {
	this.update();
}

BMW.update = function() {
	//console.log('update '+new Date());

	if(!this.interval) {
		var self = this;
		this.interval = setInterval(function() {
			self.update();
		},50);
	}
}

BMW.gassen = function(action=null) {
	console.log('gassen!');
	var brandstof = document.getElementById('brandstof_wijzer').classList;
	var snelheid  = document.getElementById('snelheid_wijzer').classList;
	var toeren    = document.getElementById('toeren_wijzer').classList;

	// removeFromList(brandstof);
	// removeFromList(snelheid);
	// removeFromList(toeren);


	// if (action == 'starten') {
	// 	brandstof.remove('volletank');
	// 	snelheid.remove('plankgas');
	// 	toeren.remove('volletoeren');
	// }
	//
	// if (action == 'stoppen') {
	// 	brandstof.remove('volletank');
	// 	snelheid.remove('plankgas');
	// 	toeren.remove('volletoeren');
	// }

	switch (action) {
		case 'starten':
			removeFromList(brandstof);
			removeFromList(snelheid);
			removeFromList(toeren);
			brandstof.add('volletank');
			snelheid.add('plankgas');
			toeren.add('volletoeren');
			break;
		case 'stoppen':
			removeFromList(snelheid);
			removeFromList(toeren);
			snelheid.add('plankgas_reverse');
			toeren.add('volletoeren_reverse');
			break;
		case null:
			removeFromList(brandstof);
			removeFromList(snelheid);
			removeFromList(toeren);
			brandstof.add('volletank');
			snelheid.add('plankgas');
			toeren.add('volletoeren');
			break;
	}
}

BMW.remmen = function() {

}

// BMW.schakelen = function(next) {
// 	console.log('schakel naar '+next);
// 	var prev = this.bediening.versnelling;
// 	var list = document.getElementById('pook').classList;
//
// 	if(!this.animeren) {
// 		if(next!=prev) {
// 			removeFromList(list);
// 			list.add('pook_'+prev+'_'+next);
// 			this.bediening.versnelling = next;
// 			this.animeren = true;
//
// 			var self = this;
// 			setTimeout(function() {
// 				self.animeren = false;
// 			}, 1020);
// 			console.log('schakel naar pook_'+prev+'_'+next);
// 		}else{
// 			console.log('kan niet schakelen, staat al op pook_'+prev+'_'+next);
// 		}
// 	}
// }

BMW.schakelen = function(next=null) {
	var self = this;
	if (next >= -1 && next <= 6) {
		console.log('halo');
		var sound   = document.getElementById('switchingGearSound');
		var current = document.getElementById('pook');
		var list 		= current.classList;
		var prev 		= this.bediening.versnelling;
		var change 	= 'pook_'+prev+'_'+next;

		if (!this.animeren) {
			if (next == prev) {
				return false;
			}

			else {
				sound.play();
				this.bediening.versnelling = next;
				removeFromList(list);
				list.add(change);
				this.animeren = true;
				var self = this;
				setTimeout(function(){
					self.animeren = false;
				}, 1020);
			}
		}
	}
}

BMW.handremmen = function() {

}
