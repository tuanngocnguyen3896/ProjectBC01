import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { Logout } from '../../auth/_actions/auth.actions';
import { editCourses } from '../_action/courses-admin.action';
import { getCoursesById } from '../_selectors/courses-admin.selector';
// import { getCoursesById } from '../_selectors/courses-admin.selector';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit, OnDestroy {
editForm: FormGroup
courses:CoursesData;
coursesSubscription: Subscription;

  constructor(private route:ActivatedRoute ,private store:Store<AppState>,
    private modalService: NgbModal,
    private httpClient: HttpClient,) { }

  ngOnInit(): void {
    this.handleEditForm()
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('id'));
      
    //  const id = params.get('id');
    //  this.coursesSubscription=this.store.select(getCoursesById,{id}).subscribe(data=>{
    //    this.courses= data
    //    console.log(this.courses);
    //  })
    })
  }
  handleEditForm(){
    this.editForm = new FormGroup({
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
  onEditSubmit(){
    const payload={
      maKhoaHoc : this.editForm.value.maKhoaHoc,
      biDanh : this.editForm.value.biDanh,
      tenKhoaHoc : this.editForm.value.tenKhoaHoc,
      moTa : this.editForm.value.moTa,
      luotXem : this.editForm.value.luotXem,
      danhGia : this.editForm.value.danhGia,
      hinhAnh : this.editForm.value.hinhAnh,
      ngayTao : this.editForm.value.ngayTao,
      maNhom : this.editForm.value.maNhom,
      maDanhMucKhoaHoc : this.editForm.value.maDanhMucKhoaHoc,
      taiKhoanNguoiTao : this.editForm.value.taiKhoanNguoiTao
    }
    this.store.dispatch(editCourses({payload}))
  }


  ngOnDestroy(): void{
    if(this.coursesSubscription){
      this.coursesSubscription.unsubscribe()
    }
  }
}
