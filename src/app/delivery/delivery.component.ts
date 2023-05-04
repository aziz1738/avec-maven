import { Component, OnInit } from '@angular/core';
import { Delievery } from '../delivery';
import { DeliveryService } from 'src/app/service/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  
  deliveries: Delievery[] = [];
  delivery: Delievery = new Delievery('', '', '');
  deliveryUpdate: Delievery= new Delievery('', '', '');
  todayDate: string;

  constructor(private deliveryService: DeliveryService) { this.deliveries = [];
    this.todayDate = new Date().toISOString().slice(0, 10);}

  ngOnInit(): void {
    this.getDeliveryList();
  }

  getDeliveryList() {
    this.deliveryService.getDeliveryList().subscribe(data => {
      this.deliveries = data;
    });
  }

  addDelivery() {
    if (this.delivery.recipientName && this.delivery.recipientAddress && this.delivery.recipientPhone) {
      if (confirm("Are you sure you want to add this delivery?")) {
        this.delivery.deliveryTime = new Date(); // set deliveryTime to current date and time
        this.deliveryService.addDelivery(this.delivery).subscribe(data => {
          this.deliveries.push(data);
          this.delivery = new Delievery('', '', ''); // reset delivery to empty values
        });
      }
    } else {
      alert("Please provide all required information.");
    }
  }
  
  

  deleteDelivery(delivery: Delievery) {
    if (confirm("Are you sure you want to delete this delivery?")) {
      this.deliveryService.deleteDelivery(delivery.id).subscribe(() => {
        this.deliveries = this.deliveries.filter(d => d !== delivery);
      });
    }
  }


  recupererDelivery(delivery: Delievery){
    this.deliveryUpdate= delivery;
  }
  updateDelivery() {
    this.deliveryService.updateDelivery(this.deliveryUpdate).subscribe();
  }

}
