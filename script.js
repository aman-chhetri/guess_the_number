    let numberToGuess = 10;

    let numberField = document.querySelector("#numberField");
    let guessButton = document.querySelector("#guessButton");
    let results = document.querySelector("#results");

    guessButton.addEventListener("click", checkNumber, false);

    function setNumberToGuess() {
      numberToGuess = getRandomNumber(0, 100);
    }
    setNumberToGuess();

    function checkNumber(event) {
      let enteredNumber = numberField.value;
      numberField.value = "";

      if (enteredNumber == numberToGuess) {
        let message = `<p>----- New Game Time -----<p>
                       <p>🎉 Hurray !! Your guess of ${enteredNumber} is <b>correct</b>!</p>
                       <p>-------------------------<p>`;

        results.insertAdjacentHTML("afterbegin", message);
        
        setNumberToGuess();

        return;
      }

      if (enteredNumber < numberToGuess) {
        let message = `<p>⚓ Your guess of ${enteredNumber} is <b>too low</b>!</p>`;

        results.insertAdjacentHTML("afterbegin", message);
      }

      if (enteredNumber > numberToGuess) {
        let message = `<p>🎈 Your guess of ${enteredNumber} is <b>too high</b>!</p>`;
        
        results.insertAdjacentHTML("afterbegin", message);
      }

      if (enteredNumber == "") {
        let message = `<p>⛔ Guess a number first!</p>`;
        
        results.insertAdjacentHTML("afterbegin", message);
      }
    }

    function getRandomNumber(low, high) {
      let r = Math.floor(Math.random() * (high - low + 1)) + low;
      return r;
    }
