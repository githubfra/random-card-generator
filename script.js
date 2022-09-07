window.onload = () => {
      document.querySelector('.card').classList.add(generateRandomSuit());
      document.querySelector('.number').innerHTML = generateRandomNumber();
};

  let generateRandomNumber = () => {
    let numbers = [ "A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
  };
  let generateRandomSuit = () => {
    let suit = ["diams", "spades", "clubs", "hearts"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
  };