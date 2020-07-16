chrome.runtime.onMessage.addListener(function(message,callback){
	if(message=="up"){
		window.scrollBy({
        top:-300,
      left: 0,
      behavior: 'smooth'
    });
	}
	callback("Ack");
})