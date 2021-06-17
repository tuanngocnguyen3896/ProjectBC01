import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { LoadCourses } from '../../home/_actions/courses.actions';
import { getCoursesList } from '../../home/_selectors/courses.selectors';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { addCoursesAction } from '../_action/courses-admin.action';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<CoursesData>;
  coursesGroup:string;
  getAll:string;
  closeResult: string;
  addForm: FormGroup;
  courseUpdate: Observable<CoursesData[]>
  constructor(private store: Store<AppState>, private modalService: NgbModal,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    this.creatingForm()
    this.onChangeGroup(this.coursesGroup);
    this.courses$ = this.store.select(getCoursesList);
  }
  creatingForm(){
    this.addForm = new FormGroup({
      maKhoaHoc: new FormControl('', Validators.required),
      biDanh: new FormControl('test', Validators.required),
      tenKhoaHoc: new FormControl('', Validators.required),
      moTa: new FormControl('hadshbf', Validators.required),
      luotXem: new FormControl('12', Validators.required),
      danhGia: new FormControl('9', Validators.required),
      hinhAnh: new FormControl('', Validators.required),
      ngayTao: new FormControl('16/06/2021', Validators.required),
      maNhom: new FormControl('GP08', Validators.required),
      maDanhMucKhoaHoc: new FormControl('Backend', Validators.required),
      taiKhoanNguoiTao: new FormControl('amin', Validators.required),
      
    })
  }
 
  onChangeGroup(value){
    this.coursesGroup = value;
    if(this.coursesGroup === undefined){
      this.coursesGroup = 'GP01';
    }     
    this.store.dispatch(new LoadCourses(this.coursesGroup));
  }
  onGetAllCourses(value){
    this.getAll = value;
    this.getAll = this.coursesGroup;
    this.store.dispatch(new LoadCourses(this.getAll));
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onAddSubmit() {
    const payload={
      maKhoaHoc : this.addForm.value.maKhoaHoc,
      biDanh : this.addForm.value.biDanh,
      tenKhoaHoc : this.addForm.value.tenKhoaHoc,
      moTa : this.addForm.value.moTa,
      luotXem : this.addForm.value.luotXem,
      danhGia : this.addForm.value.danhGia,
      hinhAnh : this.addForm.value.hinhAnh,
      ngayTao : this.addForm.value.ngayTao,
      maNhom : this.addForm.value.maNhom,
      maDanhMucKhoaHoc : this.addForm.value.maDanhMucKhoaHoc,
      taiKhoanNguoiTao : this.addForm.value.taiKhoanNguoiTao
    }
    this.store.dispatch(addCoursesAction({payload}))
    
    this.modalService.dismissAll(); //dismiss the modal
  }

}
