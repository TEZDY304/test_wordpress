import React from "react";
import { Select, ConfigProvider } from "antd";

const CustomSelect = ({ id, defaultValue, options, onChange }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionActiveBg: "#fee78b",
            colorPrimaryHover: "#fee78b",
            colorPrimary: "#fee78b",
          },
        },
      }}
    >
      <Select
        rowkey={id}
        defaultValue={defaultValue}
        style={{ width: "100%" }}
        options={options}
        onChange={onChange}
      />
    </ConfigProvider>
  );
};

export default CustomSelect;
