import "./App.css";
import ActivityList from "./components/ActivityList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <ActivityList />
      <Form onAddActivity />
    </div>
  );
}

export default App;
