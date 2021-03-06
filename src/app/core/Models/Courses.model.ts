export class CoursesData {
    maKhoaHoc: string = '';
    tenDanhMuc:string = '';
    taiKhoan?: string = '';
    biDanh:string = '';
    tenKhoaHoc:string = '';
    moTa:string = '';
    luotXem:number = 0;
    maNhom:string = '';
    ngayTao:string = '';
    hinhAnh:string ='';
    soLuongHocVien:number = 0;
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