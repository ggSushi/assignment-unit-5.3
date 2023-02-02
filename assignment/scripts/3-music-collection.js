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
    return album;
}
// testing and adding to collection
console.log('Added', addToCollection(`"Boys Need Love"`, `David So feat. Timothy Delaghetto`, `2019`));
console.log('Added', addToCollection(`"Am I Wrong"`, `Anderson .Paak feat. ScHoolboy Q`, `2016`));
console.log('Added', addToCollection(`"Run Wild"`, `Jon Bellion`, `2014`));
console.log('Added', addToCollection(`"HUMBLE"`, `Kendrick Lamar`, `2017`));
console.log('Added', addToCollection(`"Fine"`, `Kyle Hume`, `2022`));
console.log('Added', addToCollection(`"Blood Red Summer"`, `Coheed and Cambria`, `2003`));

// logging the `collection`
//? Preferred to use the .table
// console.log(collection);
console.table(collection);

// creating function `showCollection`
function showCollection(array) {
    console.log(array);
    for (let track of collection) {
        console.log(`${track.songTitle} by ${track.songArtist} published in ${track.songYearPublished}`);
    }
}
//testing `showCollection`
showCollection(collection);

// creating function `findByArtist`
function findByArtist(artist) {
    let filterArtist = [];
    for (let i=0; i < collection.length; i++){
        if (artist === collection[i].songArtist) {
            filterArtist.push(collection[i]);
            
        }
    }
    console.log(filterArtist);
}
findByArtist(`Kyle Hume`);