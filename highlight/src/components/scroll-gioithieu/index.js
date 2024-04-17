import React, { useEffect, useState } from "react";

const Introduce = () => {
  const [headings, setHeadings] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const headings = document.querySelectorAll(".content h1");
    setHeadings(Array.from(headings));
    setActiveIndex(0);
  }, []);

  const handleClick = (index) => {
    headings[index].scrollIntoView({ behavior: "smooth" });
    setActiveIndex(index);
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-3 ">
        <div
          id="toc"
          className="w-full lg:w-[30%] table-of-contents  flex flex-col bg-[#141417] h-[280px] text-[#717983] text-[14px] xl:text-[15px] font-normal"
        >
          {headings.map((heading, index) => (
            <a
              key={index}
              href={`#section${index + 1}`}
              onClick={() => handleClick(index)}
              className={
                activeIndex === index
                  ? "active bg-[#1A1D23] p-3"
                  : "p-3 hover:bg-[#1A1D23]"
              }
            >
              {heading.textContent}
            </a>
          ))}
        </div>
        <div className="content w-full lg:w-[70%] text-[14px] lg:text-[17px] font-light bg-[#1A1D23] p-5 text-[#F2F3F3] h-[710px] overflow-y-auto">
          <p>
            <b>Xôi Lạc TV</b> chính là địa chỉ trang web mà anh em nên truy cập.
            Khi muốn xem <b>hightlight bóng đá</b> của bất kỳ trận đấu nào vừa
            diễn ra. Qua đó biết được toàn bộ những diễn biến chính của hai đội
            bóng trong trận đấu như thế nào trong thời gian ngắn nhất.
          </p>
          <h1 className="text-[24px] font-bold py-2">
            Hightlight bóng đá là gì?
          </h1>
          <p className="mb-2">
            <b className="text-[#009B3A]">Highlight</b> bóng đá đơn giản là một
            video dài từ 5 đến 10 phút. Tóm tắt toàn bộ những diễn biến chính
            của trận đấu bóng đá vừa diễn ra. Để giúp mọi người không cần phải
            theo dõi toàn bộ trận đấu. Nhưng vẫn biết được những tính huống dẫn
            đến bàn thắng, các pha bóng nguy hiểm hay các pha phạm lỗi.
          </p>
          <p className="mb-2">
            Như anh em đã biết, các giải bóng đá lớn thường tại Châu Âu. Đương
            nhiên thời gian thi đấu sẽ trễ hơn so với giờ Việt Nam khá là nhiều.
            Chính vì thế không phải anh em nào cũng có điều kiện để xem trực
            tiếp trận đấu mình thích. Thay vào đó, mọi người sẽ xem lại
            highlight khi trận đấu chính thức kết thúc.
          </p>
          <p>
            Cho nên số lượng người xem video highlight ở thời điểm hiện tại khá
            đông đảo. Đa số mọi người, khi muốn xem highlight của bất kỳ trận
            đấu nào đều truy cập vào Xoilac TV. Bởi hiện tại, chúng tôi là
            website cung cấp highlight hàng đầu.
          </p>
          <h1 className="text-[24px] font-bold py-2">
            Hightlight bóng đá tất cả các trận hàng đầu
          </h1>
          <p className="mb-2">
            Nghe qua thì anh em sẽ nghĩ rằng để tạo ra một video highlight khá
            đơn giản. Nhưng thực sự không phải như vậy. Bởi để tạo ra một
            highlight bóng đá với toàn bộ những diễn biến chính và chất lượng
            cao. Người tạo video phải biết cắt những tình huống nào. Sau đó tiến
            hành ghép lại, để tạo được một video hoàn chỉnh và sinh động nhất.
          </p>
          <p>
            Hiện tại, theo như đánh giá
            <b className="text-[#009B3A]">Xoi Lac TV Offical</b> chính là
            website cập nhật video highlight hàng đầu. Mà anh em nên truy cập,
            nếu muốn xem highlight của bất kỳ trận đấu nào. Bởi những lý do sau:
          </p>
          <h1 className="text-[24px] font-bold py-2">
            Hightlight video tốc độ cao
          </h1>
          <p className="mb-2">
            Khi có bất kỳ trận đấu bóng đá nào vừa diễn ra, dù thuộc các giải
            đấu hàng đầu Châu Âu hay chỉ là giải cỏ. Ngay lập tức, chúng tôi sẽ
            cung cấp video highlight ngay lập tức. Để chỉ cần vào đây, anh em sẽ
            tìm và xem được highlight trận đấu mà mình không thể xem trực tiếp.
          </p>
          <p className="mb-2">
            Nội dung trong video highlight mà chúng tôi cung cấp cũng khá đầy
            đủ. Mà đảm bảo rằng, anh em có thể xem lại được toàn bộ những diễn
            biến chính của trận đấu như bàn thắng, những pha bóng nguy hiểm, các
            pha phạm lỗi,… Qua đó không cần xem trực tiếp nhưng vẫn biết hai đội
            bóng thi đấu như thế nào.
          </p>
          <h1 className="text-[24px] font-bold py-2">
            Xoi Lac TV cập nhật hightlight bóng đá full HD
          </h1>
          <p className="mb-2">
            Khi truy cập vào <b>Xoilac365.tv</b> để xem <b>highlight bóng đá</b>
            của những trận đấu mà mình không thể theo dõi trực tiếp. Anh em sẽ
            thấy chất lượng trong video mà chúng tôi cung cấp khá cao, cụ thể
            như sau:
          </p>
          <ul className="list-disc ml-5 mb-2">
            <li>
              Hình ảnh trong video sẽ có độ phân giải cao, nên cực kỳ sắc nét{" "}
            </li>
            <li>Âm thanh thì sống động với âm lượng cũng khá lớn</li>
            <li>
              Tốc độ load của video cũng khá mượt mà. Mà đảm bảo rằng sẽ không
              có chuyện bị giật hay lag
            </li>
            <li>
              Màn hình cũng có kích thước đúng chuẩn. Qua đó anh em có thể theo
              dõi trận đấu một cách trọn vẹn
            </li>
            <li>
              Thêm nữa, chúng tôi cũng chỉ cập nhật những video có bình luận
              bằng tiếng Việt. Giúp trải nghiệm xem video của anh em trở nên tốt
              hơn.
            </li>
          </ul>
          <h1 className="text-[24px] font-bold py-2">
            Hướng dẫn cách xem hightlight bóng đá tại Xoi Lac TV
          </h1>
          <p className="mb-2">
            Để tìm và xem được highlight bóng đá của trận đấu mình thích tại
            trang web Xôi Lạc TV khá đơn giản. Khi anh em chỉ cần thực hiện theo
            các bước sau:
          </p>
          <ol className="list-decimal ml-5 mb-2">
            <li>
              Truy cập vào trang web Xôi Lạc TV bằng điện thoại hay máy tính đều
              được
            </li>
            <li>Chọn vào mục Highlight</li>
            <li>Tìm trận đấu bóng đá mà mình muốn xem video highlight</li>
            <li>Cuối cùng anh em chỉ cần nhấn vào để xem là xong.</li>
          </ol>
          <p>
            Trang web của chúng tôi tương thích với gần như tất cả các hệ điều
            hành khác nhau. Cho nên anh em có thể xem bằng bất kỳ thiết bị nào
            mình muốn.
          </p>
          <h1 className="text-[24px] font-bold py-2">
            Vì sao nên xem hightlight bóng đá tại Xoi Lac TV
          </h1>
          <p className="mb-2">
            Có thể khẳng định rằng, <b>Xoi Lac TV</b> chính là website mà anh em
            nên chọn ngay lập tức. Nếu như đang muốn xem video highlight bóng đá
            của những trận đấu vừa diễn ra. Bởi các lý do chính sau:
          </p>
          <ul className="list-disc ml-5 mb-2">
            <li>
              Chỉ cần vào đây, anh em có thể tìm và xem được highlight của bất
              kỳ trận đấu nào vừa diễn ra. Dù trận đấu đó có thuộc những giải
              bóng đá hàng đầu hay chỉ là các giải nhỏ
            </li>
            <li>
              Thời gian mà chúng tôi cập nhật highlight lên trang web cũng khá
              sớm, cụ thể là ngay khi trận đấu vừa kết thúc
            </li>
            <li>
              Khi xem highlight tại đây, anh em sẽ biết được toàn bộ những diễn
              biến chính trong trận đấu. Để biết hai đội bóng thi đấu như thế
              nào trong thời gian ngắn
            </li>
            <li>
              Chất lượng trong video highlight mà chúng tôi cung cấp cũng khá
              cao, từ hình ảnh, âm thanh cho đến tốc độ load.
            </li>
          </ul>
          <p>
            Qua bài viết này, có thể khẳng định rằng <b>Xôi Lạc TV</b> chính là
            trang web cập nhật hightlight bóng đá đầy đủ và chất lượng nhất hiện
            nay. Mà anh em nên truy cập, khi đang muốn xem lại highlight của bất
            kỳ trận đấu nào vừa diễn ra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
