const Records = ({ records }) => {
  const { id, name, email, status, date } = records;
  console.log(id, name, email, status, date);
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{status}</td>
      <td>{date}</td>
    </tr>
  );
};
export default Records;
