import React from "react";
import { Space, Table, Tag } from "antd";
import ButtonCustom from "./ButtonCustom";
import { IconDelete, IconEdit, IconLook } from "../assets/Icon/IconStorage";

const TableCustom = ({ arrNV, handleDelete, getInforNV }) => {
    const columns = [
        {
            title: "MSNV",
            dataIndex: "msnv",
            key: "msnv",
        },
        {
            title: "Họ tên",
            dataIndex: "hoTen",
            key: "hoTen",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Số điện thoại",
            dataIndex: "sdt",
            key: "sdt",
        },

        {
            title: "Giới tính",
            key: "gioiTinh",
            dataIndex: "gioiTinh",
            render: (text, record, index) => {
                return (
                    <Tag
                        color={
                            record.gioiTinh === "Nam" ? "volcano" : "geekblue"
                        }
                    >
                        {record.gioiTinh}
                    </Tag>
                );
            },
        },
        {
            title: "Action",
            key: "action",
            render: (text, record, index) => (
                <Space size="middle">
                    <ButtonCustom
                        mt="0"
                        bgColor="bg-sky-500"
                        content={<IconLook />}
                        hoverColor="hover:bg-sky-700"
                    />
                    <ButtonCustom
                        mt="0"
                        bgColor="bg-yellow-500"
                        content={<IconEdit />}
                        onClick={() => {
                            getInforNV(record.msnv);
                        }}
                        hoverColor="hover:bg-yellow-700"
                    />
                    <ButtonCustom
                        bgColor="bg-red-500"
                        mt="0"
                        onClick={() => handleDelete(record.msnv)}
                        content={<IconDelete />}
                        hoverColor="hover:bg-red-700"
                    />
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table
                className="mt-10 formTable"
                columns={columns}
                dataSource={arrNV}
            />
        </div>
    );
};
export default TableCustom;
