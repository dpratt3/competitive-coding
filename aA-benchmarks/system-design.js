class ParkingSystem {
  /**
   * @param {number} big
   * @param {number} medium
   * @param {number} small
   */
  constructor(big, med, small) {
    // Your code here
    this.slots = {
      1: big,
      2: med,
      3: small,
    };
  }

  /**
   * @param {number} carType
   * @return {boolean}
   */
  addCar(carType) {
    // Your code here
    if (this.slots[carType] > 0) {
      this.slots[carType] -= 1;
      return true;
    }
    return false;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * const obj = new ParkingSystem(big, medium, small)
 * const param_1 = obj.addCar(carType)
 */

module.exports = ParkingSystem;
