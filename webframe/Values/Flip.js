function Counter(selector){
  this.el      = $(selector);
  this.numbers = this.el.find('> b').toArray().reverse();
  this.value=0;
}

Counter.prototype.count = function(){
  var reversedArr, className;
  
  var to = this.el.attr('data-value');
  //var to = this.value +1;
  //console.log(to);
/*
  if(last<to){
      last = last +(to-last/5);
      last++;
  }else if(last>to){
      last = last -(last - to/5);
    last--;
  }
*/
  if(to!=last){
    this.value=to;//last
    reversedArr = (this.value+'').split('').reverse();
    this.numbers.forEach(function(item, j){ 
      setTimeout(function(){
        className = 'd' + reversedArr[j] || 0;
        item.className = className;
      }, j * 1);
    })  
  }
  last=to;
}



/////////////// create new counter for this demo ///////////////////////

var counter = new Counter('.numCounter');
counter.count();
ReloadCount();
var last = 0;
var to = 10;

function ReloadCount(){  
  counter.count()
  setTimeout(ReloadCount,2000);
}

function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}