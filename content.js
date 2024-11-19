const video = document.querySelector('video');
if (video) {
  const playbackRate = video.playbackRate;
  const remainingTime = (video.duration - video.currentTime) / playbackRate;
  const finishTime = new Date(Date.now() + remainingTime * 1000);

  console.log(`Remaining Time: ${formatTime(remainingTime)}`);
  console.log(`Finish Time: ${finishTime.toLocaleTimeString()}`);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes} min ${secs} sec`;
  }
}
