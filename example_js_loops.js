var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  for (player in players) {
    console.log(players[player]);
  }
  
  for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  
  players.forEach(function(element) {
    console.log(element);
  });

  var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);
  }




  var i = 0;
  while (i < players.length) {
    console.log(players[i]);
    i++;
  }
  
  var i = 2;
  do {
    console.log(players[i]);
    i++;
  } while (i < players.length)
