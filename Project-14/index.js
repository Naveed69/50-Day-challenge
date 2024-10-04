function Car(color, brand, fuelType) {
    this.color = color;
    this.brand = brand;
    this.fuelType = fuelType;
    this.engineStart = function () {
      console.log(`Car ${this.color} ${this.brand} started`);
    };
    return engineStart;
  }
  
  const bmwObj =Car("black", "BMW", "Petrol");
  console.log(bmwObj);