CREATE DATABASE JOB_RECOMENDATION;
USE JOB_RECOMENDATION;

CREATE TABLE BAITUYENDUNG (
	MaBai INT NOT NULL AUTO_INCREMENT,
    TieuDeBai TEXT NOT NULL,
    YeuCauUngVien TEXT NOT NULL,
    TrachNhiemCongViec TEXT NOT NULL,
    QuyenLoiCongViec TEXT NOT NULL,
    DiaChiLamViec TEXT NOT NULL,
    SoNamKinhNghiemYeuCau INT NOT NULL,
    LuongThoaThuan BOOLEAN NOT NULL,
    LuongMin INT,
    LuongMax INT,
    TuoiMin INT NOT NULL,
    TuoiMax INT NOT NULL,
    NgayDangTuyen DATETIME NOT NULL,
    NgayHetHan DATETIME NOT NULL,
    SoLuongTuyen INT NOT NULL,
    SoLuongDaTuyen INT NOT NULL,
    MaCongTy INT,
    MaTinhThanh INT,
    MaViTriTuyenDung INT,
    MaLoaiHinh INT,
    MaTrinhDo INT,
    CONSTRAINT PK_MaBai PRIMARY KEY (MaBai)
);

CREATE TABLE CONGTY (
	MaCongTy INT NOT NULL AUTO_INCREMENT,
    TenCongTy TEXT NOT NULL,
    Website TEXT NOT NULL,
    DiaChiChinh TEXT NOT NULL,
    GioiThieuCongTy TEXT NOT NULL,
    SoLuongNhanVienMin INT NOT NULL,
    SoLuongNhanVienMax INT NOT NULL,
    CONSTRAINT PK_MaCongTy PRIMARY KEY (MaCongTy)
);

CREATE TABLE UNGVIEN (
	MaUngVien INT NOT NULL AUTO_INCREMENT,
    TenUngVien TEXT NOT NULL,
    Tuoi INT NOT NULL,
    NgaySinh DATE NOT NULL,
    SoChungMinh VARCHAR(13) NOT NULL,
    SoDienThoai VARCHAR(13) NOT NULL,
    AnhCV VARCHAR(100) NOT NULL,
	
    CONSTRAINT PK_MaUngVien PRIMARY KEY (MaUngVien)
);

CREATE TABLE NGANHNGHE (
	MaNganhNghe INT NOT NULL AUTO_INCREMENT,
    TenNganhNghe TEXT NOT NULL,
    CONSTRAINT PK_MaNganhNghe PRIMARY KEY (MaNganhNghe)
);

CREATE TABLE LOAIHINHLAMVIEC (
	MaLoaiHinh INT NOT NULL AUTO_INCREMENT,
    TenLoaiHinh TEXT NOT NULL,
    CONSTRAINT PK_MaLoaiHinh PRIMARY KEY (MaLoaiHinh)
);

CREATE TABLE VITRITUYENDUNG (
	MaViTri INT NOT NULL AUTO_INCREMENT,
    TenViTri TEXT NOT NULL,
    CONSTRAINT PK_MaViTri PRIMARY KEY (MaViTri)
);

CREATE TABLE TINHTHANH (
	MaTinhThanh INT NOT NULL AUTO_INCREMENT,
    TenTinhThanh TEXT NOT NULL,
    CONSTRAINT PK_MaTinhThanh PRIMARY KEY (MaTinhThanh)
);

CREATE TABLE TRINHDO (
	MaTrinhDo INT NOT NULL AUTO_INCREMENT,
    TenTrinhDo TEXT NOT NULL,
    CONSTRAINT PK_MaTrinhDo PRIMARY KEY (MaTrinhDo)
);

CREATE TABLE THONGKENGAY (
	MaThongKe INT NOT NULL AUTO_INCREMENT,
    NgayThongKe DATE,
    SoNguoiDangKiUngTuyen INT,
    SoNguoiTaoHoSo INT,
    SoBaiUngTuyenDuocTaoTrongNgay INT,
    CONSTRAINT PK_MaThongKe PRIMARY KEY (MaThongKe)
);

CREATE TABLE THONGKETHANG (
	MaThongKe INT NOT NULL AUTO_INCREMENT,
    Thang INT,
    Nam YEAR,
    SoNguoiDangKiUngTuyen INT,
    SoNguoiTaoHoSo INT,
    SoBaiUngTuyenDuocTaoTrongNgay INT,
    CONSTRAINT PK_MaThongKe PRIMARY KEY (MaThongKe)
);


CREATE TABLE CONGTY_DIACHICHINHANH (
	MaCtDc INT NOT NULL AUTO_INCREMENT,
	MaCongTy INT NOT NULL,
    DiaChiChiNhanh TEXT NOT NULL,
    CONSTRAINT PK_MaCongTy_DiaChi PRIMARY KEY (MaCtDc)
);

CREATE TABLE UNGTUYEN (
	MaUngVien INT NOT NULL,
    MaBai INT NOT NULL,
    NgayUngTuyen DATE NOT NULL,
    DuocPhongVan BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT PK_MaUngTuyen_MaBai PRIMARY KEY (MaUngVien, MaBai)
);

CREATE TABLE BAITUYENDUNG_NGANHNGHE (
	MaBai INT NOT NULL,
    MaNganhNghe INT NOT NULL,
    CONSTRAINT PK_MaBaiUngTuyen_MaNganhNghe PRIMARY KEY (MaBai, MaNganhNghe)
);

CREATE TABLE TAIKHOAN (
	MaTaiKhoan INT NOT NULL AUTO_INCREMENT,
    TenTaiKhoan VARCHAR(20),
    MatKhau TEXT,
    MaVaiTro INT,
    CONSTRAINT PK_MaTaiKhoan PRIMARY KEY (MaTaiKhoan)
);

CREATE TABLE VAITRO (
	MaVaiTro INT NOT NULL AUTO_INCREMENT,
    TenVaiTro TEXT,
    CONSTRAINT PK_MaVaiTro PRIMARY KEY (MaVaiTro)
);

ALTER TABLE baituyendung ADD CONSTRAINT FK_MaCongTy_BTD foreign key (MaCongTy) references congty(MaCongTy);
ALTER TABLE baituyendung ADD CONSTRAINT FK_MaTinhThanh_BTD foreign key (MaTinhThanh) references tinhthanh(MaTinhThanh);
ALTER TABLE baituyendung ADD CONSTRAINT FK_MaViTriTuyenDung_BTD foreign key (MaViTriTuyenDung) references vitrituyendung(MaVitri);
ALTER TABLE baituyendung ADD CONSTRAINT FK_MaLoaiHinh_BTD foreign key (MaLoaiHinh) references loaihinhlamviec(MaLoaiHinh);
ALTER TABLE baituyendung ADD CONSTRAINT FK_MaTrinhDo_BTD foreign key (MaCongTy) references trinhdo(MaTrinhDo);

-- Viet tiep fkey cua ung vien o day neu co --

-- -- 
ALTER TABLE congty_diachichinhanh ADD CONSTRAINT FK_MaCongTy_CtDc foreign key (MaCongTy) references congty(MaCongTy);

ALTER TABLE ungtuyen ADD CONSTRAINT FK_MaUngVien_UT foreign key (MaUngVien) references ungvien(MaUngVien);
ALTER TABLE ungtuyen ADD CONSTRAINT FK_MaBai_UT foreign key (MaBai) references baituyendung(MaBai);

ALTER TABLE baituyendung_nganhnghe ADD CONSTRAINT FK_MaBai_BtdNn foreign key (MaBai) references baituyendung(MaBai);
ALTER TABLE baituyendung_nganhnghe ADD CONSTRAINT FK_MaNganhNghe_BtdNn foreign key (MaNganhNghe) references nganhnghe(MaNganhNghe);

ALTER TABLE taikhoan ADD CONSTRAINT FK_MaVaiTro foreign key (MaVaiTro) references vaitro(MaVaiTro);

select * from congty where TenCongTy like "C";
select * from congty where TenCongTy = "Công ty abc";


