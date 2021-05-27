import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { CoursesService } from '../../_services/courses.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  maKhoaHoc:  Params;
  course: CoursesData = new CoursesData(); 
  constructor(
    private route : ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    // this.getCoursesDetail();

    this.route.params.pipe().subscribe((value) => {
      this.maKhoaHoc = value;
    })
    console.log(this.maKhoaHoc.id);
  }

  // getCoursesDetail = async () => {
  //   try{
  //   //Lấy tham số từ url 
  //     const params:any = await this.route.params.pipe();
  //     console.log('params: ',params.value.id)
  //   //Gọi service
  //     const result:any = await this.coursesService.getCoursesDetail(params.value.id).pipe().toPromise();
  //     console.log(result)
  //     this.course = result;
  //   }catch(errors) {
  //     console.log('errors',errors.error)
  //   } 

  // }
 
}
