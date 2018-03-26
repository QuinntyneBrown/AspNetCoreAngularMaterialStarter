import { Component } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Component({
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  selector: "app-dashboard"
})
export class DashboardComponent { 

  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
