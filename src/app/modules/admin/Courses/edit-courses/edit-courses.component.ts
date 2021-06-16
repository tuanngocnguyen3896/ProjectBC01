import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CoursesUpdate } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { editCourses } from '../../_action/admin.action';
import { getCourseById } from '../../_selector/admin.selector';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit, OnDestroy {
editCoursesForm: FormGroup;
coursesSubscription: Subscription;
coursesUpdate: CoursesUpdate
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createForm();
    this.coursesSubscription = this.store.select(getCourseById).subscribe((courses)=>{
      if(courses){
        this.coursesUpdate = courses;
      this.editCoursesForm.patchValue({
        maKhoaHoc: courses.maKhoaHoc,
        biDanh: courses.biDanh,
        tenKhoaHoc: courses.tenKhoaHoc,
        moTa: courses.moTa,
        luotXem: courses.luotXem,
        danhGia: courses.danhGia,
        hinhAnh: courses.hinhAnh,
        maNhom: courses.maNhom,
        ngayTao: courses.ngayTao,
        maDanhMucKhoaHoc: courses.maDanhMucKhoaHoc,
        taiKhoanNguoiTao: courses.taiKhoanNguoiTao
      })
      }
    })
   
  }

  createForm(){
    this.editCoursesForm = new FormGroup({
      maKhoaHoc: new FormControl(null, Validators.required),
      biDanh: new FormControl(null, Validators.required),
      tenKhoaHoc: new FormControl(null, Validators.required),
      moTa:new FormControl(null, Validators.required),
      luotXem: new FormControl(null,Validators.required),
      danhGia: new FormControl(null, Validators.required),
      hinhAnh: new FormControl(null,Validators.required),
      maNhom: new FormControl(null, Validators.required),
      ngayTao: new FormControl(null, Validators.required),
      maDanhMucKhoaHoc: new FormControl(null, Validators.required),
      taiKhoanNguoiTao: new FormControl(null, Validators.required)
    })


  }
  onEditCourses(){
    const payload = {
      maKhoaHoc: this.editCoursesForm.value.maKhoaHoc,
      biDanh: this.editCoursesForm.value.biDanh,
      tenKhoaHoc: this.editCoursesForm.value.tenKhoaHoc,
      moTa: this.editCoursesForm.value.moTa,
      luotXem: this.editCoursesForm.value.luotXem,
      danhGia: this.editCoursesForm.value.danhGia,
      hinhAnh: this.editCoursesForm.value.hinhAnh,
      maNhom: this.editCoursesForm.value.maNhom,
      ngayTao: this.editCoursesForm.value.ngayTao,
      maDanhMucKhoaHoc: this.editCoursesForm.value.maDanhMucKhoaHoc,
      taiKhoanNguoiTao: this.editCoursesForm.value.taiKhoanNguoiTao,
    }
    this.store.dispatch(editCourses({payload}))

  }

  ngOnDestroy():void{
    if(this.coursesSubscription){
      this.coursesSubscription.unsubscribe()
    }
  }
}
