function poton(variable){
	
 
 input.value= input.value + variable;

 

}
function ccc(){
     input.value='';
}
function getImage(){
try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }

}

