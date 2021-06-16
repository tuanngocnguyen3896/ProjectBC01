export class CoursesData{
    maKhoaHoc: string = '';
    biDanh:string = '';
    tenKhoaHoc:string = '';
    moTa:string = '';
    luotXem:number = 0;
    maNhom:string = '';
    ngayTao:string = '';
    hinhAnh:string ='';
    soLuongHocVien:number = 0;
    nguoiTao:CourseAuthor = new CourseAuthor();
    danhMucKhoaHoc:CourseCategories = new CourseCategories();
}

export class CourseAuthor {
    taiKhoan:string;
    hoTen:string;
    maLoaiNguoiDung:string;
    tenLoaiNguoiDung:string;
}

export class CourseCategories {
    maDanhMucKhoaHoc:string;
    tenDanhMucKhoaHoc:string;
}
export class CoursesUpdate{
    maKhoaHoc: string = '';
    biDanh:string = '';
    tenKhoaHoc:string = '';
    moTa:string = '';
    luotXem:number = 0;
    danhGia:number =0;
    hinhAnh:string ='';
    maNhom: string = '';
    ngayTao: string='';
    maDanhMucKhoaHoc: string='';
    taiKhoanNguoiTao: string='';

}