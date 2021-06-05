import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import InputField from "./InputField";
import FilledButton from "./FilledButton";
import Result from "./Result";
import "../styles/Form.css";

interface FormData {
  rem : string;
  mod : string;
}
interface ResponseData {
  solution : number;
  product : number;
  pp : number[];
  inverse : number[];
  result: number;
}

const Form : React.FC = () => {
  const [inputList, setInputList] = useState<FormData[]>([{ rem: '', mod: '' }, { rem: '', mod: '' }]);
  const [solve, setSolve] = useState<boolean>(false);
  const [solution, setSolution] = useState<ResponseData | undefined>();
  const {REACT_APP_BACKEND} = process.env;

  const handleInputChange = (e: React.FormEvent<HTMLInputElement> , index: number) => {
    const { name, value } = e.currentTarget;
    const list = [...inputList];
    if (name === "mod") {
      list[index].mod = value;
    } else {
      list[index].rem = value;
    }
    setInputList(list);
  };

  const handleRemoveClick = () => {
    const list = [...inputList];
    list.splice(list.length-1, 1);
    setSolve(false);
    setInputList(list);
  };

  const handleAddClick = () => {
    setSolve(false);
    setInputList([...inputList, { rem: "", mod: "" }]);
  };

  const handleSubmit = (e : React.FormEvent<EventTarget>) => {
    e.preventDefault();
    axios.post(`${REACT_APP_BACKEND}/solve`, inputList)
    .then((response : AxiosResponse<ResponseData>) => {
      setSolution(response.data);
      setSolve(true);
    });
  }

  return (
    <>
      <form id="form-list" onSubmit={handleSubmit}>
        <div className="btn-box">
          <FilledButton
            name="Add Equation"
            submit={false}
            background="#E0AAFF"
            width="40%"
            color="#10002B"
            handleClick={handleAddClick}
          />
          {inputList.length !== 2 && 
          <FilledButton
            name="Remove Equation"
            submit={false}
            background="#E0AAFF"
            width="40%"
            color="#10002B"
            handleClick={handleRemoveClick}
          />}
        </div>
        {inputList.map((key,index) => {
          return (
            <div key={index} className="box">
              <InputField 
                rem={key.rem} 
                mod={key.mod}
                index={index}
                setValue={handleInputChange}
              />
            </div>
          )
        })}
        <FilledButton
            name="Solve"
            submit={true}
            background="#E0AAFF"
            width="50%"
            color="#10002B"
          />
      </form>
      {solve && <Result solution={solution} input={inputList} />}
    </>
  );
};

export default Form;