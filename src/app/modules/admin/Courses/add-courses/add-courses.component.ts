import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/reducers';
import { addCourses } from '../../_action/admin.action';



@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {
  // courses: Observable<CoursesData>
  addCoursesForm: FormGroup
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.addCoursesForm = new FormGroup({
      maKhoaHoc: new FormControl('123', Validators.required),
      biDanh: new FormControl('abc', Validators.required),
      tenKhoaHoc: new FormControl('abcd', Validators.required),
      moTa:new FormControl('', Validators.required),
      luotXem: new FormControl('12',Validators.required),
      danhGia: new FormControl('9', Validators.required),
      hinhAnh: new FormControl('https://picsum.photos/200/300',Validators.required),
      maNhom: new FormControl('08', Validators.required),
      ngayTao: new FormControl('12/06/2021', Validators.required),
      maDanhMucKhoaHoc: new FormControl('Backend', Validators.required),
      taiKhoanNguoiTao: new FormControl('Amin', Validators.required)
    })

  }
  onAddCourses() {
    const payload = {
      maKhoaHoc: this.addCoursesForm.value.maKhoaHoc,
      biDanh: this.addCoursesForm.value.biDanh,
      tenKhoaHoc: this.addCoursesForm.value.tenKhoaHoc,
      moTa: this.addCoursesForm.value.moTa,
      luotXem: this.addCoursesForm.value.luotXem,
      danhGia: this.addCoursesForm.value.danhGia,
      hinhAnh: this.addCoursesForm.value.hinhAnh,
      maNhom: this.addCoursesForm.value.maNhom,
      ngayTao: this.addCoursesForm.value.ngayTao,
      maDanhMucKhoaHoc: this.addCoursesForm.value.maDanhMucKhoaHoc,
      taiKhoanNguoiTao: this.addCoursesForm.value.taiKhoanNguoiTao,
    }
    
    // console.log(JSON.stringify(this.addCoursesForm.value));
    
    this.store.dispatch(addCourses
      ({payload}))
    
  }
  

}
