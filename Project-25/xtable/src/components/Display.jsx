import { useState } from "react";

const Display = () => {
  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [fiterData, setFilterData] = useState(tableData);

  const handleDate = () => {
    let newtable = [...tableData].sort((a, b) => b.date.localeCompare(a.date));
    setFilterData(newtable);
  };
  const handleView = () => {
    let newtable = [...tableData].sort((a, b) => b.views - a.views);
    setFilterData(newtable);
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {fiterData.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.date}</td>
                <td>{e.views}</td>
                <td>{e.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" onClick={handleDate}>
        Sort by Date
      </button>
      <button type="button" onClick={handleView}>
        Sort by Views
      </button>
    </>
  );
};
export default Display;
