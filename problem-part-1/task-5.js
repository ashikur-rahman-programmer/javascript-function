/**
 * Task-5:
Generate a random number between 10 to 20.

low: Math.random() * (max - min + 1) + min

 Logic-ta keno emon?
Math.random() * 11: Eta amader 0 theke 10.99 porjonto number dibe.

Math.floor(...): Eta decimal gulo fele diye amader 0 theke 10 porjonto solid integer dibe.

+ 10: Ebar amra jodi 0 pai, tar sathe 10 jog hoye seta hobe 10. Ar jodi 10 pai, tar sathe 10 jog hoye hobe 20.

Eibhabe amra perfect-ly 10 to 20 range-ta pachchi.
 */

function randNum() {
  const rand = Math.floor(Math.random() * 11 + 10);

  return rand;
}
console.log(randNum());
