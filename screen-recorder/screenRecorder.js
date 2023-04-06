
const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

var recordedBlobs;

// Options for getDisplayMedia()
const displayMediaOptions = {
    video: {
        cursor: "always"
    },
    audio: true
};

// Set event listeners for the start and stop buttons
startElem.addEventListener("click", () => startRecording(), false);
stopElem.addEventListener("click", () => stopCapture(), false);

console.log = (msg) => logElem.innerHTML += `${msg}<br>`;
console.error = (msg) => logElem.innerHTML += `<span class="error">${msg}</span><br>`;
console.warn = (msg) => logElem.innerHTML += `<span class="warn">${msg}<span><br>`;
console.info = (msg) => logElem.innerHTML += `<span class="info">${msg}</span><br>`;

function startRecording() {

    navigator.mediaDevices.getDisplayMedia(displayMediaOptions).then((strem) => {

        // videoElem.srcObject = strem;
        let mediaRecorder = new MediaRecorder(strem);
        let chunks = [];

        // videoElem.onloadedmetadata = (e) => {
        //     videoElem.play();
        // }

        mediaRecorder.ondataavailable = function (ev) {
            // console.log({ ev });
            chunks.push(ev.data)
        }

        mediaRecorder.onstop = (ev) => {
            
            let blob = new Blob(chunks, { type: "video/mp4" });
            // console.log(blob, "blob");

            chunks = [];
            strem.getTracks().forEach(function (track) {
                track.stop();
            });

            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');

            document.body.appendChild(a);
            a.style = 'display: none';
            a.href = url;
            a.download = 'demo-tpss.mp4';
            a.click();

            window.URL.revokeObjectURL(url);
        }

        mediaRecorder.start();
        
    }).catch(() => console.log('Permission Denied'));

}

function stopCapture(evt) {

    try {
     
        let tracks = videoElem.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        videoElem.srcObject = null;

    } catch (error) {
        
        console.log('Error', error.message);
    }
}

function dumpOptionsInfo() {

    const videoTrack = videoElem.srcObject.getVideoTracks()[0];

    console.info("Track settings:");
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info("Track constraints:");
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
