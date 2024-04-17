import React from "react";
import { Table, ConfigProvider } from "antd";

const CustomTable = ({ dataSource }) => {
  const columns = [
    {
      title: "TT",
      dataIndex: "rank",
      width: 50,
      align: "center",
      fixed: "left",
      render: (index, record) => (
        <div
          key={index}
          className="flex justify-center items-center line-clamp-1"
        >
          <span
            className={`!text-[14px] !font-medium !w-[22px] !h-[22px] rounded-full ${
              index <= 4
                ? "bg-[#78B43D] text-[#fff]"
                : index >= 4 && index <= 6
                ? "bg-[#ECB305] text-[#fff]"
                : index >= dataSource.length - 2
                ? "bg-[#D9001B] !text-[#fff]"
                : "bg-transparent"
            }`}
          >
            {record?.rank}
          </span>
        </div>
      ),
    },
    {
      title: "CLB",
      width: 250,
      fixed: "left",
      render: (_, record) => (
        <div className="flex items-center gap-2 line-clamp-1">
          <img className="w-5 h-5" src={record?.logo} alt={record?.name} />
          <span className="line-clamp-1 !text-[14px] !font-medium">
            {record?.name}
          </span>
        </div>
      ),
    },
    {
      title: "ST",
      dataIndex: "totalCount",
      align: "center",
      width: 70,
    },
    {
      title: "T",
      dataIndex: "winCount",
      align: "center",
      width: 70,
    },
    {
      title: "H",
      dataIndex: "drawCount",
      align: "center",
      width: 70,
    },
    {
      title: "B",
      dataIndex: "loseCount",
      align: "center",
      width: 70,
    },
    {
      title: "Tg",
      dataIndex: "getScore",
      align: "center",
      width: 70,
    },
    {
      title: "Th",
      dataIndex: "loseScore",
      align: "center",
      width: 70,
    },
    {
      title: "HS",
      dataIndex: "goalDifference",
      align: "center",
      width: 70,
    },
    {
      title: "Đ",
      dataIndex: "integral",
      align: "center",
      width: 70,
    },
  ];
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              borderColor: "#dddddd",
              headerBg: "#65a530",
              headerSplitColor: "#fff",
              colorBgContainer: "#fff",
              colorText: "#000",
            },
          },
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey={"id"}
          pagination={false}
          scroll={{
            x: 700,
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default CustomTable;
