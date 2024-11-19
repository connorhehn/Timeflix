const video = document.querySelector('video');
if (video) {
  const playbackRate = video.playbackRate;
  const remainingTime = (video.duration - video.currentTime) / playbackRate;

  console.log(`Remaining Time: ${formatTime(remainingTime)}`);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes} min ${secs} sec`;
  }
}
