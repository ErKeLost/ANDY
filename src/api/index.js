import Network from './network';
export const getBanner = () => Network.get('banner?type=2');
export const getPersonalized = () => Network.get('personalized');
export const getNewAlbum = () => Network.get('album/newest');
export const getNewSong = () => Network.get('personalized/newsong');
export const getPlayList = (data) => Network.get('playlist/detail', data);
export const getAlbum = (data) => Network.get('album', data);
export const getSongDetail = (data) => Network.get('song/detail', data);
export const getSongURL = (data) => Network.get('song/url', data);
export const getSongLyric = (data) => Network.get('lyric', data);
// export const getHotArtists = () => Network.get('top/artists?offset=0&limit=5');
export const getHotArtists = () => {
    return new Promise(function (resolve, reject) {
        Network.get('top/artists?offset=0&limit=30')
            .then(function (result) {
                resolve(result.artists)
            })
            .catch(function (err) {
                reject(err)
            })
    })
}
export const getLetterArtists = (letter) => {
    return new Promise(function (resolve, reject) {
        let letterArtists = []
        Network.all([
                Network.get(`artist/list?offset=0&limit=30&cat=1001&initial=${letter}`),
                Network.get(`artist/list?offset=0&limit=30&cat=1002&initial=${letter}`),
                Network.get(`artist/list?offset=0&limit=30&cat=1003&initial=${letter}`),
                Network.get(`artist/list?offset=0&limit=30&cat=2001&initial=${letter}`),
                Network.get(`artist/list?offset=0&limit=30&cat=2002&initial=${letter}`),
                Network.get(`artist/list?offset=0&limit=30&cat=2003&initial=${letter}`),
                Network.get(`artist/list?offset=0&limit=30&cat=6001&initial=${letter}`),
                Network.get(`artist/list?offset=0&limit=30&cat=6002&initial=${letter}`),
                Network.get(`artist/list?offset=0&limit=30&cat=6003&initial=${letter}`),
            ])
            .then(function (result) {
                // console.log(result);
                result.forEach(item => {
                    letterArtists.push(...item.artists)
                })
                // console.log(letterArtists);
                resolve(letterArtists)
            })
            .catch(function (err) {
                reject(err)
            })
    })
}
export const getAllArtists = (letter) => {
    return new Promise(function (resolve, reject) {
        let keys = [
            '热门歌手'
        ]
        let list = [getHotArtists()]
        for (let i = 65; i < 91; i++) {
            let char = String.fromCharCode(i)
            // console.log(char);
            keys.push(char)
            list.push(getLetterArtists(char))
        }
        Network.all(list)
            .then(function (result) {
                // console.log(result);
                let obj = {}
                obj.keys = keys;
                obj.list = result
                resolve(obj)
                // console.log(obj);
            })
            .catch(function (err) {
                reject(err)
            })
    })

}