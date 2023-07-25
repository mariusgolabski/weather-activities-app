import Button from "../Button";
import "./Form.css";

export default function Form() {
  return (
    <>
      <h1>Add new activity</h1>
      <form>
        <div>
          <label htmlFor="activity-input">Name:</label>
          <input type="text" id="activity-input" required></input>
        </div>
        <div>
          <label htmlFor="activity-check">Good-weather activity:</label>
          <input type="checkbox" id="activity-check" required></input>
        </div>
        <Button />
      </form>
    </>
  );
}
