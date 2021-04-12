// Object destructuring

const person = {
    name: 'Nghia',
    age: 50,
    location: {
        city: 'Ottawa',
        temp: -10
    }
};

const { name: firstname = 'Anonymous', age } = person;
console.log(`${firstname} is ${age}`);
const { temp: temperature, city } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguine'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

////////////////////////////////////////////////////////////////

// Array destructuring

let address = ['42 Amberly Place', 'Ottawa', 'ON', 'K1J8A1'];
let [street, other_city, state, zip] = address;
console.log(`You are in ${other_city} ${state}`);

address = [];
[, , state = 'Unknown'] = address;
console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , price, ] = item;
console.log(`A medium ${coffee} costs ${price}`);