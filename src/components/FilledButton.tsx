import "../styles/FilledButton.css";

interface Props {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: string,
  submit: boolean,
  background: string,
  width: string,
  color: string
}

const FilledButton : React.FC<Props> = ({handleClick, name, submit, background, width, color}) => {
  return (
    <button 
      onClick={handleClick}
      type={submit ? "submit" : "button"}
      style={{background: background, width: width, color: color}}
    >
      {name}
    </button>
  )
}

export default FilledButton;