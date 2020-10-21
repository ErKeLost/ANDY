import {
  SET_FULL_SCREEN,
  SET_MINIPLAYER_SCREEN,
  IS_PLAYING,
  SET_SONG_DETAIL,
  SET_SONG_LYRIC,
  SET_CURRENT_INDEX,
  SET_DEL_SONG,
  SET_CURRENT_TIME,
  SET_FAVORITE_SONG

} from './mutations.type'
export default {
  // changefullscreen(state, flag) {
  //   state.isfullscreen = flag
  // }
  [SET_FULL_SCREEN](state, flag) {
    state.isfullscreen = flag
    if (flag) {
      state.isshowminiplayer = false
      state.isshowlistplayer = false
    }
  },
  [SET_MINIPLAYER_SCREEN](state, flag) {
    state.isshowminiplayer = flag
    if (flag) {
      state.isfullscreen = false
      state.isshowlistplayer = false
    }
  },
  [IS_PLAYING](state, flag) {
    state.isplaying = flag
  },
  [SET_SONG_DETAIL](state, flag) {
    state.songs = flag
  },
  [SET_SONG_LYRIC](state, lyric) {
    state.currentLyric = lyric
  },
  [SET_CURRENT_INDEX](state, index) {
    if (index < 0) {
      index = index > state.songs.length - 1
    } else if (index > state.songs.length - 1) {
      index = 0
    }
    state.currentindex = index
  },
  [SET_DEL_SONG](state, index) {
    if (index !== undefined) {
      state.songs.splice(index, 1)

    } else {
      state.songs = []
    }
    // if (state.songs.length === 0) {
    //   state.isfullscreen = false
    //   state.isshowminiplayer = false
    //   state.isshowlistplayer = false
    // }
  },
  [SET_CURRENT_TIME](state,time){
      state.curtime = time
  },
  [SET_FAVORITE_SONG](state,song){
    let result = state.favoriteList.find(function(currentValue){
      return currentValue === song
    })
    if(result === undefined){
      state.favoriteList.push(song)
    }
  }
  
}