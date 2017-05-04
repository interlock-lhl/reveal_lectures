
// Starting with this
function ping(pong) {
	console.log("ping");
	if (typeof pong !== 'function') {
		return;
	}
	pong();
	return;
}

var pong = function() { console.log('pong'); }
ping(pong()); // ping(undefined);
// pong
// ping
// error!

// Lets pass in a function that logs "ping" and see what happens.
