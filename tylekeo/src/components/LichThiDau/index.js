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
    time: dayjs().add(-1, "day").format("MM/DD"),
    timeZone: "07",
  },
];
const LichThiDau = () => {
  const [schedule, setSchedule] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [dayActive, setDayActive] = useState(menuDate[0]);

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

  return (
    <div className="max-w-full mx-auto h-screen overflow-y-scroll ">
      {isloading ? (
        <Loading />
      ) : (
        <>
          {schedule?.length > 0 ? (
            <>
              {Object.keys(scheduleByLeague).map((leagueName) => (
                <div key={leagueName}>
                  <div className="bg-[#fee78b] text-[11px] text-[#000] p-1 font-medium flex justify-between items-center gap-5 hover:text-[#deae08] hover:underline cursor-pointer">
                    <div className=" flex items-center gap-2">
                      <span className="uppercase">{leagueName}</span>
                      <span>{scheduleByLeague[leagueName][0].season}</span>
                    </div>
                  </div>
                  <ul>
                    {scheduleByLeague[leagueName].map((item, index) => (
                      <li
                        key={index}
                        className={`w-full !ml-0 !mb-0 ${
                          index % 2 !== 0 ? "bg-[#e6eef0] " : "bg-[#fff]"
                        }`}
                      >
                        <div className="flex items-center gap-1 py-1 ">
                          <div className="w-[23%] md:w-[11%] pl-2 md:pl-3 text-[#333] text-[11px] font-semibold">
                            {dayjs.unix(item.matchTime).format("HH:mm - DD/MM")}
                          </div>

                          <div className="w-[80%] ">
                            <div className="w-[100%] flex items-center gap-4">
                              <div className="w-[45%]">
                                <div className="flex items-center justify-end gap-2">
                                  <span className="capitalize line-clamp-1 text-[#000] text-[11px] font-medium hover:text-[#deae08] hover:underline cursor-pointer">
                                    {item?.homeName}
                                  </span>
                                </div>
                              </div>
                              <div className="w-[5%]">
                                <div className="flex items-center gap-1  justify-center text-[11px] text-[#b70733]  font-semibold">
                                  {item?.status === 0 ? (
                                    <span>?</span>
                                  ) : (
                                    <span>{item?.homeScore}</span>
                                  )}
                                  <span>-</span>
                                  {item?.status === 0 ? (
                                    <span>?</span>
                                  ) : (
                                    <span>{item?.awayScore}</span>
                                  )}
                                </div>
                              </div>
                              <div className="w-[45%]">
                                <div className="flex items-center justify-start gap-2">
                                  <span className="capitalize line-clamp-1 text-[11px] font-medium text-[#000] hover:text-[#deae08] hover:underline cursor-pointer">
                                    {item?.awayName}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

export default LichThiDau;
