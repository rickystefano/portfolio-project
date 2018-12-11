
// IN DIT SCRIPT MAG NIKS GEWIJZIGD WORDEN!!!!  

// INIT youtube-player.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'DH0BQtwEAsM',
		playerVars: {
			'autoplay': 1,
			'controls': 0, 
			'autohide': 1,
			'showinfo' : 0,
			'wmode': 'opaque',
			'rel': 0,
			'loop': 1
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// Player changestate callback.
// DATA: 0 = Video ended, seek to beginning of video.
function onPlayerStateChange(event) {
	if(event.data==0) player.seekTo(0);
}

