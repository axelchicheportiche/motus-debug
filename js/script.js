
function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
    word = word.toUpperCase()
    base = base.toUpperCase()

	if (word === base) {
		return true
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];

  	let arrayBase = base.split('');
    let arrayWord = word.split('');


		for (let i = 0; i < arrayBase.length+1; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else {
        if(arrayBase.includes(arrayWord[i])=== true){
        missplaced.push(arrayWord[i])
        wellPlaced.push('_');
        }
        else {
            wellPlaced.push('_');
            notInWord.push(arrayWord[i])

        }

        }
      }
      if (wellPlaced.length < arrayBase.length){
        console.log(wellPlaced.length,arrayBase.length)
        wellPlaced.push('_')
    }

    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join('. ')
  document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join('. ')
  document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join('. ')
  if (result.wellPlaced.includes('_') === false){
    document.getElementById("win").innerText = 'Vous avez gagné'
  }


//   if (result.wellPlaced.length === base.length) {
//
//   }
}