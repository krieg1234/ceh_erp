export class Task {
  constructor(blueprint, order, basisOfOrder, type, master) {
    this.blueprint = blueprint;
    this.order = order;
    this.basisOfOrder = basisOfOrder;
    this.type = type;
    this.launchDate = new Date().toLocaleDateString;
    this.completionDate = '';
    this.master = master;
  }
}
