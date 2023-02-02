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
console.log('Added', addToCollection(`"Boys Need Love"`, `David So`, `2019`));
console.log('Added', addToCollection(`"Am I Wrong"`, `Anderson .Paak`, `2016`));
console.log('Added', addToCollection(`"Run Wild"`, `Jon Bellion`, `2014`));
console.log('Added', addToCollection(`"HUMBLE"`, `Kendrick Lamar`, `2017`));
console.log('Added', addToCollection(`"Fine"`, `Kyle Hume`, `2022`));
console.log('Added', addToCollection(`"Blood Red Summer"`, `Coheed and Cambria`, `2003`));
//adding extra for testing
console.log('Added', addToCollection(`"sun and moon"`, `Anees`, `2022`));
console.log('Added', addToCollection(`"All Time Low"`, `Jon Bellion`, `2017`));

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
  return filterArtist;
}

// testing findByArtist function
console.log(findByArtist(`Kendrick Lamar`)); // should display the song "HUMBLE" info
console.log(findByArtist(`Jon Bellion`)); // should display 2 tracks by Jon Bellion
console.log(findByArtist(`PSY`)); // should display empty array