var words = "beever";
let string = "";

for (var i = 0; i < words.length; i++) {
  for (var j = 0; j <= i; j++) {
    string += words.split("")[j];
  }
  console.log(string);
  string = "";
}

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever
