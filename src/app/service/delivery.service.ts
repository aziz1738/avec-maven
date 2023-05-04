import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Delievery } from '../delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private baseUrl = 'http://localhost:8087/api/Livraison';

  constructor(private http: HttpClient) { }

  addDelivery(delivery: Delievery): Observable<Delievery> {
    return this.http.post<Delievery>(`${this.baseUrl}/add-Livraison`, delivery);
  }

  getDeliveryList(): Observable<Delievery[]> {
    return this.http.get<Delievery[]>(`${this.baseUrl}`);
  }

  deleteDelivery(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateDelivery( delivery: Delievery): Observable<Delievery> {
    return this.http.put<Delievery>(`${this.baseUrl}`, delivery);
}

  findByRecipientName(recipientName: string): Observable<Delievery[]> {
    return this.http.get<Delievery[]>(`${this.baseUrl}/deliveries/${recipientName}`);
  }

}
