//function call whenever user tab on any box
function myFunc(){
	//setting DOM to all boxes or input field
	var c1,c2,c3,c4,c5,c5,c6,c7,c8,c9;
	c1 = document.getElementById('c1').value;
	c2 = document.getElementById('c2').value;
	c3 = document.getElementById('c3').value;
	c4 = document.getElementById('c4').value;
	c5 = document.getElementById('c5').value;
	c6 = document.getElementById('c6').value;
	c7 = document.getElementById('c7').value;
	c8 = document.getElementById('c8').value;
	c9 = document.getElementById('c9').value;


	var c1btn,c2btn,c3btn,c4btn,c5btn,c6btn,c7btn,c7btn,c8btn,c9btn;
	c1btn = document.getElementById('c1');
	c2btn = document.getElementById('c2');
	c3btn = document.getElementById('c3');
	c4btn = document.getElementById('c4');
	c5btn = document.getElementById('c5');
	c6btn = document.getElementById('c6');
	c7btn = document.getElementById('c7');
	c8btn = document.getElementById('c8');
	c9btn = document.getElementById('c9');

	//checking if Player X won or not and after
	// that disabled all the other fields

	if((c1=='x' || c1=='X') && (c2=='x' || c2=='X') && (c3=='x' || c3=='X'))
	{
		document.getElementById('result').innerHTML = 'Player X won';
		c1btn.style.color = 'darkviolet';
		c2btn.style.color = 'darkviolet';
		c3btn.style.color = 'darkviolet';

		c4btn.disabled = true;
		c5btn.disabled = true;
		c6btn.disabled = true;
		c7btn.disabled = true;
		c8btn.disabled = true;
		c9btn.disabled = true;
	}
	else if((c1=='x' || c1=='X') && (c4=='x' || c4=='X') && (c7=='x' || c7=='X')){
		document.getElementById('result').innerHTML = 'Player X won';
		c1btn.style.color = 'darkviolet';
		c4btn.style.color = 'darkviolet';
		c7btn.style.color = 'darkviolet';

		c2btn.disabled = true;
		c3btn.disabled = true;
		c5btn.disabled = true;
		c6btn.disabled = true;
		c8btn.disabled = true;
		c9btn.disabled = true;
	}
	else if((c7=='x' || c7=='X') && (c8=='x' || c8=='X') && (c9=='x' || c9=='X')){
		document.getElementById('result').innerHTML = 'Player X won';
		c7btn.style.color = 'darkviolet';
		c8btn.style.color = 'darkviolet';
		c9btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c2btn.disabled = true;
		c3btn.disabled = true;
		c4btn.disabled = true;
		c5btn.disabled = true;
		c6btn.disabled = true;
	}
	else if((c3=='x' || c3=='X') && (c6=='x' || c6=='X') && (c9=='x' || c9=='X')){
		document.getElementById('result').innerHTML = 'Player X won';
		c3btn.style.color = 'darkviolet';
		c6btn.style.color = 'darkviolet';
		c9btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c2btn.disabled = true;
		c4btn.disabled = true;
		c5btn.disabled = true;
		c7btn.disabled = true;
		c8btn.disabled = true;
	}
	else if((c1=='x' || c1=='X') && (c5=='x' || c5=='X') && (c9=='x' || c9=='X')){
		document.getElementById('result').innerHTML = 'Player X won';
		c1btn.style.color = 'darkviolet';
		c5btn.style.color = 'darkviolet';
		c9btn.style.color = 'darkviolet';

		c2btn.disabled = true;
		c3btn.disabled = true;
		c4btn.disabled = true;
		c6btn.disabled = true;
		c7btn.disabled = true;
		c8btn.disabled = true;
	}
	else if((c3=='x' || c3=='X') && (c5=='x' || c5=='X') && (c7=='x' || c7=='X')){
		document.getElementById('result').innerHTML = 'Player X won';
		c3btn.style.color = 'darkviolet';
		c5btn.style.color = 'darkviolet';
		c7btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c2btn.disabled = true;
		c4btn.disabled = true;
		c6btn.disabled = true;
		c8btn.disabled = true;
		c9btn.disabled = true;
	}
	else if((c2=='x' || c2=='X') && (c5=='x' || c5=='X') && (c8=='x' || c8=='X')){
		document.getElementById('result').innerHTML = 'Player X won';
		c2btn.style.color = 'darkviolet';
		c5btn.style.color = 'darkviolet';
		c8btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c3btn.disabled = true;
		c4btn.disabled = true;
		c6btn.disabled = true;
		c7btn.disabled = true;
		c9btn.disabled = true;
	}
	else if((c4=='x' || c4=='X') && (c5=='x' || c5=='X') && (c6=='x' || c6=='X')){
		document.getElementById('result').innerHTML = 'Player X won';
		c4btn.style.color = 'darkviolet';
		c5btn.style.color = 'darkviolet';
		c6btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c2btn.disabled = true;
		c3btn.disabled = true;
		c7btn.disabled = true;
		c8btn.disabled = true;
		c9btn.disabled = true;
	}


	//checking for Player O won or not and after
	// that disabled all the other fields

	else if((c1=='o' || c1=='O') && (c2=='o' || c2=='O') && (c3=='o' || c3=='O'))
	{
		document.getElementById('result').innerHTML = 'Player O won';
		c1btn.style.color = 'darkviolet';
		c2btn.style.color = 'darkviolet';
		c3btn.style.color = 'darkviolet';

		c4btn.disabled = true;
		c5btn.disabled = true;
		c6btn.disabled = true;
		c7btn.disabled = true;
		c8btn.disabled = true;
		c9btn.disabled = true;
	}
	else if((c1=='o' || c1=='O') && (c4=='o' || c4=='O') && (c7=='o' || c7=='O')){
		document.getElementById('result').innerHTML = 'Player O won';
		c1btn.style.color = 'darkviolet';
		c4btn.style.color = 'darkviolet';
		c7btn.style.color = 'darkviolet';

		c2btn.disabled = true;
		c3btn.disabled = true;
		c5btn.disabled = true;
		c6btn.disabled = true;
		c8btn.disabled = true;
		c9btn.disabled = true;
	}
	else if((c7=='o' || c7=='O') && (c8=='o' || c8=='O') && (c9=='o' || c9=='O')){
		document.getElementById('result').innerHTML = 'Player O won';
		c7btn.style.color = 'darkviolet';
		c8btn.style.color = 'darkviolet';
		c9btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c2btn.disabled = true;
		c3btn.disabled = true;
		c4btn.disabled = true;
		c5btn.disabled = true;
		c6btn.disabled = true;
	}
	else if((c3=='o' || c3=='O') && (c6=='o' || c6=='O') && (c9=='o' || c9=='O')){
		document.getElementById('result').innerHTML = 'Player O won';
		c3btn.style.color = 'darkviolet';
		c6btn.style.color = 'darkviolet';
		c9btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c2btn.disabled = true;
		c4btn.disabled = true;
		c5btn.disabled = true;
		c7btn.disabled = true;
		c8btn.disabled = true;
	}
	else if((c1=='o' || c1=='O') && (c5=='o' || c5=='O') && (c9=='o' || c9=='O')){
		document.getElementById('result').innerHTML = 'Player O won';
		c1btn.style.color = 'darkviolet';
		c5btn.style.color = 'darkviolet';
		c9btn.style.color = 'darkviolet';

		c2btn.disabled = true;
		c3btn.disabled = true;
		c4btn.disabled = true;
		c6btn.disabled = true;
		c7btn.disabled = true;
		c8btn.disabled = true;
	}
	else if((c3=='o' || c3=='O') && (c5=='o' || c5=='O') && (c7=='o' || c7=='O')){
		document.getElementById('result').innerHTML = 'Player O won';
		c3btn.style.color = 'darkviolet';
		c5btn.style.color = 'darkviolet';
		c7btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c2btn.disabled = true;
		c4btn.disabled = true;
		c6btn.disabled = true;
		c8btn.disabled = true;
		c9btn.disabled = true;
	}
	else if((c2=='o' || c2=='O') && (c5=='o' || c5=='O') && (c8=='o' || c8=='O')){
		document.getElementById('result').innerHTML = 'Player O won';
		c2btn.style.color = 'darkviolet';
		c5btn.style.color = 'darkviolet';
		c8btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c3btn.disabled = true;
		c4btn.disabled = true;
		c6btn.disabled = true;
		c7btn.disabled = true;
		c9btn.disabled = true;
	}
	else if((c4=='o' || c4=='O') && (c5=='o' || c5=='O') && (c6=='o' || c6=='O')){
		document.getElementById('result').innerHTML = 'Player O won';
		c4btn.style.color = 'darkviolet';
		c5btn.style.color = 'darkviolet';
		c6btn.style.color = 'darkviolet';

		c1btn.disabled = true;
		c2btn.disabled = true;
		c3btn.disabled = true;
		c7btn.disabled = true;
		c8btn.disabled = true;
		c9btn.disabled = true;
	}


	//Here checking about tie
	else if((c1=='X' || c1=='O') && 
			(c2=='X' || c2=='O') && 
			(c3=='X' || c3=='O') &&
			(c4=='X' || c4=='O') && 
		 	(c5=='X' || c5=='O') && 
		 	(c6=='X' || c6=='O') &&
			(c7=='X' || c7=='O') && 
		 	(c8=='X' || c8=='O') && 
		 	(c9=='X' || c9=='O'))
	{
		document.getElementById('result').innerHTML = "Match Tie";
	}
	else{
		//here displaying result
		if(flag==1)
		{
			document.getElementById('result').innerHTML = "Player X Turn";
		}
		else
		{
			document.getElementById('result').innerHTML = "Player O Turn";
		}
	}
}
//function to reset game
function myfunc_2()
{
	location.reload();
	c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = ''; 
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function box_3()
{
	if(flag == 1)
	{
		document.getElementById('c1').value = 'X';
		document.getElementById('c1').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c1').value = 'O';
		document.getElementById('c1').disabled = true;
		flag = 1;
	}
}
function box_4()
{
	if(flag == 1)
	{
		document.getElementById('c2').value = 'X';
		document.getElementById('c2').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c2').value = 'O';
		document.getElementById('c2').disabled = true;
		flag = 1;
	}
}
function box_5()
{
	if(flag == 1)
	{
		document.getElementById('c3').value = 'X';
		document.getElementById('c3').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c3').value = 'O';
		document.getElementById('c3').disabled = true;
		flag = 1;
	}
}
function box_6()
{
	if(flag == 1)
	{
		document.getElementById('c4').value = 'X';
		document.getElementById('c4').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c4').value = 'O';
		document.getElementById('c4').disabled = true;
		flag = 1;
	}
}
function box_7()
{
	if(flag == 1)
	{
		document.getElementById('c5').value = 'X';
		document.getElementById('c5').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c5').value = 'O';
		document.getElementById('c5').disabled = true;
		flag = 1;
	}
}
function box_8()
{
	if(flag == 1)
	{
		document.getElementById('c6').value = 'X';
		document.getElementById('c6').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c6').value = 'O';
		document.getElementById('c6').disabled = true;
		flag = 1;
	}
}
function box_9()
{
	if(flag == 1)
	{
		document.getElementById('c7').value = 'X';
		document.getElementById('c7').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c7').value = 'O';
		document.getElementById('c7').disabled = true;
		flag = 1;
	}
}
function box_10()
{
	if(flag == 1)
	{
		document.getElementById('c8').value = 'X';
		document.getElementById('c8').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c8').value = 'O';
		document.getElementById('c8').disabled = true;
		flag = 1;
	}
}
function box_11()
{
	if(flag == 1)
	{
		document.getElementById('c9').value = 'X';
		document.getElementById('c9').disabled = true;
		flag = 0;
	}
	else
	{
		document.getElementById('c9').value = 'O';
		document.getElementById('c9').disabled = true;
		flag = 1;
	}
}
