"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};

!function(e,n){"function"==typeof define&&define.amd?define([],function(){return e.annyang=n(e)}):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=n(e):e.annyang=n(e)}("undefined"!=typeof window?window:void 0,function(r,i){var t,o=r.SpeechRecognition||r.webkitSpeechRecognition||r.mozSpeechRecognition||r.msSpeechRecognition||r.oSpeechRecognition;if(!o)return null;var a,c,s=[],u={start:[],error:[],end:[],soundstart:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},f=0,l=0,d=!1,p="font-weight: bold; color: #00f;",g=!1,m=!1,h=/\s*\((.*?)\)\s*/g,y=/(\(\?:[^)]+\))\?/g,b=/(\(\?)?:\w+/g,v=/\*\w+/g,w=/[\-{}\[\]+?.,\\\^$|#]/g,S=function(e){for(var n=arguments.length,t=Array(1<n?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];e.forEach(function(e){e.callback.apply(e.context,t)})},e=function(){return a!==i},k=function(e,n){-1!==e.indexOf("%c")||n?console.log(e,n||p):console.log(e)},x=function(){e()||t.init({},!1)},R=function(e,n,t){s.push({command:e,callback:n,originalPhrase:t}),d&&k("Command successfully loaded: %c"+t,p)},P=function(e){var n;S(u.result,e);for(var t=0;t<e.length;t++){n=e[t].trim(),d&&k("Speech recognized: %c"+n,p);for(var o=0,r=s.length;o<r;o++){var i=s[o],a=i.command.exec(n);if(a){var c=a.slice(1);return d&&(k("command matched: %c"+i.originalPhrase,p),c.length&&k("with parameters",c)),i.callback.apply(this,c),void S(u.resultMatch,n,i.originalPhrase,e)}}}S(u.resultNoMatch,e)};return t={init:function(e){var n=!(1<arguments.length&&arguments[1]!==i)||arguments[1];a&&a.abort&&a.abort(),(a=new o).maxAlternatives=5,a.continuous="http:"===r.location.protocol,a.lang="en-US",a.onstart=function(){m=!0,S(u.start)},a.onsoundstart=function(){S(u.soundstart)},a.onerror=function(e){switch(S(u.error,e),e.error){case"network":S(u.errorNetwork,e);break;case"not-allowed":case"service-not-allowed":c=!1,(new Date).getTime()-f<200?S(u.errorPermissionBlocked,e):S(u.errorPermissionDenied,e)}},a.onend=function(){if(m=!1,S(u.end),c){var e=(new Date).getTime()-f;(l+=1)%10==0&&d&&k("Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips."),e<1e3?setTimeout(function(){t.start({paused:g})},1e3-e):t.start({paused:g})}},a.onresult=function(e){if(g)return d&&k("Speech heard, but annyang is paused"),!1;for(var n=e.results[e.resultIndex],t=[],o=0;o<n.length;o++)t[o]=n[o].transcript;P(t)},n&&(s=[]),e.length&&this.addCommands(e)},start:function(e){x(),g=(e=e||{}).paused!==i&&!!e.paused,c=e.autoRestart===i||!!e.autoRestart,e.continuous!==i&&(a.continuous=!!e.continuous),f=(new Date).getTime();try{a.start()}catch(e){d&&k(e.message)}},abort:function(){c=!1,l=0,e()&&a.abort()},pause:function(){g=!0},resume:function(){t.start()},debug:function(){var e=!(0<arguments.length&&arguments[0]!==i)||arguments[0];d=!!e},setLanguage:function(e){x(),a.lang=e},addCommands:function(e){var n,t;for(var o in x(),e)if(e.hasOwnProperty(o))if("function"==typeof(n=r[e[o]]||e[o]))R((t=(t=o).replace(w,"\\$&").replace(h,"(?:$1)?").replace(b,function(e,n){return n?e:"([^\\s]+)"}).replace(v,"(.*?)").replace(y,"\\s*$1?\\s*"),new RegExp("^"+t+"$","i")),n,o);else{if(!("object"===(void 0===n?"undefined":_typeof(n))&&n.regexp instanceof RegExp)){d&&k("Can not register command: %c"+o,p);continue}R(new RegExp(n.regexp.source,"i"),n.callback,o)}},removeCommands:function(t){t===i?s=[]:(t=Array.isArray(t)?t:[t],s=s.filter(function(e){for(var n=0;n<t.length;n++)if(t[n]===e.originalPhrase)return!1;return!0}))},addCallback:function(e,n,t){var o=r[n]||n;"function"==typeof o&&u[e]!==i&&u[e].push({callback:o,context:t||this})},removeCallback:function(e,n){var t=function(e){return e.callback!==n};for(var o in u)u.hasOwnProperty(o)&&(e!==i&&e!==o||(u[o]=n===i?[]:u[o].filter(t)))},isListening:function(){return m&&!g},getSpeechRecognizer:function(){return a},trigger:function(e){t.isListening()?(Array.isArray(e)||(e=[e]),P(e)):d&&k(m?"Speech heard, but annyang is paused":"Cannot trigger while annyang is aborted")}}});




/////////scrolling/////////////

function autoScroll() {
    //console.log('hitting scroll page -hor:'+hor+', ver:'+ver);
    chrome.tabs.executeScript({code:'for(i=0;i<document.body.scrollHeight;i++){window.scrollTo(0, i);console.log(i);}'});
}

/**
*   Stop Page Scroll and //top

*/
function scrollToTop() {
    chrome.tabs.executeScript({code:'window.scrollTo(0, 0);'});
}

function srollToBottom() {
  chrome.tabs.executeScript({code:'window.scrollTo(0,document.body.scrollHeight);'});
    
}

/**
*   Scroll down
**/
function scrollDown(){
  chrome.tabs.executeScript({code:'window.scrollBy({top: 300,left: 0,behavior: \'smooth\'});'});
    
}

/**
*   Scroll up
*/
function scrollUp() {
   console.log("over");
    chrome.tabs.executeScript({code: 'window.scrollBy({top:-300,left: 0,behavior: \'smooth\'});'});
  }


 

function openTabWithTimer(link_to_open,timer=100000) {
  var openedWindow= window.open(link_to_open, "_blank");
  setTimeout(function() 
  {
    openedWindow.close();
  }, timer*1000);
}

////////scrollend/////////////


////////////-----------links------------///////////////

var linkMapper = new Map();

/**
* insert ele after
*/
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/**
* Place CSS bubble next to link
*/
function placeDiv(x_pos, y_pos, d) {
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}

/**
* Read Links in a page
* Scroll page once links are read
*/
function readLinks(call_back){
  var arr = [], links = document.links;
  var sb=0;
  
  for(var i=0; i<links.length; i++) {
    var link_id = document.getElementById(links[i].id);
    var pos = link_id.getBoundingClientRect();
    
    placeDiv(pos.x,pos.y,link_id);
    linkMapper.set(i,link_id.href);

    var el = document.createElement("div");
    el.innerHTML = i;
    el.className += " rnh290318-anno";
    //d.className += " speech-bubble";
    insertAfter(link_id, el);
  }
}

/**
* Generate anchor tags
* Read all the generated links
*/
function generateLinks(call_back){  
  ele = '';
  for(i=0;i<100;i++){
    ele += '<b>ahead</b><a class="speech-bubble" id=id_'+i+' href="https://www.google.com">Link '+i+'</a><p>tfctf</p><br>';
  }
  //console.log(ele);
  document.getElementById('links').innerHTML = ele;
  call_back(placeDiv);
}

/**
* Link Mapper open links based on number
*/
function openMappedLinkNum(link_num) {
  var link_to_open = linkMapper.get(link_num);
  link_to_open = testUrl(link_to_open);
  console.log(link_to_open);
  window.open(link_to_open, "_blank");
}

/**
* test url pattern
*/
function testUrl(link_to_open) {
  var pat = /^https?:\/\//i;
  if (!(pat.test(link_to_open)))
  {
    link_to_open = "https://"+link_to_open;   //do stuff
  }
  return link_to_open;
}

////////////////////----end-----//////////////////////




//Define commands
if (annyang) {
    var commands = {

      'close': function() { 
        chrome.tabs.query({ currentWindow: true, active: true },
          function (tabArray) { 
            chrome.tabs.remove(tabArray[0].id,function(){console.log("Tab killed");}); 
        });
        annyang.resume();
      },
      'open new tab': function() { 
        link = "https://"+link_to_open;
        window.open(link, "_blank");
      },
      'open facebook for *item': function(item) {
        console.log(item);
        var timer = 0;
        var res = item.split(" ");
        if(res[1] == 'seconds'){
          timer = parseInt(res[0]);
        }
        else{
          if(res[1] == 'minutes'){
            timer = parseInt(res[0])*60;
          }
          else{
            timer=parseInt(res[0]*3600);
          }
        }
        openTabWithTimer("https://www.facebook.com",timer);
        annyang.resume();
       },
    'show me *website': function(website){
      console.log(website);
        chrome.tabs.create({
          url: "https://"+website+".com",
          selected: true
        });

        //speechWrapper(["Opening..", website]);
        annyang.resume();
      },
      'bring me to *website': function(website){
        console.log(website);
        chrome.tabs.create({
          url: "https://"+website+".com",
          selected: true
        });
        //speechWrapper(["Opening..", website]);
        annyang.resume();
      },
      'take me to *website': function(website){
          console.log(website);
          chrome.tabs.create({
            url: "https://"+website+".com",
            selected: true
          });
          //speechWrapper(["Opening..", website]);
          annyang.resume();
      },
      'open *website': function(website){
          console.log(website);
          chrome.tabs.create({
            url: "https://"+website+".com",
            selected: true
          });
          //speechWrapper(["Opening..", website]);
          annyang.resume();
      },
      'navigate to *website': function(website){
        console.log(website);
        chrome.tabs.create({
          url: "https://"+website+".com",
          selected: true
        });
        //speechWrapper(["Opening..", website]);
        annyang.resume();
      },
      'search google *item': function(item) {
        console.log(item);
        chrome.tabs.create({
          url: "https://www.google.com/search?q=" + item,
          selected: true
        });
        //speechWrapper(["Searching for..", item]);
        annyang.resume();
      },
      'search youtube *item': function(item) {
        console.log(item);
        chrome.tabs.create({
          url: "https://www.youtube.com/results?search_query=" + item,
          selected: true
        });
        //speechWrapper(["Searching for..", item]);
        annyang.resume();
       },
        'up': function() {
        scrollUp();
        annyang.resume();
       },
        'down': function() {
        scrollDown();
        annyang.resume();
       }, 
       'top': function() {
        scrollToTop();
        annyang.resume();
       },
        'bottom': function() {
        srollToBottom();
        annyang.resume();
       },
       'autoscroll': function() {
        console.log("autoscroll");
        autoScroll();
        annyang.resume();
       }

    };

    annyang.addCallback('resultNoMatch', function(userSaid, commandText, phrases) {
        console.log(userSaid); 
        console.log(commandText); 
        console.log(phrases); 
    });

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start({autoRestart: true, continuous: false});

    console.log(annyang.isListening());
    if(!annyang.isListening())
    {
      annyang.start();
    }

}
