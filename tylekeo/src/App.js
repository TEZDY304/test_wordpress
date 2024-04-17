import LichThiDau from "./components/LichThiDau";
import Tylekeo from "./components/tylekeo";

function App() {
  return (
    <div>
      {/* <Tylekeo /> */}
      <div>
        <h2 className="text-[#000] !font-bold">
          Các trận <b className="text-[#c60404]">đã thi đấu</b>
        </h2>
        <div className="flex items-center bg-[#a3d3f5]">
          <div className="w-[20%] pl-2 md:pl-3 text-[13px] text-[#fff] border-r-[1px] border-solid border-[#fff]">
            Ngày/giờ
          </div>
          <div className="w-[80%] md:w-[62%] lg:w-[61%] text-center text-[13px] text-[#fff]">
            Trần đấu
          </div>
        </div>
      </div>
      <LichThiDau />
    </div>
  );
}

export default App;
