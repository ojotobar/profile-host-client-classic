import { Component, inject, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CustomClassTypeEnum } from '../../entities/enums/custom-alert-type-enum';
import { ProjectResponseModel } from '../../entities/models/project-models';
import { CustomAlertComponent } from '../common/custom-alert/custom-alert.component';
import { CustomSpinnerComponent } from '../common/custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-projects',
  imports: [
    CustomAlertComponent,
    CustomSpinnerComponent
  ],
  templateUrl: './projects.component.html',
  styles: ``
})
export class ProjectsComponent implements OnInit {
  loading: boolean = false;
  hasError: boolean = false;
  appSvc = inject(AppService);
  CustomClassTypeEnum = CustomClassTypeEnum;
  projects: ProjectResponseModel[] = [];

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    this.loading = true;
    this.appSvc.getProjectsObservable()
      .valueChanges
      .subscribe({
        next: (data: any) => {
          this.projects = <ProjectResponseModel[]>(data.data.projects);
          this.loading = false;
        },
        error: (e: Error) => {
          this.loading = false;
          this.hasError = true;
        }
    })
  }
}
