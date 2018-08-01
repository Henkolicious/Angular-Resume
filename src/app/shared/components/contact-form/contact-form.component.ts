import { Component, OnInit } from "@angular/core";
import { ContactFormData } from "../../../models/classes/contact-form-data";
import { DataAccessService } from "../../services/data-access.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {
  private sectionHeader: string = "Post your message here.";
  private model: ContactFormData;
  private submitted: boolean = false;

  constructor(private _dao: DataAccessService) {}

  ngOnInit() {
    this.model = new ContactFormData("");
    window['verifyCallback'] = this.verifyCallback.bind(this);
    this.initRecaptia();
  }

  onSubmit() {
    this.submitted = true;
  } 

  initRecaptia() {
    this.setupRecaptchaScript();
  }

  setupRecaptchaScript() {
    let form = document.getElementById('contact-form') as HTMLDivElement;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    form.appendChild(script);  
  }

  verifyCallback(response){
    console.log(response);    
  }
 
}