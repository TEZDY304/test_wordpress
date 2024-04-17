import React, { useEffect, useState } from "react";
// import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Highlight = () => {
  const [highlights, setHighlights] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.553328.com/api/get-highlights?current=${
            currentPage + 1
          }&pageSize=12`
        );
        const data = await response.json();
        setHighlights(data.value.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    document.cookie = "cookieName=someValue; SameSite=None; Secure";
  }, [currentPage]);

  return (
    <div className="max-w-[1390px] mx-auto ">
      <div className="">
        <div className="highlight">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-4">
            {highlights?.map((item, index) => (
              <li className="!ml-0" key={index}>
                <Link
                  to={`/${item?.slugUrl}`}
                  className="flex flex-row md:flex-col gap-2 md:gap-0 "
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
                  <div className="w-[60%] md:w-full  pt-6 ">
                    <h3 className="overflow-hidden line-clamp-2 !text-[#000] !text-[15px] md:!text-[20px] !font-bold hover:!text-[#fee78b]">
                      {item?.title}
                    </h3>
                    <span className="mt-6 float-left w-[80px] h-[3px] bg-[url('http://keonhacai6.io/wp-content/uploads/2024/04/line.svg')]"></span>
                    {/* <p className="text-[14px] font-normal text-[#F2F3F3] mt-2">
                      {`Ngày ${format(
                        new Date(item?.createdDate),
                        "dd-MM-yyyy"
                      )} `}
                    </p> */}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pagination">
          <div className="flex justify-center items-center pb-3">
            <ReactPaginate
              pageCount={10}
              marginPagesDisplayed={0}
              pageRangeDisplayed={2}
              onPageChange={handlePageChange}
              containerClassName={"pagination flex gap-[10px]"}
              activeClassName={
                "active bg-[#E19A00] border-[#E19A00] !text-[#fff]"
              }
              pageClassName={
                "number py-1 !text-[#000] border-[1px] border-solid border-[#000] rounded-full !ml-0 cursor-pointer"
              }
              previousClassName={`${
                currentPage === 0
                  ? "hidden"
                  : "number py-1 !text-[#000] border-[1px] border-solid border-[#000] rounded-lg !ml-0 cursor-pointer"
              }`}
              nextClassName={
                "number py-1 !text-[#000] border-[1px] border-solid border-[#000] rounded-lg !ml-0 cursor-pointer"
              }
              breakClassName={
                "number py-1 !text-[#000] border-[1px] border-solid border-[#000] rounded-lg !ml-0 cursor-pointer"
              }
              disabledClassName={
                "number py-1 !text-[#000] border-[1px] border-solid border-[#000] rounded-lg !ml-0 cursor-not-allowed"
              }
            />
          </div>
        </div>
        {/* <div className="introduce">
          <h1 className="text-[#F2F3F3] text-[24px] font-bold py-4">
            LỜI <strong className="text-[#009B3A]">GIỚI THIỆU</strong>
          </h1>
          <Introduce />
        </div> */}
      </div>
    </div>
  );
};

export default Highlight;
