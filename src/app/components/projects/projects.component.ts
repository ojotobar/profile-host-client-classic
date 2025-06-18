import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styles: ``
})
export class ProjectsComponent {
  projectsData = [
    {
        Name: "Portfolio Website",
        Link: "https://myportfolio.com",
        Description: "A sleek, responsive portfolio website showcasing my skills and projects.",
        Technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        Name: "Task Manager App",
        Link: "https://taskmanager.com",
        Description: "A web application for managing daily tasks efficiently.",
        Technologies: ["React.js", "Node.js", "MongoDB"]
    },
    {
        Name: "E-commerce Platform",
        Link: "https://ecommerce.com",
        Description: "A full-featured e-commerce platform for online shopping.",
        Technologies: ["Angular", "TypeScript", "Firebase"]
    }
  ];
}
