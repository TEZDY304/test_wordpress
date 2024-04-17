import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import Loading from "../loadding";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("vi");
dayjs.extend(localizedFormat);

const menuDate = [
  {
    key: "1",
    time: dayjs().add(1, "day").format("MM/DD"),
    timeZone: "07",
  },
];
const Tylekeo = () => {
  const [schedule, setSchedule] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [dayActive, setDayActive] = useState(menuDate[0]);
  console.log(dayActive);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const header = new Headers();
        header.append("Content-Type", "application/json");
        const params = new URLSearchParams({
          timeZone: dayActive.timeZone,
          time: dayActive.time,
        });
        const RequestOptions = {
          method: "GET",
          redirect: "follow",
        };
        const response = await fetch(
          `https://client.banhgio88.com/api/sports/schedule/date?${params}`,
          RequestOptions
        );

        const data = await response.json();
        console.log(data);
        setSchedule(data?.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const scheduleByLeague = {};

  if (Array.isArray(schedule)) {
    schedule.forEach((match) => {
      const leagueName = match.leagueName;
      if (!scheduleByLeague[leagueName]) {
        scheduleByLeague[leagueName] = [];
      }
      scheduleByLeague[leagueName].push(match);
    });
  }
  console.log(scheduleByLeague);
  return (
    <div className="max-w-[1200px] mx-auto h-screen overflow-y-scroll">
      {isloading ? (
        <Loading />
      ) : (
        <>
          <div>
            <h2 className="text-[#000] font-bold">
              Các trận <b className="text-[#c60404]">sắp thi đấu</b>
            </h2>
            <div className="flex items-center bg-[#a3d3f5]">
              <div className="w-[20%] md:w-[10%] pl-2 md:pl-3 text-[13px] text-[#fff] border-r-[1px] border-solid border-[#fff]">
                Ngày/giờ
              </div>
              <div className="w-[40%]  text-center text-[13px] text-[#fff]">
                Trần đấu
              </div>
            </div>
          </div>
          {schedule?.length > 0 ? (
            <>
              {Object.entries(scheduleByLeague).map(
                ([leagueName, matches]) =>
                  matches.some((match) => match.odds !== null) && (
                    <div key={leagueName}>
                      <div className="bg-[#fee78b] text-[11px] text-[#000] p-1 font-medium flex justify-between items-center gap-5 hover:text-[#deae08] hover:underline cursor-pointer">
                        <div className=" flex items-center gap-2">
                          <span className="uppercase">{leagueName}</span>
                          <span>{scheduleByLeague[leagueName][0].season}</span>
                        </div>
                      </div>
                      <ul>
                        {matches.map((item, index) => (
                          <li
                            key={index}
                            className={`w-full ${
                              index % 2 !== 0 ? "bg-[#e6eef0] " : "bg-[#fff]"
                            }`}
                          >
                            <div className="flex items-center ">
                              <div className="w-[20%] md:w-[10%] pl-2 py-1 md:pl-3 text-[#333] text-[11px] font-medium border-[1px] border-solid border-[#e6eef0]">
                                {dayjs
                                  .unix(item.matchTime)
                                  .format("HH:mm - DD/MM")}
                              </div>
                              <div className="w-[40%] border-[1px] border-solid border-[#e6eef0]">
                                <div className="w-[100%] flex justify-center items-center gap-1">
                                  <span className="capitalize text-[#000] py-1 text-[11px] font-medium hover:text-[#deae08] hover:underline cursor-pointer">
                                    {item?.homeName}
                                  </span>
                                  <span>-</span>
                                  <span className="capitalize text-[#000] text-[11px] py-1 font-medium hover:text-[#deae08] hover:underline cursor-pointer">
                                    {item?.awayName}
                                  </span>
                                </div>
                              </div>
                              <ul className="w-[40%]"></ul>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </>
          ) : (
            <div className="text-[#FEA013] text-center text-[20px] font-bold">
              <h2>Không có dữ liệu</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tylekeo;
