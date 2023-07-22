import {
  SelectedItemBottom,
  SelectedItemBoxLayer,
  SelectedItemCounter,
  SelectedItemDelete,
} from "./style";
import { HiXMark, HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
/**
 * @param {string} itemtext - 상품 정보
 * @param {string} counter - 수량
 * @param {string} price - 가격
 * @param {function} onClickPlus - 수량 증가 함수
 * @param {function} onClickMinus - 수량 감소 함수
 * @param {function} onClickCounter - 수량 변경 함수
 * @param {function} onClickDelete - 삭제 함수
 * 사이즈는 부모 컴포넌트에서 지정
 *
 */
export const SelectedItemBox = ({
  itemtext = "색상: 기본 / 구성 및 사이즈: 기본기본기본기본",
  counter = "0",
  price = "0",
  onClickPlus = () => {},
  onClickMinus = () => {},
  onClickCounter = () => {},
  onClickDelete = () => {},
}) => {
  return (
    <SelectedItemBoxLayer>
      <h2>{itemtext}</h2>
      <SelectedItemDelete>
        <HiXMark onClick={onClickDelete} />
      </SelectedItemDelete>
      <SelectedItemBottom>
        <SelectedItemCounter>
          <HiMinusSmall className="button" onClick={onClickMinus} />
          <button onClick={onClickCounter}>{counter}</button>
          <HiPlusSmall className="button" onClick={onClickPlus} />
        </SelectedItemCounter>
        <span>{price}원</span>
      </SelectedItemBottom>
    </SelectedItemBoxLayer>
  );
};
