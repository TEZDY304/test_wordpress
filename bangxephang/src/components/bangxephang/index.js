import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import Loading from "../loadding";
import ListLeague from "../../utils/ListLeague";
import localizedFormat from "dayjs/plugin/localizedFormat";
import CustomSelect from "./CustomSelect";
import CustomTable from "./CustomTable";
dayjs.locale("vi");
dayjs.extend(localizedFormat);

const Bangxephang = () => {
  const [bxh, setBxh] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [listActive, setListActive] = useState(ListLeague()[0]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const header = new Headers();
        header.append("Content-Type", "application/json");
        const params = new URLSearchParams({
          leagueId: listActive.leagueId,
        });
        const RequestOptions = {
          method: "POST",
          redirect: "follow",
        };
        const response = await fetch(
          `https://api.553328.com/api/get-total-standing?${params}`,
          RequestOptions
        );

        const data = await response.json();
        setBxh(data?.value?.datas || []);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [listActive]);
  console.log(bxh);

  const handleChange = (value) => {
    const selectedLeague = ListLeague().find(
      (league) => league.leagueId === value
    );
    setListActive(selectedLeague);
  };

  return (
    <div className="max-w-[1200px] mx-auto ">
      {isloading ? (
        <Loading />
      ) : (
        <>
          <div>
            <p className="text-[16px] font-light">
              Cập nhật Bảng xếp hạng -{" "}
              <b>
                <a className="!text-red-600" href="https://keonhacai6.io/bxh/">
                  Bảng xếp hạng
                </a>{" "}
              </b>
              {listActive && <span>{listActive.name}</span>} nhanh nhất chính
              xác nhất
            </p>
            <p className="text-[16px] font-light mb-2">
              Mẹo : Ctr + F để tìm trận theo dõi
            </p>
          </div>
          <CustomSelect
            defaultValue={listActive ? listActive.name.toString() : ""}
            options={ListLeague().map((league) => ({
              label: league.name,
              value: league.leagueId,
            }))}
            onChange={handleChange}
          />
          <div className="mt-3 ">
            <CustomTable dataSource={bxh} />
          </div>
        </>
      )}
    </div>
  );
};

export default Bangxephang;
