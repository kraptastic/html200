/* declare a sentence with >=5 words and (1) period and sing this tune */
const theSentence = 'you put the lime in the coconut and drink em both together.'
console.log(theSentence);
/* use a method to create an array from the sentence */
const theArray = Array.from(theSentence);
/* specify the indexed characters to be sliced*/
const arraySlice = theArray.slice(8, 11);
/* confirm by logging that you have the chars you wanted*/
console.log(arraySlice);
/*join the sliced characters*/
const theWord = arraySlice.join('');
/* console.log() the third word of the sentence */
console.log(theWord);