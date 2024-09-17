import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
    return (
        <div id="header">
            <img src={logo}/>
            <h1> Invesetment Calculator </h1>
        </div>
    );
}