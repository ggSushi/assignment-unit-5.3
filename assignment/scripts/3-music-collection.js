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
console.table('Added', addToCollection(`"Boys Need Love"`, `David So feat. Timothy Delaghetto`, `2019`));
console.table('Added', addToCollection(`"Am I Wrong"`, `Anderson .Paak feat. ScHoolboy Q`, `2016`));
console.table('Added', addToCollection(`"Run Wild"`, `Jon Bellion`, `2014`));
console.table('Added', addToCollection(`"HUMBLE"`, `Kendrick Lamar`, `2017`));
console.table('Added', addToCollection(`"Fine"`, `Kyle Hume`, `2022`));
console.table('Added', addToCollection(`"Blood Red Summer"`, `Coheed and Cambria`, `2003`));

// logging the `collection`
//? Preferred to use the .table
// console.log(collection);
console.table(collection);

// creating function `showCollection`
function showCollection(array) {
    console.log(array);
}



