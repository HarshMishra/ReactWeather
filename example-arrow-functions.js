var names = ['Harsh' , 'Shalu' , 'Shakshi' , 'Mishra'] ;

names.forEach(function(name){
  console.log('Foreach' ,name);
}) ;

names.forEach((name) => {
console.log('arrowfunc',name);
});

names.forEach ((name) => console.log(name)) ;

var returnme = (name) =>name + '!!!!' ;
console.log(returnme('Harsh'));
