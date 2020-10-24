import React,{useState} from 'react'

function Version() {

    const [result1, setResult1] = useState();
    const [result2, setResult2] = useState();
    const [result3, setResult3] = useState();

    function versionCom(pre,des){
        const preArray = pre.split(".")
        const desArray = des.split(".")
        for (const key in preArray) {
            if(key == preArray.length-1){
                if(preArray[key] > desArray[key])
                    return 1
                else if(preArray[key] < desArray[key])
                    return -1
                else
                    return 0
            }else{
                if(preArray[key] > desArray[key])
                    return 1
                else if(preArray[key] < desArray[key])
                    return -1
            }
        }
    }

    return (
        <div>
            <p>判断版本号大小</p>
            <button onClick={()=>{setResult1(versionCom('10.1.6','10.0.8'))}}>比较10.1.6和10.0.8<span>，结果：{result1}</span></button><br/>
            <button onClick={()=>{setResult2(versionCom('10.0.6','10.0.6'))}}>比较10.0.6和10.0.6<span>，结果：{result2}</span></button><br/>
            <button onClick={()=>{setResult3(versionCom('10.1.6','10.2.8'))}}>比较10.1.6和10.2.8<span>，结果：{result3}</span></button>
        </div>
    )
}
export default Version
