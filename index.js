  // Write your code here!
// function scuberGreetingForFeet(number){
//   let result; 
//   if (scuberGreetingForFeet <= 400){
//     result = 'This one is on me!';
//   } 
//   else {
//     result = 'I will gladly take your thirty bucks.'
//   }
  function scuberGreetingForFeet(amount) {
    if (amount < 400) {
      return 'This one is on me!';
    } else if (amount > 2500){
      return 'No can do.'
    }
    else {
      return 'I will gladly take your thirty bucks.'
    }
  }


  // Write your code here!


function ternaryCheckCity(place){
  return place === 'NYC'? 'Ok, sounds good.': 'No go.'  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}