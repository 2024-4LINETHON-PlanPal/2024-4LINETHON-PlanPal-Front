import React, { useState, useEffect } from "react";
import axios from "axios";
import x from "assets/calendar/x.svg";
import round from "assets/calendar/round.svg";
import * as C from "./CateModalStyle.js";

const CateModal = ({ onClose, categoryId = null }) => {
  const [isPublic, setIsPublic] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const username = localStorage.getItem("username");

  const togglePublic = () => {
    setIsPublic((prev) => !prev);
  };

  const colors = ["#FF6A3B", "#4076BA", "#C04277", "#16857A", "#A97C50"];

  useEffect(() => {
    if (categoryId !== null) {
      axios
        .get(`https://planpal.kro.kr/plan/categories/${username}/${categoryId}/`)
        .then((response) => {
          if (response.status === 200) {
            const categoryData = response.data;
            setCategoryName(categoryData.title);
            setSelectedColor(categoryData.color);
            setIsPublic(categoryData.is_public);
          }
        })
        .catch((error) => console.error("카테고리 정보 불러오기 실패:", error));
    }
  }, [username, categoryId]);

  const handleSave = async () => {
    if (categoryName.trim() === "") {
      alert("카테고리 이름을 입력해주세요.");
      return;
    }

    if (!selectedColor) {
      alert("색상을 선택해주세요.");
      return;
    }

    if (categoryName.trim() === "약속") {
      alert("카테고리 이름에 '약속'을 사용할 수 없습니다.");
      return;
    }

    const requestData = {
      title: categoryName,
      color: selectedColor,
      is_public: isPublic,
    };

    try {
      let response;
      if (categoryId) {
        response = await axios.put(`https://planpal.kro.kr/plan/categories/${username}/${categoryId}/`, requestData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        response = await axios.post(`https://planpal.kro.kr/plan/categories/${username}/`, requestData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      // console.log(response.data);
      onClose();
    } catch (error) {
      console.error("카테고리 저장 실패:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://planpal.kro.kr/plan/categories/${username}/${categoryId}/`);
      alert("카테고리가 삭제되었습니다.");
      onClose();
    } catch (error) {
      console.error("카테고리 삭제 실패:", error);
    }
  };

  return (
    <C.Background>
      <C.ModalWrap>
        <C.Title>
          <div className="text">카테고리 정보</div>
          <C.CloseButton src={x} alt="닫기" onClick={onClose} />
        </C.Title>
        <h5>카테고리 정보를 확인해보세요</h5>

        <C.Selection>
          <C.Name>
            <div className="title">이름</div>
            <input
              className="textfield"
              placeholder="STUDY"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </C.Name>
          <C.Color>
            <div className="title">색상</div>
            <div className="colorpalettes">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color"
                  style={{
                    backgroundColor: color,
                    border: selectedColor === color ? "1px solid black" : "1px solid transparent",
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </C.Color>
          <C.Public>
            <div className="title">공개</div>
            <div className={`toggle`} onClick={togglePublic}>
              {isPublic ? (
                <div className="public">
                  <p>공개</p>
                  <img src={round} alt="" />
                </div>
              ) : (
                <div className="private">
                  <img src={round} alt="" />
                  <p>비공개</p>
                </div>
              )}
            </div>
          </C.Public>
        </C.Selection>
        <C.ButtonContainer>
          {categoryId ? (
            <C.Button className="remove" onClick={handleDelete}>
              삭제하기
            </C.Button>
          ) : (
            <C.Button className="save" onClick={handleSave}>
              저장하기
            </C.Button>
          )}
        </C.ButtonContainer>
      </C.ModalWrap>
    </C.Background>
  );
};

export default CateModal;
