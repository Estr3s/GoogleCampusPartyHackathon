//Licència del codi i bla bla bla

function iconaDeshabilitada() {
  	chrome.browserAction.setIcon({path:"iconaDeshabilitada.png"});
} //fFuncio iconaDeshabilitada

function iconaHabilitada() {
  	chrome.browserAction.setIcon({path:"iconaHabilitada.png"});
} //fFuncio iconaHabilitada

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "ESTAS", function(resposta) {
		if (resposta == undefined) {
			chrome.tabs.executeScript(tab.id, {file: 'jquery.min.js', allFrames: true});
			chrome.tabs.executeScript(tab.id, {file: 'content.js', allFrames: true});
		} //fSi
		iconaHabilitada();
	});
});

chrome.tabs.onActivated.addListener(function(info) {
	chrome.tabs.sendMessage(info.tabId, "ESTAS", function(resposta) {
		if (resposta == undefined) {
			iconaDeshabilitada();
		}
		else {
			iconaHabilitada();
		} //fSi
	});
});
