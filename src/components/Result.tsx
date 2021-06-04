import "../styles/Result.css";

interface Props {
  solution : number | undefined
}
const Result : React.FC<Props> = ({solution}) => {
  return (
    <div id="result-container" >
      <h2>HASIL</h2>
      <p>X adalah {solution}</p>
    </div>
  );
};

export default Result;