var user = {
  name: 'Василий',
  
  sayHi: function() { // присвоили метод после создания объекта
     alert(this.name);
  };
};

user.sayHi(); // sayHi в контексте user

