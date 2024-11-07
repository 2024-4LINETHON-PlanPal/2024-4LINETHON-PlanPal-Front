import { PromiseItemBase } from "./PromiseItemBase";
import starIconOff from "assets/promise/star-icon-off.svg";
import starIconOn from "assets/promise/star-icon-on.svg";

export function PromiseItem1(props) {
    return (
      <PromiseItemBase
        {...props}
        title="모임1"
        host="수진"
        count="3"
        datetime="2024. 10. 19 22시"
        memo="메모1"
        iconSrc={{ on: starIconOn, off: starIconOff }}
        showShareButton={true}
        showModifyButton={true}
        status="confirming"
      />
    );
  }

export function PromiseItem2(props) {
  return (
    <PromiseItemBase
      {...props}
      title="모임2"
      host="꼉"
      count="2"
      datetime="2024. 11. 07 13시"
      memo="메모2"
      iconSrc={{ on: starIconOn, off: starIconOff }}
      showStatusButton={true}
      status="confirming"
    />
  );
}

export function PromiseItem3(props) {
  return (
    <PromiseItemBase
      {...props}
      title="모임3"
      host="박태경"
      count="5"
      datetime="2024. 11. 06 13시"
      memo="메모2"
      iconSrc={{ on: starIconOn, off: starIconOff }}
      showStatusButton={true}
      status="voting"
    />
  );
}

export function PromiseItem4(props) {
  return (
    <PromiseItemBase
      {...props}
      title="모임4"
      host="가으니"
      count="2"
      datetime="2024. 11. 05 13시"
      memo="메모2"
      iconSrc={{ on: starIconOn, off: starIconOff }}
      showShareButton={true}
      showModifyButton={true}
    />
  );
}

export function PromiseItem5(props) {
    return (
      <PromiseItemBase
        {...props}
        title="모임5"
        host="박태경"
        count="5"
        datetime="2024. 11. 06 13시"
        memo="메모2"
        iconSrc={{ on: starIconOn, off: starIconOff }}
        showStatusButton={true}
        status="voting"
      />
    );
  }
  
  export function PromiseItem6(props) {
    return (
      <PromiseItemBase
        {...props}
        title="모임6"
        host="가으니"
        count="2"
        datetime="2024. 11. 05 13시"
        memo="메모2"
        iconSrc={{ on: starIconOn, off: starIconOff }}
        showShareButton={true}
        showModifyButton={true}
      />
    );
  }
