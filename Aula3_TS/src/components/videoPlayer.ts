import Source from "../models/Source";

class VideoPlayer {

    videoPlayer: HTMLVideoElement;
    errorMessage: Text;

    constructor(width: number, height: number, errorMessage: string) {
        this.videoPlayer = document.createElement("video");
        this.videoPlayer.setAttribute("width", width.toString());
        this.videoPlayer.setAttribute("height", height.toString());
        this.videoPlayer.setAttribute("controls", "true");

        this.errorMessage = document.createTextNode(errorMessage);         
    }

    setSources(sources: [Source]): void {
        sources.forEach((videoSource) => {
            let source: HTMLSourceElement = document.createElement("source");       
            source.type = videoSource.type;
            source.src = videoSource.src;
            this.videoPlayer.appendChild(source);
            this.videoPlayer.appendChild(this.errorMessage)
        });
    }

    render(playerId: string): void {
        const videocontainer: HTMLElement = document.getElementById("video-container") || new HTMLElement();
        const section: HTMLElement = document.createElement("section");
        section.setAttribute("id", playerId);
        section.appendChild(this.videoPlayer);
        videocontainer.appendChild(section);
    }
}

export default VideoPlayer;