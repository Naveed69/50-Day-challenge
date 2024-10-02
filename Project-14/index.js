function Car(color, brand, fuelType) {
    this.color = color;
    this.brand = brand;
    this.fuelType = fuelType;
    this.engineStart = function () {
      console.log(`Car ${this.color} ${this.brand} started`);
    };
  }
  
  const bmwObj = new Car("black", "BMW", "Petrol");