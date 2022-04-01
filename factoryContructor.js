


const address = {
    Street: 2917,
    City: 'San Jose',
    Zipcode: 95148
};


function showAddress(address){
    for (key in address)
    console.log(key, address[key]);
}
// showAddress(address)


// Factory Functions to create address object

function createAddress (street, city, zip){
   return {Street: street,
    City: city,
    Zipcode: zip
}
}

const address2 = createAddress(1119, 'SFO', 95143);

function showAddress(address2){
    for (key in address2)
    console.log(key, address2[key]);
}
// showAddress(address2)

//  End of first part 

//
// Constructor function to create address objec

function AddressConstruct (street, city, zip){
    this.street = street;
    this.city = city;
    this.zip = zip;
}
const address3 = new AddressConstruct(2229,"SJC", 91155);

const address4 = new AddressConstruct(2329,"SJD", 91255);
showAddress(address3);
showAddress(address4);

