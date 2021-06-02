import "../styles/InputField.css";
interface Props {
  a : string;
  m : string;
  index : number;
  setValue : (e : React.FormEvent<HTMLInputElement>, value : number) => void
}

const InputField : React.FC<Props> = ({a, m, index, setValue}) => {
  return (
    <div className="input-field">
      <p>X ≡ </p>
      <input
        name="a"
        placeholder="a"
        value={a}
        onChange={(e) => setValue(e, index)}
      />
      <p>( mod </p>
      <input
        name="m"
        placeholder="m"
        value={m}
        onChange={(e) => setValue(e, index)}
      />
      <p> )</p>
    </div>
  );
};

export default InputField;