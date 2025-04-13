import { useEffect, useState } from "react";
import "./Display.css";
const Display = () => {
  const [tableData, setableData] = useState([]);
  const [filterTable, setFilterTable] = useState([]);
  const [pageno, setPageno] = useState(0);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        const jsonData = await response.json();
        setableData(jsonData);
      } catch (e) {
        console.error(e);
      }
    };

    fetchApi();
  }, []);
  useEffect(() => {
    setFilterTable(tableData.slice(0, 10));
  }, [tableData]);

  useEffect(() => {
    let start = pageno * 10;
    let end = start + 10;
    setFilterTable(tableData.slice(start, end));
  }, [pageno]);

  const handleNext = () => {
    const endpage = Math.ceil(tableData.length / 10);
    if (pageno === endpage - 1) {
      return;
    } else {
      setPageno(pageno + 1);
    }
  };

  const handlePrev = () => {
    if (pageno <= 0) {
      return;
    } else {
      setPageno(pageno - 1);
    }
  };
  return (
    <>
      <h1>Employee Data Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filterTable.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" onClick={handlePrev}>
        Previous
      </button>
      <span className="pageNo">{pageno + 1}</span>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  );
};
export default Display;
