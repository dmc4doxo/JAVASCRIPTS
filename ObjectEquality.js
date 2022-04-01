
//       ****Factory Function
// function address (street, city, zip){
//    return{
//    Street: street,
//    City: city,
//    Zip: zip,
//   }
//    };

//    const address1 = address(2917, 'San Jose', 95148);
//    console.log(address1);
    

    // ***** Constructor Method

    function Address (street, city, zip){
        this.Street = street;
        this.City = city;
        this.Zip = zip;
    };
    const address1 = new Address(1119,'SFO',9111);
    const address2 = new Address(1119,'SFO',9111);
    let address3 = address1;
    
    console.log(address1);
    console.log(address2);
    
    // Check to see if equal.  Different memory location with same value.
    function areEqual(address1, address2){
       return(address1.Street === address2.Street && address1.City === address2.City && address1.Zip === address2.Zip);
    }
    
    // Check to see if same.  Same reference memory location... they both point to the same value held in the memory location.
    function areSame(address1, address2){
        return (address1 === address2);
    }
    console.log (areEqual(address1, address2));
    console.log (areSame(address1, address2));
    console.log (areEqual(address1, address3));
    