import { React } from "react"
import TableHeader from "./TableHeader"
import styles from "./StyleTable.module.css"
import { Link } from "react-router-dom"

const StyledTable = ({ data, tableHeader, type }) => {
  return (
    <table className={styles.tableWrapper}>
      <thead className={styles.tableHeader}>
        <TableHeader header={tableHeader}></TableHeader>
      </thead>
      <tbody>
        {type === "members"
          ? data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/teams/${item.team.id}`}>{item.team.name}</Link>
                </td>
              </tr>
            ))
          : data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.member_count}</td>
              </tr>
            ))}
      </tbody>
    </table>
  )
}
export default StyledTable
