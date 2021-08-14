import { useState } from "react";

export default function Keyboard(){
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    return(
        <div className="container text-center text-white">
            <row className="row keyboard-row">
                <button className="col" onClick={()=> console.log(numbers[7])}>
                    7
                </button>
                <button className="col" onClick={()=> console.log(numbers[8])}>
                    8
                </button>
                <button className="col" onClick={()=> console.log(numbers[9])}>
                    9
                </button>
            </row>

            <row className="row keyboard-row">
                <button className="col" onClick={()=> console.log(numbers[4])}>
                    4
                </button>
                <button className="col" onClick={()=> console.log(numbers[5])}>
                    5
                </button>
                <button className="col" onClick={()=> console.log(numbers[6])}>
                    6
                </button>
            </row>

            <row className="row keyboard-row">
                <button className="col" onClick={()=> console.log(numbers[1])}>
                    1
                </button>
                <button className="col" onClick={()=> console.log(numbers[2])}>
                    2
                </button>
                <button className="col" onClick={()=> console.log(numbers[3])} onClick={value => console.log(value)}>
                    3
                </button>
            </row>
            <row className="row keyboard-row">
                <button className="col" onClick={()=> console.log(numbers[1])}>
                  
                </button>
                <button className="col" onClick={()=> console.log(numbers[0])}>
                    0
                </button>
                <button className="col" onClick={()=> console.log(numbers[3])} onClick={value => console.log(value)}>
             
                </button>
            </row>
            
        </div>
    )
}