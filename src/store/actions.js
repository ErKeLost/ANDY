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
import {
  getSongDetail,
  getSongLyric,
  getSongURL
} from '../api/index'
export default {
  setfullscreen({
    commit
  }, flag) {
    commit('SET_FULL_SCREEN', flag)
  },
  setminiplayer({
    commit
  }, flag) {
    commit('SET_MINIPLAYER_SCREEN', flag)
  },
  setisplaying({
    commit
  }, flag) {
    commit("IS_PLAYING", flag)
  },
  // async setsongdetail({
  //   commit
  // }, ids) {
  //   let result = await setsongdetail({ids:ids.join(',')})
  //   console.log(result);
  //   commit("SET_SONG_DETAIL", list)
  // },
  async setsongdetail({
    commit
  }, ids) {
    let result = await getSongDetail({
      ids: ids.join(',')
    })
    let urls = await getSongURL({
      id: ids.join(",")
    })
    // console.log(result);
    // console.log(urls);
    let list = []
    result.songs.forEach(function (value, i) {
      let obj = {}
      obj.url = urls.data[i].url

      obj.name = value.name
      let singer = ''
      value['ar'].forEach(function (item, index) {
        if (index == 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      obj.singer = singer
      obj.picUrl = value['al'].picUrl
      list.push(obj)
    });
    commit(SET_SONG_DETAIL, list)
  },
  async getSongLyric ({ commit }, id) {
    let result = await getSongLyric({ id : id })
    console.log(result);
    // console.log(result.lrc.lyric)
    let obj = parselyric(result.lrc.lyric)
    commit(SET_SONG_LYRIC, obj)
  },
  setcurrentindex({
    commit
  }, index) {
    commit(SET_CURRENT_INDEX, index)
  },
  setdelsong({
    commit
  }, flag) {
    commit('SET_DEL_SONG', flag)
  },
  setcurtime({
    commit
  },time){
    commit('SET_CURRENT_TIME',time)
  },
  setFavoriteSong({
    commit
  },song){
      commit(SET_FAVORITE_SONG,song)
  }

}