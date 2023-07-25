import useLocalStorageState from "use-local-storage-state";
import Button from "../Button";
import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmitButton(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
  }

  const [isChecked, setIsChecked] = useLocalStorageState(false);
  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <>
      <h1>Add new activity</h1>
      <form onSubmit={handleSubmitButton}>
        <div>
          <label htmlFor="activity-input">Name:</label>
          <input type="text" id="activity-input" name="name" required></input>
        </div>
        <div>
          <label htmlFor="activity-check">Good-weather activity:</label>
          <input
            onChange={handleChange}
            type="checkbox"
            id="activity-check"
            name="isForGoodWeather"
          ></input>
        </div>
        <Button />
      </form>
    </>
  );
}
