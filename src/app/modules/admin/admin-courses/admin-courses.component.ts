import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { addCoursesAction, deleteCourses, loadCoursesAction } from '../_action/courses-admin.action';
import {  getCoursesLists } from '../_selectors/courses-admin.selector';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit {
  closeResult: string;
  addForm: FormGroup;
  courseUpdate: Observable<CoursesData[]>
  coursesGroup: string;
  getAll: string;

  constructor(private store: Store<AppState>, private modalService: NgbModal,
    private httpClient: HttpClient, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onChangeGroup(this.coursesGroup)
    this.creatingForm()
    this.courseUpdate = this.store.select(getCoursesLists)
  }


  creatingForm() {
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

  onChangeGroup(value) {
    this.coursesGroup = value;
    if (this.coursesGroup === undefined) {
      this.coursesGroup = 'GP01'
    }
    this.store.dispatch(loadCoursesAction({ maNhom: value }))
  }

  onGetAllCourses(value) {
    this.getAll = value;
    this.getAll = this.coursesGroup;
    this.store.dispatch(loadCoursesAction({ maNhom: value }))
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
    const payload = {
      maKhoaHoc: this.addForm.value.maKhoaHoc,
      biDanh: this.addForm.value.biDanh,
      tenKhoaHoc: this.addForm.value.tenKhoaHoc,
      moTa: this.addForm.value.moTa,
      luotXem: this.addForm.value.luotXem,
      danhGia: this.addForm.value.danhGia,
      hinhAnh: this.addForm.value.hinhAnh,
      ngayTao: this.addForm.value.ngayTao,
      maNhom: this.addForm.value.maNhom,
      maDanhMucKhoaHoc: this.addForm.value.maDanhMucKhoaHoc,
      taiKhoanNguoiTao: this.addForm.value.taiKhoanNguoiTao
    }
    this.store.dispatch(addCoursesAction({ payload }))

    this.modalService.dismissAll(); //dismiss the modal
  }
  onDelete(maKhoaHoc: string) {
    this.store.dispatch(deleteCourses({ maKhoaHoc }))
  }

}
