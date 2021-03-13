module.exports = function toReadable (number) {
    var num = [' ', 'one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var a, b = 0;
    var z, x, c = 0;
    var num2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
      z = Math.trunc(number / 100); 
      x = Math.trunc((number / 10)%10);
      c = Math.trunc(number % 10);
      b = Math.trunc(number % 100);
      if (number === 0) {
        a = 'zero';
      }
      if ( number > 0 && number < 20) {
        a = num[number];
     }
     if (number >= 20 && number < 100) {
       a = dec(x) + ' ' + dig(c);
     }
     if (number > 99 && b >= 0 && b < 20 ) {
       a = hund(z) + ' ' + num[b];
     }
     if (number > 99 && b > 19) { 
       a = hund(z) + ' ' + dec(x)+ ' ' + dig(c);
     }
     
      function dig (c) {
      if (c !== undefined){
        return c = num[c];
      }
      }
      
      function dec (x){
      if (x !== undefined){
        return x = num2[x];
      } 
    }
    
      function hund (z) {
      if (z !== undefined){
        return z = num[z] + ' ' + 'hundred';
      } 
      }
      return a.trim();
    }
