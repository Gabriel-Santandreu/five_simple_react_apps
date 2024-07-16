import Counter from './Counter.jsx';
import ColorPicker from './ColorPicker.jsx';
import ToDoList from './ToDoList.jsx';
import DigitalClock from './DigitalClock.jsx';
import Stopwatch from './Stopwatch.jsx';

function App() {

    return (
        <>
            <Counter></Counter>
            <br /><br />
            <hr />
            <ColorPicker></ColorPicker>
            <br /><br />
            <hr /> 
            <ToDoList></ToDoList>
            <br /><br />
            <hr /> 
            <DigitalClock></DigitalClock>
            <br /><br />
            <hr /> 
            <Stopwatch></Stopwatch>
        </>
    );
}

export default App;
