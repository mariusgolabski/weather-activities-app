import "./App.css";
import ActivityList from "./components/ActivityList";
import Form from "./components/Form";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    newActivity = {
      id: uid(),
      name: newActivity.name,
      isForGoodWeather: newActivity.isForGoodWeather,
    };
    setActivities([newActivity, ...activities]);
  }

  return (
    <div className="App">
      <ActivityList activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
