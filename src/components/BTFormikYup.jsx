import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useFormik } from "formik";
const { Header, Content, Footer } = Layout;
const items = new Array(4).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `BCS12 ${index + 1}`,
}));
const BTFormikYup = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [value, setValueInput] = useState({
        hoTen: "",
        email: "",
    });

    const handleSubmit = () => {
        console.log(value);
    };

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
                    }}
                >
                    <h1 className="text-3xl text-sky-500 text-center py-6 font-bold">
                        Bài tập Formik và Yup
                    </h1>
                    <form action={handleSubmit} className="mt-6">
                        <div className="grid grid-cols-2 space-x-5">
                            <input
                                type="email"
                                id="email"
                                onChange={(event) => {
                                    setValueInput({
                                        ...value,
                                        [id]: event.target.value,
                                    });
                                }}
                                value={value.email}
                                className="w-30 border-gray-500 border rounded-lg py-3 px-2"
                                placeholder="email"
                            />
                            <input
                                type="text"
                                id="hoTen"
                                onChange={(event) => {
                                    setValueInput({
                                        ...value,
                                        [id]: event.target.value,
                                    });
                                    console.log(event.target.value);
                                }}
                                value={value.hoTen}
                                className="w-30 border-gray-500 border rounded-lg py-3 px-2"
                                placeholder="hoTen"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-red-500 text-white rounded-lg mt-4"
                        >
                            Gửi
                        </button>
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
