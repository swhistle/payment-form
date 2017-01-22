var input = document.getElementById('card-number');

    input.oninput = function() {
    	n = input.value;
    	if (n.length % 5 == 4 ) {n = n + " "}
    	input.value = n;
   };