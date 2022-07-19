import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  SERVER_URL: string = " https://ajmi-aziz.herokuapp.com/";

  constructor(private formbuilder: FormBuilder, private httpClient: HttpClient) { }

  public createcontact(contact: any) {
    console.log("contact", contact);
    return this.httpClient.post<{ message: String }>(`${this.SERVER_URL + 'api/addcontact'}`, contact)
  }

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }

  get f() { return this.contactForm.controls; }

  contact(c: any) {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.createcontact(c).subscribe(
        (data) => {

          console.log(data.message)
          alert('SUCCESS!! :-)\n\n');
          this.submitted = false;

        }
      )


    }
    this.contactForm.reset({});




  }

}
