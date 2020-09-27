import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
function generateCodeFromObject(obj){
    //return a code generated string
    return `<${obj.name}${getStyle(obj.style)}${obj.children.length > 0 ? '>' : '/>'}${obj.children.length > 0 ? getChildrens(obj.children) : '' }${obj.children.length > 0 ? "</" + obj.name + ">" : ''}`;
   }

function getStyle(obj) {
    if (Object.keys(obj).length === 0) return '';
    let ans = ' style={{';
    Object.keys(obj).forEach(key => {
        ans = ans + getCamelCase(key) + ":\"" + obj[key] + "\",";
    });
    ans = ans + '}}';
    return ans;
}

function getCamelCase(str) {
    return str.includes("-") ? (str.split("-")[0] + str.split("-")[1].charAt(0).toUpperCase() + str.split("-")[1].substring(2)) : str;
}

function getChildrens(arr) {
    let ans = '';
    arr.forEach(el => {
        ans += generateCodeFromObject(el)
    })
    return ans;
}
   
module.exports=generateCodeFromObject;


// ReactDOM.render(<App />, document.getElementById("root"));