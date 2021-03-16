let deferredPrompt,
// a2hsBanner = document.getElementById("a2hs"),
a2hsBtn = document.getElementById("a2hsbtn");

window.addEventListener('beforeinstallprompt', function (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  showAddToHomeScreen();

});

function showAddToHomeScreen() {

  a2hsBtn.style.display = "block";

  a2hsBtn.addEventListener("click", addToHomeScreen);

}

function addToHomeScreen() {    // hide our user interface that shows our A2HS button
  // a2hs.style.display = 'none';  // Show the prompt
  deferredPrompt.prompt();  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then(function(choiceResult){

  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }

  deferredPrompt = null;

});}


if ('Notification' in window && navigator.serviceWorker) {
  if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function(status) {
      console.log('Notification permission status:', status);
    });
  }
}


function displayNotification(name, body, image) {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: body,
        icon: image,
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      reg.showNotification(name, options);
    });
  }
}
