import SketchExample from "./ColorPicker";
import "./MyTable.css";

function MyTable() {
  let nRows = 50;
  let nColumns = 60;
  let rows = [];
  for (let i = 0; i< nRows; i ++) {
    rows.push(<MyBetterRow nColumns={nColumns}/>);
  }
  return (
    <div>

      <table>
        <MyBetterHeader nColumns={nColumns} />
        {rows} 
      </table>
    </div>
  );
}

function MyBetterHeader(props) {
  let cells = [];
  for (let i = 0; i < props.nColumns; i++) {
    cells.push(<MyBetterCell header= {true}/>);
  }
  return <tr>{cells}</tr>;
}

function MyBetterRow(props) {
  let cells = [];
  for (let i = 0; i < props.nColumns; i++) {
    cells.push(<MyBetterCell />);
  }
  return <tr>{cells}</tr>;
}

function MyBetterCell(props){
}

function changeColor (e) {
  e.target.style.backgroundColor = "black";
}
var elements = document.getElementsByClassName("tableCells");

export default MyTable;