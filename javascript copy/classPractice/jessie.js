let myArtists = [];

for(i = 0; i < artistList.length; i++) {
    let artistInfo = {
        name: artistList[i].name,
        genre: artistList[i].genres,
    };
    myArtists.push(artistInfo);
    // console.log(artistInfo);
    for(j = 0; j < 5; j++) {
        let artistTop3 = {
            topTrackName: artistTrack[i].tracks[j].name,
            topTrackAlbum: artistTrack[i].tracks[j].album.name,
            topTrackPopularty: artistTrack[i].tracks[j].popularity,
            
        };
        myArtists.push(artistTop3);
        // console.log(artistTop3);
    }
}
console.log(myArtists);