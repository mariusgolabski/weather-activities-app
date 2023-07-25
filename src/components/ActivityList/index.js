export default function ActivityList({ activities }) {
  return (
    <section>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </section>
  );
}
