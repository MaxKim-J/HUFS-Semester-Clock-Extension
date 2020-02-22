chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    alert("외대 종강시계가 성공적으로 설치되었습니다!\n종강까지 화이팅!🔥")
  } else if (details.reason == "update") {
    var thisVersion = chrome.runtime.getManifest().version;
    console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
  }
});

var config = {
  apiKey: 'AIzaSyDQTDfF0dJSFv1_OF6YGZVnx-E2NWUzWe4',
  databaseURL: 'https://hufssemesterclockfirebase.firebaseio.com/',
  storageBucket: '<YOUR_STORAGE_BUCKET_NAME>'
};

firebase.initializeApp(config);
