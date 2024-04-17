import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import Loading from "../loadding";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("vi");
dayjs.extend(localizedFormat);

const listLeague = [
  {
    leagueId: 1639,
    name: "KQ ngoại hạng anh ",
    imgUrl:
      "http://keonhacai6.io/wp-content/uploads/2024/04/Ngoai-hang-anh.jpg",
  },
  {
    leagueId: 13014,
    name: "KQ C1",
    imgUrl: "http://keonhacai6.io/wp-content/uploads/2024/04/CupC1.jpg",
  },
  {
    leagueId: 188,
    name: "KQ Bundesliga",
    imgUrl: "http://keonhacai6.io/wp-content/uploads/2024/04/bundesliga.jpg",
  },
  {
    leagueId: 16679,
    name: "KQ V.League",
    imgUrl: "http://keonhacai6.io/wp-content/uploads/2024/04/V-league.png",
  },
  {
    leagueId: 1112,
    name: "KQ Ligue 1",
    imgUrl: "http://keonhacai6.io/wp-content/uploads/2024/04/Ligue-1.jpg",
  },
  {
    leagueId: 13115,
    name: "KQ Europa Conference League",
    imgUrl:
      "http://keonhacai6.io/wp-content/uploads/2024/04/Europa-Conference-League.webp",
  },
  {
    leagueId: 1134,
    name: "KQ Laliga",
    imgUrl: "http://keonhacai6.io/wp-content/uploads/2024/04/Laliga.jpg",
  },
  {
    leagueId: 174113,
    name: "KQ Cup FA",
    imgUrl: "http://keonhacai6.io/wp-content/uploads/2024/04/Cup-FA.jpg",
  },
  {
    leagueId: 1437,
    name: "KQ Ý Serie-A",
    imgUrl: "http://keonhacai6.io/wp-content/uploads/2024/04/Serie-A.png",
  },
  {
    leagueId: 13115,
    name: "KQ Europa League",
    imgUrl: "http://keonhacai6.io/wp-content/uploads/2024/04/Europa-League.jpg",
  },
];
const Tylekeo = () => {
  const [schedule, setSchedule] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [listActive, setListActive] = useState(listLeague[0]);

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
          method: "GET",
          redirect: "follow",
        };
        const response = await fetch(
          `https://client.banhgio88.com/api/sports/schedule/league?${params}`,
          RequestOptions
        );

        const data = await response.json();
        setSchedule(data?.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [listActive]);

  const roundByLeague = {};
  schedule.forEach((match) => {
    const leagueStatus = match.status;
    const leagueRound = match.round;
    const leagueTime = dayjs.unix(match.matchTime).format("dddd, LL");

    if (!roundByLeague[leagueStatus]) {
      roundByLeague[leagueStatus] = [];
    }
    if (!roundByLeague[leagueStatus][leagueRound]) {
      roundByLeague[leagueStatus][leagueRound] = [];
    }
    if (!roundByLeague[leagueStatus][leagueRound][leagueTime]) {
      roundByLeague[leagueStatus][leagueRound][leagueTime] = [];
    }
    roundByLeague[leagueStatus][leagueRound][leagueTime].push(match);
  });
  console.log(roundByLeague);
  return (
    <div className="max-w-[1200px] mx-auto ">
      {isloading ? (
        <Loading />
      ) : (
        <>
          <div>
            <p className="text-[16px] font-light">
              Cập nhật KQBD -{" "}
              <b>
                <a
                  className="!text-red-600"
                  href="https://keonhacai6.io/ket-qua-bong-da/"
                >
                  ket qua bong da
                </a>{" "}
              </b>
              trực tiếp tất cả các giải đấu trên thế giới nhanh nhất chính xác
              nhất
            </p>
            <p className="text-[16px] font-light">
              Những trận đang được diễn ra sẽ hiện lên đầu có biểu tượng live,
              những trận đã kết thúc sẽ ở bên dưới các bạn kéo xuống để xem. Hệ
              thống tự động cập nhật kqbd 24/24 bạn không cần tải lại trang.
            </p>
            <p className="text-[16px] font-light mb-2">
              Mẹo : Ctr + F để tìm trận theo dõi
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-1">
            {listLeague?.map((item, index) => {
              return (
                <li
                  className="!ml-0 !mb-0 "
                  onClick={() => setListActive(item)}
                  key={index}
                >
                  <div
                    className={`bg-[#EFEFEF] py-1 flex justify-center  items-center cursor-pointer text-[#000] ${
                      listActive?.name === item?.name &&
                      "bg-gradient-to-r from-red-500 to-teal-400 text-[#fff]"
                    }`}
                  >
                    <div className="line-clamp-1 !px-2">{item?.name}</div>
                  </div>
                </li>
              );
            })}
          </ul>
          {listActive && (
            <img
              src={listActive.imgUrl}
              alt={listActive.name}
              className="mt-4 mx-auto w-full h-[340px] lg:h-[450px]"
            />
          )}

          {Object.keys(roundByLeague)
            .filter((status) => parseInt(status) === -1)
            .map((status) => (
              <div key={status}>
                {Object.keys(roundByLeague[status])
                  .reverse()
                  .map((round) => (
                    <div key={round}>
                      <div className="!text-[18px] !text-[#000]  py-2 ">
                        KẾT QUẢ VÒNG {round}
                      </div>
                      <div className="">
                        {Object.keys(roundByLeague[status][round]).map(
                          (time) => (
                            <div key={time}>
                              <div className="bg-[#efefef] capitalize py-2 text-center text-[14px] font-normal">
                                {time}
                              </div>
                              <ul>
                                {roundByLeague[status][round][time].map(
                                  (item, index) => (
                                    <li className="!ml-0 !mb-0" key={index}>
                                      <div className="flex justify-between items-center border-b-[1px] border-solid border-[#ebebeb]">
                                        <div className="w-[21%] md:w-[10%] text-[#000] text-[14px] !font-medium">
                                          {dayjs
                                            .unix(item.matchTime)
                                            .format("HH:mm  DD/MM")}
                                        </div>
                                        <div className="w-[90%] flex justify-center items-center gap-2 py-2">
                                          <div className="w-[30%] md:w-[20%] flex justify-end items-center gap-2 text-[16px] font-light">
                                            <span className="line-clamp-1">
                                              {item?.homeName}
                                            </span>
                                            {item.homeLogo === null ? (
                                              <img
                                                alt={item.homeName}
                                                loading="lazy"
                                                className="w-8 h-8 object-contain rounded-full"
                                                src="http://keonhacai6.io/wp-content/uploads/2024/04/CLB-MacDinh.svg"
                                              />
                                            ) : (
                                              <img
                                                alt={item.homeName}
                                                loading="lazy"
                                                className="w-8 h-8 object-contain rounded-full"
                                                src={item.homeLogo}
                                              />
                                            )}
                                          </div>
                                          <div className="bg-[#363636] w-[15%] md:w-[10%] lg:w-[5%] flex items-center gap-1 justify-center text-[12px] p-1 text-[#fff]  ">
                                            {item?.status === 0 ? (
                                              <div className="flex items-center gap-1">
                                                <span>?</span>
                                                <span>-</span>
                                                <span>?</span>
                                              </div>
                                            ) : (
                                              <div className="flex items-center gap-2">
                                                <span className="!text-[14px] !font-normal">
                                                  {item?.homeScore}
                                                </span>
                                                <span className="text-[14px] !font-thin">
                                                  |
                                                </span>
                                                <span className="!text-[14px] !font-normal">
                                                  {item?.awayScore}
                                                </span>
                                              </div>
                                            )}
                                          </div>
                                          <div className="w-[30%] md:w-[20%]  flex justify-start items-center gap-2 text-[16px] font-light">
                                            {item.awayLogo === null ? (
                                              <img
                                                alt={item.awayName}
                                                loading="lazy"
                                                className="w-8 h-8 object-contain rounded-full"
                                                src="http://keonhacai6.io/wp-content/uploads/2024/04/CLB-MacDinh.svg"
                                              />
                                            ) : (
                                              <img
                                                alt={item.awayName}
                                                loading="lazy"
                                                className="w-8 h-8 object-contain rounded-full"
                                                src={item.awayLogo}
                                              />
                                            )}

                                            <span className="line-clamp-1">
                                              {" "}
                                              {item?.awayName}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Tylekeo;
