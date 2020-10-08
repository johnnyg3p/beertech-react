import VideoPlayer from "./components/videoPlayer";

const player1 = new VideoPlayer(420, 315, "Não foi possivel acessar seu video");
const player2 = new VideoPlayer(320, 240, "Não foi possivel acessar seu video");
const player3 = new VideoPlayer(320, 240, "Não foi possivel acessar seu video");


player1.setSources([
  { src: "https://www.youtube.com/watch?v=fqfHLsT1b0o", type: "video/mp4" }
]);

player2.setSources([
  { src: "https://www.youtube.com/watch?v=fqfHLsT1b0o", type: "video/mp4" }
]);

player3.setSources([
  { src: "https://www.youtube.com/watch?v=fqfHLsT1b0o", type: "video/mp4" }
]);

player1.render("player01");
player2.render("player02");
player3.render("player03");

