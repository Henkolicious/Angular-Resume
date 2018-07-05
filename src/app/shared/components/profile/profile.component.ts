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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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

  profileItems: ProfileItem[] = [
    { description: "Name", text: "Henrik Larsson" },
    { description: "Date of birth", text: "1987-07-16" },
    { description: "Occupation", text: "Software Engineer 🙊" },
    { description: "Employer", text: "Sogeti" },
    { description: "City", text: "Uppsala" }
  ];


  constructor() { }

  ngOnInit() {
  }

}

export interface ProfileItem {
  description: string;
  text: string;
}
