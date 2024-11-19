document.getElementById('refresh').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getVideoRemainingTime,
      });
    });
  });

  function getVideoRemainingTime() {
    const video = document.querySelector('video');
    if (video) {
      const playbackRate = video.playbackRate;
      const remainingTime = (video.duration - video.currentTime) / playbackRate;
      alert(`Remaining Time: ${formatTime(remainingTime)}`);
    } else {
      alert('No video found on this page.');
    }

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes} min ${secs} sec`;
    }
  }
