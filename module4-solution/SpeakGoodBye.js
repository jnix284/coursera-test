// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: done


// STEP 7: done
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

// STEP 8: done
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker = byeSpeaker;
})(window);

// STEP 9: done