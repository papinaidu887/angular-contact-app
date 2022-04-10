import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl ="http://localhost:9090/contact-app";

  constructor(private httpClient : HttpClient) { }

  getContactList(): Observable<Contact[]>{

    return this.httpClient.get<Contact[]>(`${this.baseUrl}/api/contacts`);
  }

  createContact(contact: Contact): Observable<any>{
  
    return this.httpClient.post(`${this.baseUrl}/api/contact`,contact,{responseType:"text"});

  }

  removeContact(contactId:number):Observable<any>{

    return this.httpClient.delete(`${this.baseUrl}/api/${contactId}`,{responseType:"text"})
  }

  getContactById(contactId:number):Observable<Contact>{
    
    return this.httpClient.get<Contact>(`${this.baseUrl}/api/contact/${contactId}`)
  }


}
