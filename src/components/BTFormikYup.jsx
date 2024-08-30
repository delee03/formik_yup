import React, { useState, useEffect } from "react";
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
import dayjs from "dayjs";
import TableCustom from "./TableCustom";
import SearchInput from "./SearchInput";

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
    const [arrNV, setArrNV] = useState([]);
    const [originalArrNV, setOriginalArrNV] = useState([]);

    const [disable, setDisable] = useState({
        pointer: "",
        bg: "",
    });

    useEffect(() => {
        const data = getFromLocalStorage();
        setArrNV(data);
        setOriginalArrNV(data);
    }, []);

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
            search: "",
        },

        onSubmit: (values) => {
            console.log(values);

            // const newArr = arrNV;
            // newArr.push(values);
            // setArrNV(newArr);
            // setArrNV([...arrNV, values]);

            const index = arrNV.findIndex((item) => item.msnv == values.msnv);
            if (index !== -1) {
                const newArrUpdate = [...arrNV];
                newArrUpdate[index] = values;
                setArrNV(newArrUpdate);
            } else {
                setArrNV([...arrNV, values]);
            }
            saveToLocalStorage([...arrNV, values]);
            setDisable({ pointer: "", bg: "" });
            setFieldValue("ngaySinh", null);
            resetForm();
        },

        validationSchema: yup.object({
            msnv: yup
                .number()
                .required("Vui lòng không bỏ trống trường này")
                .min(1, "Tối thiểu 1 kí tự"),

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
                .matches(/^[A-Za-zÀ-ỹ\s]+$/, "Vui lòng nhập chữ không có số")
                .min(6, "Tên phải trên 6 kí tự")
                .max(30, "Tối đa 12 kí tự"),
            password: yup
                .string()
                .matches(
                    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                    "Vui lòng tạo mật khẩu có ít nhất 1 kí tự in hoa ở đầu, 1 số , 1 đặt biệt"
                ),
            // sdt: yup
            //     .string()
            //     .matches(
            //         /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/,
            //         "Vui lòng nhập đúng số điện thoại Việt Nam"
            //     ),
            gioiTinh: yup.string().required("Bạn vui lòng chọn giới tính"),
            ngaySinh: yup.string().required("Bạn vui lòng chọn ngày sinh"),
        }),
    });

    const {
        handleBlur,
        handleChange,
        handleSubmit,
        handleReset,
        setFieldValue,
        values,
        touched,
        errors,
        resetForm,
    } = formik;

    // const handleSubmit = () => {
    //     console.log(values);
    // };

    // const handleChange = (event) => {
    //     const id = event.target.id;
    //     setValueInput({ ...value, [id]: event.target.value });
    // };

    // console.log(touched);
    //console.log(arrNV);

    //handle Delete NV , Update NV, Search NV theo hoTen

    const handleDelete = (id) => {
        const newArrUpdate = [...arrNV];
        const index = newArrUpdate.findIndex((item) => item.msnv === id);
        if (index !== -1) {
            newArrUpdate.splice(index, 1);
            setArrNV(newArrUpdate);
            saveToLocalStorage(newArrUpdate);
        }
    };

    const saveToLocalStorage = (data) => {
        localStorage.setItem("arrNV", JSON.stringify(data));
    };

    const getFromLocalStorage = () => {
        const data = localStorage.getItem("arrNV");
        return data ? JSON.parse(data) : [];
    };

    //get infoNV
    const getInforNV = (msnvUpdate) => {
        const index = arrNV.findIndex((item) => item.msnv == msnvUpdate);

        if (index != -1) {
            const newArrUpdate = arrNV[index];
            setFieldValue("msnv", newArrUpdate.msnv);
            setFieldValue("hoTen", newArrUpdate.hoTen);
            setFieldValue("email", newArrUpdate.email);
            setFieldValue("sdt", newArrUpdate.sdt);
            setFieldValue("password", newArrUpdate.password);
            setFieldValue("gioiTinh", newArrUpdate.gioiTinh);
            setFieldValue("ngaySinh", newArrUpdate.ngaySinh);

            setDisable({ pointer: "pointer-events-none", bg: "bg-gray-300" });
        }
    };

    // const getInforModal = (msnvUpdate) => {
    //     const index = arrNV.findIndex((item) => item.msnv == msnvUpdate);

    //     if (index != -1) {
    //         const newArrUpdate = arrNV[index];
    //         setFieldValue("msnv", newArrUpdate.msnv);
    //         setFieldValue("hoTen", newArrUpdate.hoTen);
    //         setFieldValue("email", newArrUpdate.email);
    //         setFieldValue("sdt", newArrUpdate.sdt);
    //         setFieldValue("password", newArrUpdate.password);
    //         setFieldValue("gioiTinh", newArrUpdate.gioiTinh);
    //         setFieldValue("ngaySinh", newArrUpdate.ngaySinh);

    //     }
    // };

    // console.log(disable);

    const handleSearchInput = (event) => {
        const { value } = event.target;
        setFieldValue("search", value);
        if (value === "") {
            setArrNV(originalArrNV);
        } else {
            const newArr = originalArrNV.filter((item) =>
                item.hoTen
                    .toLowerCase()
                    .trim()
                    .includes(value.toLowerCase().trim())
            );
            setArrNV(newArr);
        }
    };
    return (
        <Layout className="min-h-screen">
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

                        zIndex: 100,
                    }}
                >
                    <h1 className="text-3xl text-sky-500 text-center py-6 font-bold">
                        Bài tập Formik và Yup
                    </h1>
                    <h2 className="text-xl text-pink-500 text-center py-6 font-bold">
                        Anh Đông copilot nhớ nhập dữ liệu tay nha dùng Fake
                        Filter nó đè thanh search ko ra kết quả đúng!
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-2 gap-5">
                                <InputCustom
                                    type="number"
                                    content="Mã nhân viên"
                                    name="msnv"
                                    id="msnv"
                                    pointerEvents={disable.pointer}
                                    bgColor={disable.bg}
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
                                    pointerEvents={disable.pointer}
                                    bgColor={disable.bg}
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
                                    <label htmlFor="ngaySinh">
                                        Chọn ngày sinh
                                    </label>
                                    <DatePicker
                                        className="border-gray-500 border rounded-lg  mt-2 text-black block w-full"
                                        onChange={(date, dateString) => {
                                            // console.log(date);
                                            // console.log(dateString);
                                            setFieldValue(
                                                "ngaySinh",
                                                dateString || null
                                            );
                                        }}
                                        name="ngaySinh"
                                        onBlur={handleBlur}
                                        value={
                                            values.ngaySinh
                                                ? dayjs(
                                                      values.ngaySinh,
                                                      "DD-MM-YYYY"
                                                  )
                                                : null
                                        }
                                        errors={errors.ngaySinh}
                                        format={"DD-MM-YYYY"}
                                    />
                                    {errors.ngaySinh && touched.ngaySinh ? (
                                        <p className="py-2 text-red-500">
                                            {errors.ngaySinh}
                                        </p>
                                    ) : null}
                                </div>

                                <div>
                                    <label htmlFor="gioiTinh">
                                        Chọn giới tính
                                    </label>
                                    <select
                                        name="gioiTinh"
                                        id="gioiTinh"
                                        className="rounded-lg border py-3 border-gray-500 mt-2 block w-full"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gioiTinh}
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
                                        content="Thêm / Sửa nhân viên"
                                    />

                                    <ButtonCustom
                                        bgColor="bg-green-600"
                                        content="Reset"
                                        onClick={handleReset}
                                        hoverColor="hover:bg-green-800"
                                    />
                                    <SearchInput
                                        value={values.search}
                                        handleSearchInput={handleSearchInput}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="ml-4 my-4 flex mt-8 justify-center w-6/12 mx-auto"></div>

                    <TableCustom
                        arrNV={arrNV}
                        handleDelete={handleDelete}
                        getInforNV={getInforNV}
                    />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                    marginBottom: 0,
                }}
            >
                Phát Design ©{new Date().getFullYear()} Created by Đông Copilot
            </Footer>
        </Layout>
    );
};
export default BTFormikYup;
