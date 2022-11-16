const MyButton = ({ text, type, onClick }) => {
  // 이상한 타입의 버튼도 default로 고정시키는 방법
  const btnType = ["positive", "negative"].includes(type) ? type : "defalut";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defalutProps = {
  type: "default",
};

export default MyButton;
