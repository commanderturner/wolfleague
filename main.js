var trackInfo = [
    {
        title: "Gather"
    },
    {
        title: "Twizzlesticks"
    },
    {
        title: "Birds singing"
    },
    {
        title: "Dingo"
    },
    {
        title: "Woggle"
    },
    {
        title: "All because the lady"
    },
    {
        title: "Falling awake"
    },
    {
        title: "Sprint"
    },
    {
        title: "Juno"
    },
    {
        title: "Estoban"
    },
    {
        title: "Lets go!"
    },
    {
        title: "Life cycles"
    },
    {
        title: "Magnus"
    },
    {
        title: "My new toy"
    },
    {
        title: "Palm drive disaster"
    },
    {
        title: "Phreakout21"
    },
    {
        title: "Speedhound"
    },
    {
        title: "Time to change"
    },
    {
        title: "This wide world"
    },
    {
        title: "Goddess"
    },
    {
        title: "Ramdass"
    },
];
var getFilenameAndPath = function (title) {
    var filename = title.toLowerCase().replace(/\s/g, "_").replace("!", "");
    return "./media/wolf_league-".concat(filename, ".mp3");
};
var getPaddedNumberString = function (num) {
    var numAsString = "".concat(num);
    if (numAsString.length === 1) {
        numAsString = "0".concat(numAsString);
    }
    return numAsString;
};
var addTracks = function () {
    var trackContainer = document.getElementById("track-container");
    var titleDiv = document.getElementById("album-title");
    if (trackContainer && titleDiv) {
        var lengthInfo = document.createElement("span");
        lengthInfo.textContent = "(".concat(trackInfo.length, " tracks)");
        titleDiv.appendChild(lengthInfo);
        trackInfo.forEach(function (track, index) {
            var filenameAndPath = getFilenameAndPath(track.title);
            var trackDiv = document.createElement("div");
            trackDiv.classList.add("track");
            var title = document.createElement("h4");
            title.textContent = "".concat(getPaddedNumberString(index + 1), ".").concat(track.title);
            //   const link = document.createElement("a");
            //   link.href = filenameAndPath;
            //   link.target = "_blank";
            //   link.textContent = "open";
            var button = document.createElement("button");
            button.textContent = "play";
            button.classList.add("play-button");
            button.type = "button";
            button.onclick = function (ev) {
                var audioSource = document.getElementById("audio-player-source");
                if (audioSource) {
                    audioSource.src = filenameAndPath;
                }
                var audioPlayer = document.getElementById("audio-player");
                if (audioPlayer) {
                    audioPlayer.load();
                    audioPlayer.play();
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
var updateNowPlaying = function (title) {
    var nowPlaying = document.getElementById("now-playing");
    if (nowPlaying) {
        nowPlaying.textContent = title;
    }
};
addTracks();
