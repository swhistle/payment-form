var input = document.getElementById('card-number');

//разделение числа на группы по 4цифры

    input.oninput = function() {
    	var n = input.value;
    	if (n.length % 5 == 4 ) {n = n + " "}
    	input.value = n; 

 //запрет ввода символа, не являющегося целым числом или пробелом 	
	    var str = input.value;    
	    var length1 = str.length;

	    if(str.search(/[^0-9\s]/i) != -1) {
	    length1 = length1 - 1;
	    str = str.substr(0, length1);
	    input.value = str;
	    }
}