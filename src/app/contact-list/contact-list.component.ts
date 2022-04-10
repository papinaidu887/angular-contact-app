import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact }  from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

    contacts : Contact[];

    constructor(private contactService : ContactService, private router:Router) { };

    ngOnInit(): void {
      this.getContactList();
    }

    getContactList(){
      this.contactService.getContactList().subscribe(
        data => 
        {
          console.log(data);
          this.contacts = data;
        }
      );
    }

    // delete a contact
    deleteContact(contactId:number){
      this.contactService.removeContact(contactId).subscribe(
        data=>{
          console.log("Successfully deleted....");
          console.log(data);
          this.getContactList();
        
        
        },
        error=>{
          console.log("Failed..........");
          console.log(error);
        }
      );

    }

    // @ update contact based on contactId

    updateContact(contactId: number){
      console.log("updated:: "+contactId);
      this.router.navigate(['/update-contact', contactId]);
  
    }

}

