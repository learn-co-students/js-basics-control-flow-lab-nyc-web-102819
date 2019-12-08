function scuberGreetingForFeet(numba){
  // Write your code here!
  if (numba <= 400) {
    return "This one is on me!"
  } else if (numba > 2500) {
    return "No can do."
  } else if (numba > 2000) {
    return "I will gladly take your thirty bucks."
  } 
}

function ternaryCheckCity(city){
  // Write your code here!
  switch (city) {
    case 'NYC':
      return "Ok, sounds good.";
      break;
    default:
      return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much."
      break
    case 'not as generous':
      return "Thank you."
      break
    default:
      return "Bye."
  }
}