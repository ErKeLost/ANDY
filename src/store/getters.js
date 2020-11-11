export default {
  isfullscreen(state) {
    return state.isfullscreen
  },
  isshowminiplayer(state) {
    return state.isshowminiplayer
  },
  isplaying(state) {
    return state.isplaying
  },
  isshowlistplayer(state) {
    return state.isshowlistplayer
  },
  songs(state) {
    return state.songs
  },
  currentsong(state) {
    let obj = {
      name: "",
      singer: "",
      picUrl: null
    }
    if (state.songs.length !== 0) {
     obj = state.songs[state.currentindex]
    }
    return obj
  },
  currentLyric(state){
    return state.currentLyric
  },
  currentindex(state){
    return state.currentindex
  },
  curtime(state){
    return state.curtime
  },
  favoriteList(state){
    return state.favoriteList
  }
}