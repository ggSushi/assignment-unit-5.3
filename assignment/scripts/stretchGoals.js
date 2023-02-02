console.log(`Stretch Goals!`);

//creating a search function
function search(object){
    let searchResult = [];
//! Originally, (object === undefined) was set below final if statement
//! This gave an error in which 
    if (object === undefined) {
        return collection;
    } else {
        for (let track of collection) {
            if (track.songArtist === object.artist && track.songYearPublished === object.year) {
                searchResult.push(track);
            } 
        }
    }
    if (searchResult.length >= 0) {
        return searchResult;
    } 
}
// testing le function
console.log(search({artist: `Jon Bellion`, year: `2017` }));
console.log(search({artist: `Jon Bellion`, year: `2018` }));
console.log(search());
//testing empty object
console.log(search({}));
