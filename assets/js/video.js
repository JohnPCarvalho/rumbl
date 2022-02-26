import Player from "./Player"

let Video = {
  
  init(sockect, element){ if(!element) { return } 
    let playerId = element.getAttribute("data-player-id")
    let videoId = element.getAttribute("data-id")
    socket.connect()
    Player.init(element.id, playerId, () => {
      this.onReady(videoId, sockect)
    })
  },
  
  onReady(videoId, socket){
    let msgContainer = document.getElementById("msg-container")
    let msgInput     = document.getElementById("msg-input")
    let postButton   = document.getElementById("msg-submit")
    let vidChannel   = socket.channel("videos: " + videoId)
    // TODO join the vidChannel
  }
}
export default Video
