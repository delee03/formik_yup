import React, { useState } from "react";
import {
    Breadcrumb,
    Button,
    Layout,
    Menu,
    theme,
    Select,
    DatePicker,
} from "antd";
import { useFormik } from "formik";
import InputCustom from "./InputCustom";
import ButtonCustom from "./ButtonCustom";
import * as yup from "yup";

const { Header, Content, Footer } = Layout;
const items = new Array(4).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `BCS12 ${index + 1}`,
}));
const BTFormikYup = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // const [value, setValueInput] = useState({
    //     hoTen: "",
    //     email: "",
    //     sdt: "",
    // });

    const formik = useFormik({
        //onChange, onBlur, touched, error
        initialValues: {
            msnv: "",
            email: "",
            hoTen: "",
            password: "",
            sdt: "",
            gioiTinh: "",
            ngaySinh: "",
        },

        onSubmit: (values) => {
            console.log(values);
        },

        validationSchema: yup.object({
            email: yup
                .string()
                .required("Không được bỏ trống")
                .matches(
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    "Địa chỉ email không hợp lệ!"
                ),
            hoTen: yup
                .string()
                .required("Không được bỏ trống")
                .min(6, "Tên phải trên 6 kí tự")
                .max(12, "Tối đa 12 kí tự"),
            password: yup
                .string()
                .matches(
                    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                    "Vui lòng tạo mật khẩu có ít nhất 1 kí tự in hoa ở đầu, 1 số , 1 đặt biệt"
                ),
            sdt: yup
                .string()
                .matches(
                    /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/,
                    "Vui lòng nhập đúng số điện thoại Việt Nam"
                ),
        }),
    });

    const {
        handleBlur,
        handleChange,
        handleSubmit,
        handleReset,
        values,
        touched,
        errors,
    } = formik;

    // const handleSubmit = () => {
    //     console.log(values);
    // };

    // const handleChange = (event) => {
    //     const id = event.target.id;
    //     setValueInput({ ...value, [id]: event.target.value });
    // };

    console.log(touched);

    return (
        <Layout>
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between   ",
                }}
            >
                <img src="vite.svg" className="w-100 h-100" alt="logo" />
                <div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        items={items}
                        style={{
                            marginRight: "100px",
                            width: "100%",
                        }}
                    />
                </div>
            </Header>

            <Content
                style={{
                    padding: "0 48px",
                }}
            >
                <Breadcrumb
                    style={{
                        margin: "16px 0",
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Cybersoft</Breadcrumb.Item>
                    <Breadcrumb.Item>BTFormikYup</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        height: "100vh",
                        zIndex: 100,
                    }}
                >
                    <h1 className="text-3xl text-sky-500 text-center py-6 font-bold">
                        Bài tập Formik và Yup
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-2 gap-5">
                                <InputCustom
                                    type="text"
                                    content="Mã nhân viên"
                                    name="msnv"
                                    id="msnv"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.msnv}
                                    placeholder="msnv"
                                    touched={touched.msnv}
                                    error={errors.msnv}
                                />
                                <InputCustom
                                    type="email"
                                    content="Email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="email"
                                    touched={touched.email}
                                    error={errors.email}
                                />

                                <InputCustom
                                    type="text"
                                    content="Họ tên"
                                    id="hoTen"
                                    name={"hoTen"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.hoTen}
                                    placeholder="Họ tên"
                                    touched={touched.hoTen}
                                    error={errors.hoTen}
                                />

                                <InputCustom
                                    type="password"
                                    content="Mật khẩu"
                                    id="password"
                                    name={"password"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Mật khẩu"
                                    touched={touched.password}
                                    error={errors.password}
                                />
                                <InputCustom
                                    type="text"
                                    name={"sdt"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sdt}
                                    placeholder="số điện thoại"
                                    content="Số điện thoại"
                                    id="sdt"
                                    touched={touched.sdt}
                                    error={errors.sdt}
                                />
                                <div>
                                    <label htmlFor="">Chọn ngày sinh</label>
                                    <DatePicker
                                        className="border-gray-500 border rounded-lg  mt-2 text-black block w-full"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors.ngaySinh}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="">Chọn giới tính</label>
                                    <select
                                        name="gioiTinh"
                                        id="gioiTinh"
                                        className="rounded-lg border py-3 border-gray-500 mt-2 block w-full"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors.gioiTinh}
                                    >
                                        <option value="">Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                    {errors.gioiTinh && touched.gioiTinh ? (
                                        <p className="py-2 text-red-500">
                                            {errors.gioiTinh}
                                        </p>
                                    ) : null}
                                </div>

                                <div>
                                    <ButtonCustom
                                        type="submit"
                                        bgColor="bg-sky-500"
                                        content="Thêm nhân viên"
                                    />
                                    <ButtonCustom
                                        bgColor="bg-yellow-500"
                                        content="Cập nhật nhân viên"
                                    />
                                    <ButtonCustom
                                        bgColor="bg-red-500"
                                        content="Xóa"
                                    />
                                    <ButtonCustom
                                        bgColor="bg-green-600"
                                        content="Reset"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                Phát Design ©{new Date().getFullYear()} Created by Đông Copilot
            </Footer>
        </Layout>
    );
};
export default BTFormikYup;
