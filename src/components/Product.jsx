import "./Product.css"
import Price from "./Price.jsx"

export default function Product({title , idx}){
    let oldPrice = ["12,495" , "11,900" , "1,599" , "599"];
    let newPrice = ["8,999" , "9,199" , "899" , "278"];
    let description = [
        ["8,000 DPI" , "5 programmable buttons" ], 
        ["intuitive surface" , "designed for iPad Pro"], 
        ["designed for iPad Pro","intuitive surface"] , 
        ["wireless", "optical orientation "]]

    return(
        <div className="Product">
            <h4> {title} </h4>
            <h5> {description[idx][0]} </h5>
            <h5> {description[idx][1]} </h5>
            <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/> 
        </div>
    )
}