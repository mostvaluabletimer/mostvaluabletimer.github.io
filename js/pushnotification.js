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
