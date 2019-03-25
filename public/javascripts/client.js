navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;

let video = document.getElementById('myVideo');
let localStream = null;
navigator.getUserMedia({video: true, audio: false}, 
  function(stream) { // for success case
    console.log(stream);
    /* video.src = window.URL.createObjectURL(stream); 
     Chrome68以降で URL.createObjectURL が使えなくなったらしいので、
     以下のsrcObjectプロパティを使うように修正 */
    video.srcObject = stream;
  },
  function(err) { // for error case
    console.log(err);
  });