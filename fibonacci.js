
var index = [0,1];
for (var i = 2; i <= 10; i++) {
   index[i] = index[i-1]+index[i-2]

}
console.log( index);