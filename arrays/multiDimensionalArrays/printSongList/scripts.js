var playList = [
  ["Smooth Criminal", "Jacko"],
  ["Lucky", "Radiohead"],
  ["This Time", "The Verve"]
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + " by " + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);





















