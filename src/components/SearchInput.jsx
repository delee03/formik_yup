import React from "react";

const SearchInput = ({ handleSearchInput, value }) => {
    return (
        <>
            <label className="text-lg mt-4 ml-5">Tìm kiếm</label>
            <input
                type="text"
                value={value}
                onChange={handleSearchInput}
                className="w-60 mt-4  ml-2 rounded-lg border border-gray-400 py-3 px-3"
                placeholder="Tìm theo họ tên nhân viên"
            />
        </>
    );
};

export default SearchInput;
