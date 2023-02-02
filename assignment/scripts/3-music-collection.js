console.log('***** Music Collection *****')
// Creating variable called `collection` as an empty array
let collection = [];
// adding function `addToCollection`
function addToCollection(title, artist, yearPublished) {
    let album = {
        songTitle: title,
        songArtist: artist,
        songYearPublished: yearPublished,
    }
    collection.push(album);
    return `Added ${album.songTitle}`;
}
// testing and adding to collection
console.table(addToCollection(`"Boys Need Love"`, `David So feat. Timothy Delaghetto`, `2019`));
addToCollection(`"Am I Wrong"`, `Anderson .Paak feat. ScHoolboy Q`, `2016`);
addToCollection(`""`, ``, ``);
addToCollection(`""`, ``, ``);
addToCollection(`""`, ``, ``);
addToCollection(`""`, ``, ``);





