import style from "./style.module.scss";
import { IQuery } from "../../shared/models/TableStructure";
import { AvailableTable } from "../../shared/mocks/TableData";
const PredefinedQueries = ({
  handleAvailableQueries,
}: {
  handleAvailableQueries: ({}: IQuery) => void;
}) => {
  return (
    <div className={style["container"]}>
      <h2 className={style["title"]}>Available Queries</h2>
      {AvailableTable.map(({ query, index }) => {
        return (
          <div
            className={style["list"]}
            key={index}
            onClick={() => handleAvailableQueries({ query, index })}
          >
            {query}
          </div>
        );
      })}
    </div>
  );
};

export default PredefinedQueries;
