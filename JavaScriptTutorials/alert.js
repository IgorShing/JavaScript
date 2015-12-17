var userName = 'Вася';

function showMessage() {
  userName = 'Петя'; // (1) присвоение во внешнюю переменную

  var message = 'Привет, я ' + userName;
  alert( message );
}

function countElements(par){
	var count = 0;
	
	for (i=0; i < par; i++)
	{
		count += 1; 
	}
	return count;
}

   // showMessage();

    alert( countElements(5) ); 