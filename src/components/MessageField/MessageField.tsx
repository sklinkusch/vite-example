type Props = {
  text: string;
};

const MessageField = ({ text }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <p
        style={{
          fontSize: "1.6rem",
          lineHeight: 2,
          fontWeight: 700,
          textAlign: "center"
        }}>
        {text}
      </p>
    </div>
  );
};

export default MessageField;
