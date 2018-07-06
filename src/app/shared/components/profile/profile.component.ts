import { Component, OnInit } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";
import { DataAccessService } from "../../services/data-access.service";
import { KeyValuePair } from "../../../models/classes/KeyValuePair";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  animations: [
    trigger("profileAnimation", [
      transition("* => *", [
        query(":enter", style({ opacity: 0 }), { optional: true }),
        query(
          ":enter",
          stagger("200ms", [
            animate(
              ".4s ease-in-out",
              keyframes([
                style({
                  opacity: 0,
                  transform: "translateZ(100px)",
                  offset: 0.5
                }),
                style({
                  opacity: 0.5,
                  transform: "translateX(20px)",
                  offset: 0.7
                }),
                style({
                  opacity: 1,
                  transform: "translateX(0)",
                  offset: 1.0
                })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  linkedInUrl: string;
  facebookUrl: string;
  githubUrl: string;

  profileData: KeyValuePair[];

  constructor(private _dao: DataAccessService) {}

  ngOnInit() {
    this._dao.getProfile().subscribe(res => {
      this.linkedInUrl = res.LinkedInUrl;
      this.facebookUrl = res.FacebookUrl;
      this.githubUrl = res.GithubUrl;

      this.profileData = [
        { key: "Name", value: `${res.FirstName} ${res.LastName}` },
        { key: "Age", value: this.caluclateAge(res.DateOfBirth) },
        { key: "Occupation", value: res.Occupation },
        { key: "Employer", value: res.Employer },
        { key: "City", value: res.City }
      ];
    });
  }

  caluclateAge(dateString): string {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age.toString();
  }
}
