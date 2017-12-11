function Counter(selector){
  this.el      = $(selector);
  this.numbers = this.el.find('> b').toArray().reverse();
  this.value=0;
}

Counter.prototype.count = function(){
  var reversedArr, className;
  
  var to = this.el.attr('data-value');
  if(last==0){last=to;}
  //var to = this.value +1;
  //console.log(to);

  if(last<to){
      last++;
  }else if(last>to){
    last--;
  }

  this.value=last;
  reversedArr = (this.value+'').split('').reverse();
  this.numbers.forEach(function(item, j){ 
    setTimeout(function(){
      className = 'd' + reversedArr[j] || 0;
      item.className = className;
    }, j * 1);
  })  
}



/////////////// create new counter for this demo ///////////////////////

var counter = new Counter('.numCounter');
counter.count();
ReloadCount();
var last = 0;
var to = 10;

function ReloadCount(){  
  counter.count()
  var time = 1000 /(to-last);
  setTimeout(ReloadCount,time);
}

function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}