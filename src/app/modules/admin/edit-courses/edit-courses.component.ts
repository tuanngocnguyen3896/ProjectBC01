import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { Logout } from '../../auth/_actions/auth.actions';
import { editCourses } from '../_action/courses-admin.action';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit, OnDestroy {
editForm: FormGroup
courseUpdate:CoursesData;
coursesSubscription: Subscription;
maKhoaHoc:Params

  constructor(private route:ActivatedRoute ,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.handleEditForm()
    this.route.params.pipe().subscribe(value => 
      {console.log(value)
      
      return this.maKhoaHoc = value});
  }
  handleEditForm(){
    this.editForm = new FormGroup({
      maKhoaHoc: new FormControl('', [Validators.required]),
      biDanh: new FormControl('', [Validators.required]),
      tenKhoaHoc: new FormControl('', [Validators.required]),
      moTa: new FormControl('', [Validators.required]),
      luotXem: new FormControl('', [Validators.required]),
      danhGia: new FormControl('', [Validators.required]),
      hinhAnh: new FormControl('', [Validators.required]),
      ngayTao: new FormControl('', [Validators.required]),
      maNhom: new FormControl('', [Validators.required]),
      maDanhMucKhoaHoc: new FormControl('', [Validators.required]),
      taiKhoanNguoiTao: new FormControl('', [Validators.required]),
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
