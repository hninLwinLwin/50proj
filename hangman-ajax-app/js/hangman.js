class Hangman {
  constructor( word, remainngGuess) {
    this.word = word.toLowerCase().split('')
    this.remainingGuess = remainngGuess
    this.guessedLetters = []
    this.status = 'playing'
  }

  get puzzle() {
    let puzzle = ''
    this.word.forEach((letter) => {
      if(this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle+=letter
      }else {
        puzzle += '*'
      }
    })
    return puzzle
  }

  makeGuess (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(this.status !=='playing'){
      return
    }
    if (isUnique) {
      this.guessedLetters.push(guess)
    }
    if(isUnique && isBadGuess){
      this.remainingGuess--
    }
    this.calculatesStatus()
  }
  get statusMessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuess}`
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}" `
    } else {
      return 'Great work! You guessed the word!'
    }
  }
  calculatesStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    if (this.remainingGuess === 0){
      this.status = 'failed'
    }else if (finished) {
      this.status = 'finished'
    }else {
      this.status = 'playing'
    }
  }
}
