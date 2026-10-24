export default function Price({oldPrice , newPrice}){
    let oldstyles = {
        textDecorationLine : "line-through" 
    }
    let newstyles = {
        fontWeight : "bold"
    }
    let styles = {
        backgroundColor : "orange",
        height: "40px",
        borderBottomLeftRadius: "13px",
        borderBottomRightRadius: "13px",
    }
    return (
        <div style = {styles}>
            <span style = {oldstyles}> {oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style = {newstyles}> {newPrice}</span>
        </div>
    )
}