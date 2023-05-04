export class Delievery {
  id: any;
  recipientName: any;
  recipientAddress: any;
  recipientPhone: any;
  deliveryTime: any;

  constructor(recipientName: any, recipientAddress: any, recipientPhone: any) {
    this.id = null;
    this.recipientName = recipientName;
    this.recipientAddress = recipientAddress;
    this.recipientPhone = recipientPhone;
    this.deliveryTime = new Date(); // Définit la date actuelle lors de la création d'une nouvelle livraison
  }
}
