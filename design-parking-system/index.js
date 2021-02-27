/**
 * @see https://leetcode.com/problems/design-parking-system/
 */

 // 
class ParkingSystem {
  constructor(big, medium, small) {
      this.carSpaces = [big, medium, small]
  }
  
  addCar(carType) {
      const freeSpace = this.carSpaces[carType - 1] > 0
      freeSpace && this.carSpaces[carType - 1] --
      return freeSpace
  }        
}

const parking = new ParkingSystem(6,1,0)

console.log(parking.addCar(3))