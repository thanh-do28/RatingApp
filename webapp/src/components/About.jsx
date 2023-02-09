import React from "react";
import WidgetWrapper from "../components/WidgetWrapper";
import rank from "../assets/image/rank.jpg";
import All from "./ContentHistory/All";

function Intro() {
  return (
    <WidgetWrapper>
      <h1>ỨNG DỤNG RATING</h1>
      <div className='intro-content'>
        {" "}
        <div className='intro-content-left'>
          <h4>Trao gửi yêu thương</h4>
          <p>
            Rating App cho phép bạn đăng tin nhắn cảm ơn và khen ngợi thành viên
            khác, qua đó có thể nhận điểm thưởng của app để quy đổi ra những
            phần thưởng giá trị.
          </p>
        </div>
        <div className='intro-content-right'>
          <All />
        </div>
      </div>
      <div className='intro-content-rank'>
        <div>
          <h4>Hệ thống Xếp hạng</h4>
        </div>
        <div className='intro-rank'>
          <img src={rank} alt='rank' />
        </div>
      </div>
      <div className='intro-content'>
        <h4>Hệ thống Chat trực tuyến</h4>
      </div>
    </WidgetWrapper>
  );
}

export default Intro;

// Voting App được thiết kế cho phép người dùng gửi lời cảm ơn, khen ngợi
// hay khuyến khích đến một cá nhân trong tổ chức. Những trải nghiệm tích
// cực từ lòng biết ơn, sự ngưỡng mộ hay những phần thưởng cảm xúc làm tăng
// sự an toàn về tâm lý của các cá nhân để từ đó tạo ra một tổ chức vững
// mạnh
