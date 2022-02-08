// STEP 2: done


// STEP 3: done
(function (window){ 
    var helloSpeaker = {};
    var speakWord = "Hello";

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);

// STEP 5: done
