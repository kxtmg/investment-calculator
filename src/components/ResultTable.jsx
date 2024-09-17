export default function ResultTable({title, amount}) {
    return (
        <table id="result">
            <thead>
                {title}
            </thead>
            <tbody>
                {amount}
            </tbody>
        </table>
    );
}