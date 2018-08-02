import { Component, OnInit } from "@angular/core";
import { ContactFormData } from "../../../models/classes/contact-form-data";
import { DataAccessService } from "../../services/data-access.service";
import { IUserAgent } from "../../../models/interfaces/IUserAgent";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {
  private sectionHeader: string = "Post your message here.";
  private model: ContactFormData;
  private submitted: boolean = false;
  private clientPublicInformation: IUserAgent;
  private recaptchaScriptUrl: string = "https://www.google.com/recaptcha/api.js";
  private verificationResponse: string;

  constructor(private _dao: DataAccessService) {}

  ngOnInit() {
    this.model = new ContactFormData("");
    window['verifyCallback'] = this.verifyCallback.bind(this);  // register the callback function
    this.initRecaptia();
    // this._dao.getClientInformation().subscribe(res => this.clientPublicInformation = res);      
  }

  onSubmit() {
    this.submitted = true;
    this._dao.validateRecaptcha(this.verificationResponse).subscribe(res => console.log(res));    
  } 

  initRecaptia() {
    this.setupRecaptchaScript();
  }

  setupRecaptchaScript() {
    let form = document.getElementById('contact-form') as HTMLDivElement;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = this.recaptchaScriptUrl;
    script.async = true;
    script.defer = true;
    form.appendChild(script);  
  }

  verifyCallback(response){
    this.verificationResponse = response;
    console.log(response);    
  }
 
}