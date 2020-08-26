//disable form submission if there are invalid fields:
window.addEventListener("load",function(){
    //get the fields we need to add validation:
    let fields=document.getElementsByClassName("needs-validation");
    // WOW!!!!!!--->.filter.call(iterable,(function ()): 
    //using .filter.call(iterable: allows us to use the Array.prototype.filter method on the iterable, 
    //which is a string (making the function treat the string as an array of chars) as the first parameter that call gets is the context.
    // the filter function returns a subset of the array for each element that returns true
    let validation=Array.prototype.filter.call(fields,
        //for every field in fields :
        function(field){
            //execute function(e) when the submit event occurs:
            field.addEventListener("submit",
             function(e){
                if(field.checkValidity()===false){
                    //prevet event(submit) IF the field is NOT valid:
                    e.preventDefault();
                    //The stopPropagation() method prevents propagation of the same event from being called.
                    //which probably means here that it prevents submitting again..
                    e.stopPropagation();
                }
                // provide validation feedback BEFORE submitting(again) the form. The input fields will have 
                //a green (valid) or red (invalid) border to indicate what's missing in the form 
                field.classList.add("was-validated");
             });           
        });
});
