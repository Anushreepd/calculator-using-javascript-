var buttons = document.getElementsByClassName("btn");
//buttons
function button(a)
{	
	document.getElementById("ans").value+=a;
}

//check 
function che(){
		var res = [];
		var answer;
		
		if(document.getElementById("ans").value.includes("+")){
		res = document.getElementById("ans").value.split('+');
		return parseInt(res[0]) + parseInt(res[1]);
		}
		
		else if(document.getElementById("ans").value.includes("-")){
		res = document.getElementById("ans").value.split('-');
		return parseInt(res[0]) - parseInt(res[1]);
		}
		
		else if(document.getElementById("ans").value.includes("/")){
		res = document.getElementById("ans").value.split('/');
		return parseInt(res[0]) / parseInt(res[1]);
		}
		
		else{
		res = document.getElementById("ans").value.split('*');
		return parseInt(res[0]) * parseInt(res[1]);
		}
}

//backspace
function backspace()
{
    var input_var=document.getElementById('ans');
    var x = input_var.value;
    if(x.length > 0)
    {
        x=x.substring(0, x.length-1);
        input_var.value = x ;
    }
}

//equal
function button1(){	
var a = che()
document.getElementById('ans').value = a; 
}

//clear screen
function clearscreen() {
    document.getElementById('ans').value = "";
}

//brackets
var i = 0;
function brackets()
{
    var input_var = document.getElementById('ans');
    if(i==0)
    {
        input_var.value +='(';
        i = 1;

    }
    else if(i==1)
    {
        input_var.value +=')';
        i = 0;
    }
}

//operands(+/-)
function getOperand(operand){
    input_var.value += '-' + input_var.value;
}

//keyboard input
document.addEventListener("keyup", function(event) {
	if (event.keyCode != 13) {
		for (var i = 0; i < buttons.length; i++) {
			var id = buttons[i].getAttribute("value");

			if (id == event.key) {
				buttons[i].click();
			}
		}
	}
	else {
		document.getElementById("equal").click();
	}
}, false);
