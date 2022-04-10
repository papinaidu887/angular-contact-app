import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId: number;
  contact : Contact = new Contact();

  constructor(private contactService : ContactService,
    private router: Router, private activeRouter: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact() {

    this.contactId= this.activeRouter.snapshot.params['contactId'];
    console.log("updated contactId ::"+this.contactId);
    this.contactService.getContactById(this.contactId).subscribe(
      data =>{
        console.log("Getting Contact....");
        console.log(data);
        this.contact = data; 
      },
      error=>{
        console.log("something went wrong during getting a contact.....");
        console.log(error);
      }
    ); 
    
  }
  updateContact()
  {
    console.log("updated....");
    this.contactService.createContact(this.contact).subscribe(
      data=> {
          console.log("Updating contact data..");
          console.log(data);
          this.router.navigate(['/contacts'])
        
      },
      error=>{
        console.log("Something went wrong during updating a employee..");
        console.log(error);
        
      }
    );
  }

}
