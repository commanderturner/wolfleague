const trackInfo: { title: string }[] = [
  {
    title: "Gather",
  },
  {
    title: "Twizzlesticks",
  },
  {
    title: "Birds singing",
  },
  {
    title: "Dingo",
  },
  {
    title: "Woggle",
  },
  {
    title: "All because the lady",
  },
  {
    title: "Falling awake",
  },
  {
    title: "Sprint",
  },
  {
    title: "Juno",
  },
  {
    title: "Estoban",
  },
  {
    title: "Lets go!",
  },
  {
    title: "Life cycles",
  },
  {
    title: "Magnus",
  },
  {
    title: "My new toy",
  },
  {
    title: "Palm drive disaster",
  },
  {
    title: "Phreakout21",
  },
  {
    title: "Speedhound",
  },
  {
    title: "Time to change",
  },
  {
    title: "This wide world",
  },
  {
    title: "Goddess",
  },
  {
    title: "Ramdass",
  },
];
const getFilenameAndPath = (title: string): string => {
  const filename = title.toLowerCase().replace(/\s/g, "_").replace("!", "");
  return `./media/wolf_league-${filename}.mp3`;
};
const getPaddedNumberString = (num: number): string => {
  let numAsString = `${num}`;
  if (numAsString.length === 1) {
    numAsString = `0${numAsString}`;
  }
  return numAsString;
};
const addTracks = () => {
  const trackContainer = document.getElementById("track-container");
  const titleDiv = document.getElementById("album-title");
  if (trackContainer && titleDiv) {
    const lengthInfo = document.createElement("span");
    lengthInfo.textContent = `(${trackInfo.length} tracks)`;
    titleDiv.appendChild(lengthInfo);
    trackInfo.forEach((track, index) => {
      const filenameAndPath = getFilenameAndPath(track.title);
      const trackDiv = document.createElement("div");
      trackDiv.classList.add("track");
      const title = document.createElement("h4");
      title.textContent = `${getPaddedNumberString(index + 1)}.${track.title}`;
      //   const link = document.createElement("a");
      //   link.href = filenameAndPath;
      //   link.target = "_blank";
      //   link.textContent = "open";
      const button = document.createElement("button");
      button.textContent = "play";
      button.classList.add("play-button");
      button.type = "button";
      button.onclick = (ev) => {
        const audioSource = document.getElementById("audio-player-source");
        if (audioSource) {
          (audioSource as HTMLSourceElement).src = filenameAndPath;
        }
        const audioPlayer = document.getElementById("audio-player");
        if (audioPlayer) {
          (audioPlayer as HTMLAudioElement).load();
          (audioPlayer as HTMLAudioElement).play();
          updateNowPlaying(track.title);
        }
      };
      trackDiv.appendChild(title);
      //   trackDiv.appendChild(link);
      trackDiv.appendChild(button);
      trackContainer.appendChild(trackDiv);
    });
  }
};
const updateNowPlaying = (title: string) => {
  const nowPlaying = document.getElementById("now-playing");
  if (nowPlaying) {
    nowPlaying.textContent = title;
  }
};
addTracks();
