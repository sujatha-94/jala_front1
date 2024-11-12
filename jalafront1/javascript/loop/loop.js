// Example of using for/in loop
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2023
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
