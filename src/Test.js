import logo from './logo.svg';
import './App.css';
import './css/myStyle.css';


function Test() {
    var name = "Newton School";
    var num1 = 5;
    var num2 = 6;
    let obj = {
        name:"name",
        age: 23
    }

    var arr = [1,2,3,4,5];

    const fn = () => {
        console.log("dhajshflhajf");
    }

    return(
        <div className="App">
            <header className="App-header">
                <h2>{name}</h2>
                Sum = {5+6}
                temp = {num1 + num2}

                {fn()}
                
                {arr.map((item)=> (
                    <div>{item}</div>
                ))}

                <a className="Ap-link" href="https://www.newtonschool.co/" terget="_blank">
                    Newton School Website
                </a>
            </header>
        </div>
    );
}

export default Test;