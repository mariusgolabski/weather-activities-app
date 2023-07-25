import Button from "../Button";
import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmitButton(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const isForGoodWeather = event.target.isForGoodWeather.checked;

    onAddActivity({
      name: name,
      isForGoodWeather: isForGoodWeather,
    });

    event.target.reset();
    event.target.name.focus();
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
