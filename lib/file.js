// mostCommon returns the most common string in the input array of strings
// use a javascript associative array for this.
exports.mostCommon = function(input) {
  var hash = {};
  input.forEach(function (item){
    if (hash[item] == null) {
      hash[item] = 1;
    }
    else {
      hash[item]++
    }
  });

  var countOfMostCommon = 0;
  var mostCommon = "";
  for (var key in hash){
    // we'll return the first most common word (ordered by input) so ['z', 'a'] returns 'z'
    if (hash[key] > countOfMostCommon) {
      countOfMostCommon = hash[key];
      mostCommon = key;
    };
  }


  return mostCommon;
}
