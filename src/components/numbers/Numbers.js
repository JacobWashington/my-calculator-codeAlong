import "./Numbers.css"

import Number from "../numbers/number/Number";

const Numbers = (props) => {
    const nums = [0,1,2,3,4,5,6,7,8,9];

    const mapNum = nums.map((index) => {
        return <Number num={nums[index]}/>
    })

    return ( 
        <div className="numbers-container">
            {mapNum}
        </div>
     );
}
 
export default Numbers;