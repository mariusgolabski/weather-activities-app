import Button from "../Button";
import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleAddActivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
  }
  return (
    <>
      <h1>Add new activity</h1>
      <form onSubmit={handleAddActivity}>
        <div>
          <label htmlFor="activity-input">Name:</label>
          <input type="text" id="activity-input" name="name" required></input>
        </div>
        <div>
          <label htmlFor="activity-check">Good-weather activity:</label>
          <input
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
