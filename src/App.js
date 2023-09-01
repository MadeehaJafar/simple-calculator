import "./App.css";
import { BsPlusSlashMinus, BsPercent } from "react-icons/bs";
import { GoPlus } from "react-icons/go"
import { CgMathDivide } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { BiMinus } from "react-icons/bi";
import { FaEquals } from "react-icons/fa";
import { useState } from "react";

function App() {

    const [result, setResult] = useState('0');
    const [first0perand, setFirstOperand] = useState('');
    const [secondOperand, setSecondOperand] = useState('');
    const [operation, setOperation] = useState('');

    function precentageClick() {

    }
    // console.log(first0perand, secondOperand);


    function minusClick() {

        if (operation.length === 0) {

            let c = ('-') + first0perand;
            setFirstOperand(c);
            setResult(c);


        } else {
            let c = ('-') + secondOperand;
            setSecondOperand(c);
            setResult(c);
        }
    }


    function clearClick() {
        setFirstOperand('');
        setSecondOperand('');
        setOperation("");
        setResult(0);
    }


    function equalClick() {
        if (first0perand !== 0 || secondOperand !== 0) {
            setFirstOperand(parseFloat(first0perand));
            setSecondOperand(parseFloat(secondOperand))
            switch (operation) {
                case '*':
                    setResult(first0perand * secondOperand);
                    break;
                case '/':
                    setResult(first0perand / secondOperand)
                    break;
                case '+':
                    setResult(first0perand + secondOperand);
                    break;
                case '-':
                    setResult(first0perand - secondOperand);
                    break;
                default:
                    setResult(0);
            }

        }
    }

    function numberClick(number) {
        if (operation.length === 0) {

            let c = first0perand + number;
            setFirstOperand(c);
            setResult(c)
            // console.log(c);


        } else {
            let d = secondOperand + number;
            setSecondOperand(d);
            setResult(d);
            // console.log(c);

        }



    }


    function operatorClick(operation) {
        setOperation(operation)
    }


    return (
        <div className="container">

            <div className="result-screen">
                <div className="screen">


                    {result}


                </div>
            </div>

            <div className="columns-div">

                <div className="first-row">
                    <div className="clear-btn" onClick={clearClick}>
                        <h1>AC</h1>
                    </div>

                    <div className="plusminus-btn" onClick={minusClick}>
                        <h1>
                            <BsPlusSlashMinus />
                        </h1>
                    </div>

                    <div className="precentage-btn" onClick={precentageClick}>
                        <h1>
                            <BsPercent />
                        </h1>
                    </div>

                    <div className="divid-btn" onClick={() => { operatorClick('/') }}>
                        <h1>
                            <CgMathDivide />
                        </h1>
                    </div>
                </div>

                <div className="second-row">
                    <div className="numbers-btn" onClick={(number) => { numberClick('7') }}>
                        <h1>
                            7
                        </h1>
                    </div>
                    <div className="numbers-btn" onClick={(number) => { numberClick('8') }}>
                        <h1>
                            8
                        </h1>
                    </div>
                    <div className="numbers-btn" onClick={(number) => { numberClick('9') }}
                    >
                        <h1>
                            9
                        </h1>
                    </div>
                    <div className="cross-btn" onClick={() => { operatorClick('*') }}>
                        <h2>  <ImCross /></h2>
                    </div>
                </div>


                <div className="third-row">

                    <div className="numbers-btn" onClick={(number) => { numberClick('4') }}>
                        <h1>
                            4
                        </h1>
                    </div>
                    <div className="numbers-btn" onClick={(number) => { numberClick('5') }}>
                        <h1>
                            5
                        </h1>
                    </div>

                    <div className="numbers-btn" onClick={(number) => { numberClick('6') }}>
                        <h1>
                            6
                        </h1>
                    </div>
                    <div className="minus-btn" onClick={() => { operatorClick('-') }}>
                        <h1>  <BiMinus /></h1>
                    </div>
                </div>


                <div className="fourth-row">

                    <div className="numbers-btn" onClick={(number) => { numberClick('1') }}>
                        <h1>
                            1
                        </h1>
                    </div>
                    <div className="numbers-btn" onClick={(number) => { numberClick('2') }}>
                        <h1>
                            2
                        </h1>
                    </div>
                    <div className="numbers-btn" onClick={(number) => { numberClick('3') }}>
                        <h1>
                            3
                        </h1>
                    </div>
                    <div className="plus-btn" onClick={() => { operatorClick('+') }}>
                        <h2>  <GoPlus /></h2>
                    </div>
                </div>


                <div className="last-row">
                    <div className="zero-btn" onClick={(number) => { numberClick('0') }}>
                        <h1>
                            0
                        </h1>
                    </div>
                    <div className="numbers-btn" onClick={(number) => { numberClick('.') }}>
                        <h1>
                            .
                        </h1>
                    </div>

                    <div className="equals-btn" onClick={equalClick}>
                        <h2>  <FaEquals /></h2>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default App;


