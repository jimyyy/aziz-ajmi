import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opengit(){
    window.open("https://github.com/jimyyy/E-commerce-app-web-backend");
  }

  opengit1(){
    window.open("https://github.com/jimyyy/facturation_project");
  }

  opengit2(){
    window.open("https://github.com/jimyyy/school-primary");
  }

  opengit3(){
    window.open("https://github.com/jimyyy/project-flutter");
  }

  opengit4(){
    window.open("https://github.com/jimyyy/travel-agency");

  }
  opengit5(){
    window.open("https://github.com/jimyyy/Restaurant_managment")
  }



}
