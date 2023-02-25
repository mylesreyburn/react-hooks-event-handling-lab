// Code Keypad Component Here

function keypadFunctionality(event){
    console.log("Entering password...");

}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={keypadFunctionality}></input>
        </div>
    )
}

export default Keypad;