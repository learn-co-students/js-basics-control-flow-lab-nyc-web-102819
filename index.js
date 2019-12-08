function scuberGreetingForFeet(ride){
  let msg
  if (ride <= 400) {
    msg = 'This one is on me!';
  }
  else if (ride > 2000 && ride < 2500) {
    msg = 'I will gladly take your thirty bucks.'
  }
  else if (ride >= 2500) {
    msg = 'No can do.'
  }
  return msg
}

function ternaryCheckCity(city){
  let msg
  city === 'NYC' ? msg = 'Ok, sounds good.' : msg = 'No go.'
  return msg
}

function switchOnCharmFromTip(tip){
  let msg
  switch (tip) {
    case 'generous':
      msg = "Thank you so much."
      break;

    case 'not as generous':
      msg = "Thank you."
      break;
  
    default:
      msg = "Bye.";
  }

  return msg
}