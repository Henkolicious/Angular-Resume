import {
  Component,
  OnInit,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { ContactFormData } from "../../../models/classes/contact-form-data";
import { DataAccessService } from "../../services/data-access.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ContactFormComponent implements OnInit {
  public sectionHeader: string = "Post your message here.";  
  public submitted: boolean = false;  
  public model: ContactFormData;  
  public recaptchaScriptUrl: string =
    "https://www.google.com/recaptcha/api.js";
  public isVerifiedFromGoogle: boolean;  

  constructor(private _dao: DataAccessService, private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.markForCheck();
    }, 1000);
  }

  ngOnInit() {
    this.model = new ContactFormData(null);
    window["verifyCallback"] = this.verifyCallback.bind(this); // register the callback function
    this.initRecaptia();
    this.isVerifiedFromGoogle = false;
  }

  onSubmit() {
    this.submitted = true;    
    this._dao.postContactData(this.model.textArea);
  }

  initRecaptia() {
    let form = document.getElementById("contact-form") as HTMLDivElement;
    let script = document.createElement("script");
    script.innerHTML = "";
    script.src = this.recaptchaScriptUrl;
    script.async = true;
    script.defer = true;
    form.appendChild(script);
  }

  verifyCallback(response) {
    this._dao.validateRecaptcha(response).subscribe(res => {
      if (res.success) {
        this.isVerifiedFromGoogle = true;
      }
    });
  }
}
