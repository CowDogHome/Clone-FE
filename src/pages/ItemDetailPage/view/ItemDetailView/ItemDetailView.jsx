import { useEffect, useMemo, useState } from "react";
import {
  Button,
  CircleButton,
  RoundButton,
  SelectedItemBox,
  Selector,
} from "../../../../components";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";

export const ItemDetailView = ({
  brandName,
  itemName,
  rating,
  discount,
  price,
  discountprice,
  benefit,
  color,
  size,
}) => {
  const [currentSelectedSelector, serCurrentSelectedSelector] = useState(0);

  const [selectedOption, setSelectedOption] = useState(["", ""]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const isSelectFinished = selectedOption.every((e) => e);
  const heartCount = useMemo(() => {
    return Math.floor(Math.random() * 99999).toLocaleString();
  }, []);
  const reviewCount = useMemo(() => Math.floor(Math.random() * 999), []);
  const priceAddedSize = size.map((e, i) => {
    return e + ` (+ ${(5000 * i).toLocaleString()}원)`;
  });

  const [additionalPrices, setAdditionalPrices] = useState([]);

  console.log(additionalPrices);

  const storeAdditionalPrices = (price) => {
    setAdditionalPrices([...additionalPrices, price]);
  };

  const handleClickHeart = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  useEffect(() => {
    selectedOption.every((e) => e) &&
      setSelectedProducts([
        ...selectedProducts,
        {
          itemName: selectedOption.join("/"),
          count: 1,
          price:
            +discountprice + 5000 * additionalPrices[selectedProducts.length],
        },
      ]);

    selectedOption.every((e) => e) && setSelectedOption(["", ""]);
  }, [selectedOption]);

  useEffect(() => {
    const totalPrice = selectedProducts.reduce((prev, cur) => {
      return prev + cur.price * cur.count;
    }, 0);
    setTotalPrice(totalPrice);
  }, [selectedProducts]);

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <span
            style={{
              color: "#656e75",
              fontSize: "14px",
              fontWeight: 700,
              transition: "opacity .1s",
              cursor: "pointer",
              paddingBottom: 8,
            }}
          >
            {brandName}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            marginTop: "-12px",
          }}
        >
          <span
            style={{
              flex: 1,
              fontSize: "22px",
              fontWeight: 400,
            }}
          >
            {itemName}
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={handleClickHeart}
          >
            {isHeartClicked ? (
              <AiFillHeart shadow={false} size={"32px"} color="red" />
            ) : (
              <AiOutlineHeart shadow={false} size={"32px"} color="gray" />
            )}
            <p style={{ fontSize: "11px", color: "#424242", marginTop: "4px" }}>
              {heartCount}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{ color: "#35C5F0", fontWeight: 900, fontSize: "17px" }}>
            {Array(+rating)
              .fill(0)
              .map((e) => {
                return <span key={e}>★</span>;
              })}
          </div>
          <span style={{ color: "#35C5F0", fontWeight: 900, fontSize: "15px" }}>
            {reviewCount}개 리뷰
          </span>
        </div>
        {+discount === 0 ? (
          <></>
        ) : (
          <div
            style={{
              display: "flex",
              fontSize: "16px",
              color: "#656e75",
            }}
          >
            <span style={{ paddingRight: "6px" }}>{discount}%</span>
            <del>{Number(price).toLocaleString()}원</del>
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <span
            style={{ fontWeight: 900, fontSize: "34px", marginRight: "4px" }}
          >
            {Number(discountprice).toLocaleString()}
          </span>
          <span style={{ fontSize: "24px" }}>원</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingBottom: "20px",
          borderBottom: "1px solid #ededed",
        }}
      >
        <div style={{ display: "flex", gap: 10, paddingTop: "18px" }}>
          <div style={{ color: "#828c94", fontSize: "14px" }}>혜택</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 3 }}>
              <b style={{ color: "#292929", fontSize: "14px" }}>{benefit}P</b>
              <span style={{ color: "#292929", fontSize: "14px" }}>적립</span>
              <span style={{ color: "#292929", fontSize: "14px" }}>
                (WELCOME 0.1% 적립)
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ color: "#828c94", fontSize: "14px" }}>배송</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <b style={{ color: "#292929", fontSize: "14px" }}>무료배송</b>
            <div style={{ color: "#292929", fontSize: "14px" }}>
              지금 주문 시 <b style={{ color: "#35c5f0" }}>내일 출발</b>
            </div>
            <span style={{ color: "#292929", fontSize: "14px" }}>일반택배</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M3.972 8.694c0-.26.212-.472.472-.472h12.278a.472.472 0 010 .945H4.444a.472.472 0 01-.472-.473z"
              fill="#35C5F0"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.51 5.5H6.492a1 1 0 00-.93.632l-.99 2.5A1 1 0 005.498 10h13.004a1 1 0 00.927-1.368l-.99-2.5a1 1 0 00-.93-.632zM3.642 8.263a2.002 2.002 0 001.397 2.684V17.5a2.5 2.5 0 002.5 2.5H16.474a2.5 2.5 0 002.487-2.5v-6.553a2.002 2.002 0 001.398-2.684l-.99-2.5a2 2 0 00-1.86-1.263H6.493a2 2 0 00-1.86 1.263l-.99 2.5zM6.04 17.5V11h11.921v6.5a1.5 1.5 0 01-1.487 1.5v-4a2 2 0 00-2-2h-.97a2 2 0 00-2 2v4H7.54a1.5 1.5 0 01-1.5-1.5zm6.464 1.5h2.97v-4a1 1 0 00-1-1h-.97a1 1 0 00-1 1v1h.847a.5.5 0 110 1h-.847v2zM8 13h1.5v1.5H8V13zm-1 0a1 1 0 011-1h1.5a1 1 0 011 1v1.5a1 1 0 01-1 1H8a1 1 0 01-1-1V13z"
              fill="#3F474D"
            ></path>
          </svg>
          <span
            style={{ color: "#525b61", fontWeight: "bold", fontSize: "15px" }}
          >
            이케아
          </span>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            alert("구현 예정");
          }}
          style={{ width: "66px" }}
        >
          <RoundButton
            text="브랜드홈 〉"
            color="lightGray"
            size="small"
            href=""
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          paddingTop: 12,
        }}
      >
        <Selector
          title="컬러"
          options={color}
          focus={!selectedOption[0]}
          onClick={() => {
            serCurrentSelectedSelector(0);
          }}
          storeValue={(optionName) => {
            setSelectedOption([optionName, selectedOption[1]]);
          }}
          isSelectFinished={isSelectFinished}
        />
        <Selector
          title="사이즈"
          options={selectedOption[0] ? priceAddedSize : []}
          focus={selectedOption[0]}
          onClick={() => {
            selectedOption[0] && serCurrentSelectedSelector(1);
          }}
          storeValue={(optionName) => {
            setSelectedOption([selectedOption[0], optionName]);
          }}
          isSelectFinished={isSelectFinished}
          storeAdditionalPrices={storeAdditionalPrices}
        />
      </div>

      {selectedProducts.map((e, i) => {
        const { itemName: itemText, count, price } = e;

        const additionalPriceCalculatedPrice = String(
          +discountprice + 5000 * additionalPrices[i]
        );

        const clickPlus = () => {
          const newProductData = {
            ...selectedProducts[i],
            count: selectedProducts[i].count + 1,
          };
          const currentData = [...selectedProducts];
          currentData[i] = newProductData;
          setSelectedProducts(currentData);
        };

        const clickMinus = () => {
          const newProductData = {
            ...selectedProducts[i],
            count: selectedProducts[i].count - 1,
          };
          const currentData = [...selectedProducts];
          currentData[i] = newProductData;
          setSelectedProducts(currentData);
        };

        const deleteProduct = () => {
          const newProductData = selectedProducts.filter((product, index) => {
            return index !== i;
          });

          setSelectedProducts(newProductData);
        };

        return (
          <SelectedItemBox
            item
            key={i}
            itemText={itemText}
            counter={count}
            price={additionalPriceCalculatedPrice}
            onClickPlus={clickPlus}
            onClickMinus={clickMinus}
            onClickDelete={deleteProduct}
            itemtext={itemText}
          />
        );
      })}

      <div style={{ paddingTop: 16, paddingBottom: 16 }}>
        <div style={{ borderTop: "1px solid #ededed" }}></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 18,
        }}
      >
        <span style={{ color: "#2f3438", fontWeight: 400, fontSize: "14px" }}>
          주문금액
        </span>
        <span style={{ color: "#2f3438", fontWeight: 700, fontSize: "28px" }}>
          {totalPrice.toLocaleString()}원
        </span>
      </div>

      <div style={{ display: "flex", gap: 10, paddingTop: 24 }}>
        <Button label="장바구니" theme="empty" size="large" b />
        {selectedProducts.length > 0 ? (
          <Button label="바로구매" theme="filled" size="large" b />
        ) : (
          <Button label="바로구매" theme="gray" size="large" b />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  flex: 4;
  gap: 10;
  flex-direction: column;
  padding-left: 10;
  padding-right: 10;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) {
    max-width: 35%;
    min-width: 320;
  }
`;
