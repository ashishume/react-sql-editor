import style from "./style.module.scss";
const TextEditor = ({ content, handleChange }: any) => {
  return (
    <textarea
      value={content}
      className={style["sql-editor"]}
      onChange={handleChange}
      placeholder="Enter your SQL query here..."
    />
  );
};

export default TextEditor;
