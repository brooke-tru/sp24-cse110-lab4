let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};


for (const prop in statistics) {
    
    if (statistics[prop]% 2 == 0 || prop.substring(0,1) == 'r') {
        console.log(`${statistics[prop]}`);
    }
    
    
}