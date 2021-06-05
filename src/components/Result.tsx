import "../styles/Result.css";

interface FormData {
  rem : string;
  mod : string;
}

interface ResponseData {
  solution : number;
  product : number;
  pp : number[];
  inverse : number[];
  result : number;
}

interface Props {
  solution : ResponseData | undefined;
  input : FormData[];
}

const Result : React.FC<Props> = ({solution, input}) => {
  const length = input.length;
  return (
    <div id="result-container" >
      <h2>Langkah Penyelesaian</h2>
      <div className="step">
        <h3>1. Hitung hasil perkalian semua nilai modulus</h3>
        <div>m =&nbsp;{input.map((key, index) => {
          if (index === length - 1) {
            return (
              <p key={index}>{key.mod} = {solution?.product}</p>
            )
          } else {
            return (
              <p key={index}>{key.mod} *&nbsp;</p>
            )
          }
        })}
        </div>
      </div>
      <div className="step">
        <h3>2. Hitung M<sub>k</sub> perkalian semua modulus kecuali m<sub>k</sub></h3>
        {solution?.pp.map((key, index) => {
          return (
            <p key={index}>M<sub>{index+1}</sub> = {key}</p>
          )
        })}
      </div>
      <div className="step">
        <h3>3. Hitung y<sub>k</sub> yang merupakan balikan M<sub>k</sub> dalam modulus m<sub>k</sub></h3>
        {solution?.inverse.map((key, index) => {
          return (
            <p key={index}>y<sub>{index+1}</sub> = {key}</p>
          )
        })}
      </div>
      <div className="step">
        <h3>4. Hitung solusi sistem kekongruenan linier</h3>
        <p>x = a<sub>1</sub>M<sub>1</sub>y<sub>1</sub> + a<sub>2</sub>M<sub>2</sub>y<sub>2</sub> + ... + a<sub>n</sub>M<sub>n</sub>y<sub>n</sub> = {solution?.result}</p>
      </div>
      <div className="step">
        <h3>5. Lakukan pembagian antara x dengan m</h3>
        <p>{solution?.result} % {solution?.product} = {solution?.solution}</p>
      </div>
      <div className="step">
        <h3>6. Oleh karena itu x ≡ {solution?.solution} (mod {solution?.product})</h3>
      </div>
    </div>
  );
};

export default Result;