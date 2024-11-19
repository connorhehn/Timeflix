// Function to calculate video times
function calculateVideoTimes() {
  const video = document.querySelector('video');
  if (video) {
    const playbackRate = video.playbackRate;
    const remainingTime = (video.duration - video.currentTime) / playbackRate;
    const finishTime = new Date(Date.now() + remainingTime * 1000);

    return {
      remainingTime: formatTime(remainingTime),
      finishTime: finishTime.toLocaleTimeString(),
    };
  } else {
    return {
      remainingTime: '--',
      finishTime: '--',
    };
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes} min ${secs} sec`;
  }
}

// Automatically fetch video times when the popup opens
document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: calculateVideoTimes,
    }, (results) => {
      if (results && results[0] && results[0].result) {
        const { remainingTime, finishTime } = results[0].result;
        document.getElementById('remaining-time').textContent = `Remaining Time: ${remainingTime}`;
        document.getElementById('finish-time').textContent = `Finish Time: ${finishTime}`;
      } else {
        document.getElementById('remaining-time').textContent = 'No video detected';
        document.getElementById('finish-time').textContent = '--';
      }
    });
  });
});

// Add refresh button functionality for manual updates
document.getElementById('refresh').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: calculateVideoTimes,
    }, (results) => {
      if (results && results[0] && results[0].result) {
        const { remainingTime, finishTime } = results[0].result;
        document.getElementById('remaining-time').textContent = `Remaining Time: ${remainingTime}`;
        document.getElementById('finish-time').textContent = `Finish Time: ${finishTime}`;
      } else {
        document.getElementById('remaining-time').textContent = 'No video detected';
        document.getElementById('finish-time').textContent = '--';
      }
    });
  });
});
