import { useState } from "react";
import InputField from "./InputField";
import "../styles/Form.css";

const Form : React.FC = () => {
  const [inputList, setInputList] = useState([{ a: "", m: "" }]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement> , index: number) => {
    const { name, value } = e.currentTarget;
    let list = [...inputList];
    if (name === "m") {
      list[index].m = value;
    } else {
      list[index].a = value;
    }
    setInputList(list);
  };

  const handleRemoveClick = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { a: "", m: "" }]);
  };

  return (
    <div id="form-list">
      {inputList.map((key,index) => {
        return (
          <div key={index} className="box">
            <InputField 
              a={key.a} 
              m={key.m}
              index={index}
              setValue={handleInputChange}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button className="mr10" onClick={() => handleRemoveClick(index)}>Remove</button>}
              {inputList.length - 1 === index && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Form;