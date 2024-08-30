import React, { useState } from "react";

import { Button, Modal } from "antd";

const ModalCustom = ({ handleCloseModal, handleOpenModal, isOpen, nvItem }) => {
    return (
        <Modal
            width={1000}
            style={{ height: 500 }}
            title="Thông tin nhân viên"
            open={isOpen}
            onOk={handleCloseModal}
            onCancel={handleCloseModal}
        >
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                MSNV
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Họ tên
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Số điện thoại
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Số điện thoại
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Giới tính
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {nvItem.map((item, index) => {
                            return (
                                <tr className="bg-white border-b ">
                                    <td
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        {item.msnv}
                                    </td>
                                    <td className="px-6 py-4">{item.hoTen}</td>
                                    <td className="px-6 py-4">{item.email}</td>
                                    <td className="px-6 py-4">
                                        {item.gioiTinh}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.ngaySinh}
                                    </td>
                                    <td className="px-6 py-4">{item.sdt}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Modal>
    );
};

export default ModalCustom;
