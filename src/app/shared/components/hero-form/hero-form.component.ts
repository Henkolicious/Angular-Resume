import { Component, OnInit } from "@angular/core";
import { Hero } from "../../../models/classes/Hero";
import { DataAccessService } from "../../services/data-access.service";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.scss"]
})
export class HeroFormComponent implements OnInit {
  constructor(private _dao: DataAccessService) {}

  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    console.log(this.model);    
    return JSON.stringify(this.model);
  } 

  newHero() {
    this.model = new Hero(42, '', '');
  }

  postForm(){
    
  }

  ngOnInit() {}
}
