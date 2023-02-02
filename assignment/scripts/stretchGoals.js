console.log(`Stretch Goals!`);

// creating a search function
function search(object){
    let searchResult = [];
//! Originally, (object === undefined) was set below final if statement.
//! This gave an error in which it was unable to read `artist` for 
//! undefined object. Moving it up to be the first thing to resolve allowed
//! it to pass without needing to read the keys of the object.
    if (object === undefined || JSON.stringify(object) === `{}`) {
        //! JSON.stringify(object) === `{}` turns the object put inside the () into a string.
        //! so, in this case, if the string equals `{}`, which it does, it will return collection.
        //! This passes the empty object test because it's cheeky and I
        //! couldn't think of or find other solutions. Don't be mad at me, Chris lol
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
    } else {
        return collection;
    }
}
//* testing le function
console.log(search({artist: `Jon Bellion`, year: `2017` })); // should return searchResult
console.log(search({artist: `Jon Bellion`, year: `2018` })); // should return empty array
//* testing undefined object
console.log(search()); // should return collection
//* testing empty object
console.log(search({})); //? should return collection


