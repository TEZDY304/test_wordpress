import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const Video = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [highlights, setHighlights] = useState([]);
  const [visibleHighlights, setVisibleHighlights] = useState(9);
  const { slugUrl } = useParams();

  const opts = {
    width: "100%",
    height: "666",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.553328.com/api/get-highlights?current=1&pageSize=120`
        );
        const data = await response.json();

        const foundVideo = data.value.data.find(
          (item) => item.slugUrl === slugUrl
        );
        setVideo(foundVideo);
        setHighlights(data.value.data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    document.cookie = "cookieName=someValue; SameSite=None; Secure";
  }, [slugUrl]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowMoreHighlights = () => {
    setVisibleHighlights((prevCount) => prevCount + 3);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen"></div>
    );
  if (!video) return <div>Không tìm thấy video.</div>;

  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <div className="video ">
          <h1 className="!text-[#000] !text-[16px] md:!text-[24px] !font-bold py-3 uppercase">
            {`Xem lại trận đấu ${video?.title}`}
          </h1>
          <div>
            <div className="flex justify-between items-center gap-2">
              <div className="iframe-highlight w-full ">
                <YouTube videoId={video?.videoUrl.split("=")[1]} opts={opts} />
              </div>
            </div>
            {/* Video date */}
            <h2 className="!text-[#000] text-center mt-3 !text-[16px] md:!text-[24px] !font-bold  ">
              {`Xem lại trận đấu ${video?.title} Ngày ${format(
                new Date(video?.createdDate),
                "dd/MM/yyyy"
              )}`}
            </h2>
          </div>
        </div>
        <div className="videolienquan">
          <div className="flex justify-start items-center gap-3 py-4">
            <div className=" w-[4px] h-[30px] bg-[#E19A00] rounded-[0_5px_5px_0]"></div>
            <p className="!text-[16px] md:!text-[24px] !mb-0 !text-[#FEA013] md:text-2xl font-bold py-2 uppercase">
              highlight khác
            </p>
          </div>
          {/* List of highlights */}

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-4">
            {highlights.slice(0, visibleHighlights).map((item, index) => (
              <li className="!ml-0" key={index}>
                <Link
                  to={`/${item?.slugUrl}`}
                  className="flex flex-row md:flex-col gap-2 md:gap-0"
                  onClick={scrollToTop}
                >
                  <div className="relative w-[40%] md:w-full">
                    <img
                      className="w-full h-[110px] md:h-[212px] xl:h-[250px]"
                      src={item?.imageUrl}
                      alt={item?.title}
                    />
                    <div className="absolute bottom-3 left-2 md:left-4 w-[24px] h-[24px] bg-white  text-[#921b71] hover:scale-110  rounded-[50%] flex justify-center items-center">
                      <FontAwesomeIcon
                        className="  w-[10px] h-[10px]"
                        icon={faPlay}
                      />
                    </div>
                  </div>
                  <div className="w-[60%] md:w-full  pt-6  ">
                    <h3 className="overflow-hidden line-clamp-2  text-[#000] !text-[15px] md:!text-[20px] !font-bold hover:!text-[#fee78b]">
                      {item?.title}
                    </h3>
                    <span className="mt-6 float-left w-[80px] h-[3px] bg-[url('http://keonhacai6.io/wp-content/uploads/2024/04/line.svg')]"></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {visibleHighlights < highlights.length && (
            <div className="flex justify-center py-3">
              <button
                onClick={handleShowMoreHighlights}
                className="w-full bg-gradient-to-r from-red-500 to-teal-400 text-[15px] px-10 py-2 text-[#fff] rounded-lg"
              >
                Các trận đấu hightlight khác
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
