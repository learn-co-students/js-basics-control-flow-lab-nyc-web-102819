function scuberGreetingForFeet(ride){
  let response
  if (ride <= 400) {
    response = 'This one is on me!';
  } else if (ride >= 2500) {
    response = 'No can do.';
  } else if (ride >= 2000) {
    response = 'I will gladly take your thirty bucks.';
  }
  return response
}

function ternaryCheckCity(city){
  let cityResponse
  if (city === 'NYC') {
    cityResponse = "Ok, sounds good.";
  } else if (city != 'NYC') {
    cityResponse = "No go.";
  }
  return cityResponse
}

function switchOnCharmFromTip(tip){
  let tipResponse
  if (tip === 'generous') {
    tipResponse = "Thank you so much.";
  } else if (tip === 'not as generous') {
    tipResponse = "Thank you.";
  } else {
    tipResponse = "Bye.";
  }
  return tipResponse
}
