var Info = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFirstName = function(){
        return this.firstName;
    };
};

var sai = Info("sai", "Nooli"); 
console.log(sai);

var saiDetails = new Info("sai", "Nooli"); 
console.log(saiDetails);

var hemaDetails = new Info("Hema", "Nooli"); 
console.log(hemaDetails);