export class Ingredient {
  //   Using TS shortcut we can add an accessor in front of property name in
  //   the constructor. This will define properties and auto assign the values
  //    received in the constructor to the properties.

  constructor(public name: string, public amount: number) {}
}
