import React, { useState } from 'react';
import './App.css';

const App = () => {

    let [values, setValues] = useState({
        class1: "",
        class2: "",
        frequency: "",
        fixii: "",
    });

    let [items, setItems] = useState([]);

    let inputEvent = (event) => {

        let { name, value } = event.target;

        setValues((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    let addHandle = () => {
        setItems((preVal) => {
            return [...preVal, values]
        })

        setValues({
            class1: "",
            class2: "",
            frequency: "",
            fixii: "",
        })
    }

    /////////////////////////////////////////////////

    /* function getXi() {
        let x = items.map((value) => {
            return Math.abs(-value.class2 - value.class1) / 2
        })
        return x;
    } */

    ///////////////////////////////////////////

    let z = items.map((val) => {
        return val.frequency
    })

    let sumOfFi = z.reduce(function (a, b) {
        return Math.abs(-a - b);
    }, 0);

    ////////////////////////////////////////

    let sumFixi = () => {
        let x = items.map((val) => {
            return val.fixii = ((val.frequency) * (Math.abs(-val.class1 - val.class2) / 2))
        })
        return x;
    }

    let xyz = sumFixi().reduce(function (a, b) {
        return Math.abs(-a - b);
    }, 0)

    //////////////////////////

    /// Mode

    ///////////////////////////


    let mode1 = () => {
        let x = items.map((val) => {
            return val.frequency
        })
        return x;
    }

    let fmax = Math.max(...mode1())


    /////////////////////

   

    return (
        
        <div>
            <h1>STATISTIC SUPPORT APP</h1>
            <h4>developed by <span style={{ color: 'red' }}>BESHARAM FILMS</span></h4>
            <h4 style = {{color:'blue'}}>UNDER DEVELOPMENT - DON'T USE NOW</h4>
            <div className='container'>
                <div className='inBox'>
                    <input type='number' name="class1" value={values.class1} onChange={inputEvent} placeholder='Class 1' autoComplete='off' />
                    <input type='number' name="class2" value={values.class2} onChange={inputEvent} placeholder='Class 2' autoComplete='off' />
                    <input type='number' name="frequency" value={values.frequency} onChange={inputEvent} placeholder='Frequency' autoComplete='off' />
                    <button className='btnBox' onClick={addHandle}>ADD</button>
                </div>

                <div>
                    <h3>TABLE</h3>
                    <ul className='list'>
                        <li>C1<span>C2</span>Fi<span>Xi</span>Fixi<span>Di</span>FiDi<span>Ui</span>FiUi</li>
                        {items.map((row, indx) => {
                            return <li key={indx}>{row.class1}<span>{row.class2}</span>{row.frequency}<span>{Math.abs(-row.class2 - row.class1) / 2}</span>{sumFixi()[indx]}<span>Di</span>FiDi<span>Ui</span>FiUi</li>
                        })}
                    </ul>
                </div>

                <div>
                    <h3>Results</h3>
                    <h4>Sum Of All Frequencies: {sumOfFi} </h4>
                    <h4>Sum of All FiXi: {xyz} </h4>
                    <h4>Highest Frequency: {fmax}</h4>
                    <h4>Mean: {xyz / sumOfFi} </h4>

                </div>

            </div>
        </div>
    )
};

export default App;
