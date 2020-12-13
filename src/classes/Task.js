import { uniqueId } from 'lodash';

export class Task {
  constructor(
    blueprint,
    order,
    basisOfOrder,
    type,
    master,
    launchDate = new Date().toLocaleDateString(),
    completionDate = ''
  ) {
    this.id = uniqueId();
    this.blueprint = blueprint;
    this.order = order;
    this.basisOfOrder = basisOfOrder;
    this.type = type;
    this.launchDate = launchDate;
    this.completionDate = completionDate;
    this.master = master;
  }

  getId() {
    return this.id;
  }

  getData() {
    return {
      id: this.id,
      blueprint: this.blueprint,
      order: this.order,
      basisOfOrder: this.basisOfOrder,
      type: this.type,
      launchDate: this.launchDate,
      completionDate: this.completionDate,
      master: this.master,
    };
  }
  setData({ blueprint, order, basisOfOrder, type, master }) {
    this.blueprint = blueprint;
    this.order = order;
    this.basisOfOrder = basisOfOrder;
    this.type = type;
    this.master = master;
  }
}
