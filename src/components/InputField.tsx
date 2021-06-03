import "../styles/InputField.css";
interface Props {
  rem : string;
  mod : string;
  index : number;
  setValue : (e : React.FormEvent<HTMLInputElement>, value : number) => void
}

const InputField : React.FC<Props> = ({rem, mod, index, setValue}) => {
  return (
    <div className="input-field">
      <p>X ≡ </p>
      <input
        type="text"
        name="rem"
        placeholder="rem"
        value={rem}
        onChange={(e) => setValue(e, index)}
        pattern="[0-9]+"
        required
      />
      <p>( mod </p>
      <input
        type="text"
        name="mod"
        placeholder="mod"
        value={mod}
        onChange={(e) => setValue(e, index)}
        pattern="[0-9]+"
        required
      />
      <p> )</p>
    </div>
  );
};

export default InputField;