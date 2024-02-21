import style from "./style.module.scss";
import { Queries } from "../../shared/mocks/predefined-queries";
import { IQuery } from "../../shared/models/TableStructure";
const PredefinedQueries = ({
  handleAvailableQueries,
}: {
  handleAvailableQueries: ({}: IQuery) => void;
}) => {
  return (
    <div className={style["container"]}>
      <h2 className={style["title"]}>Available Queries</h2>
      {Queries.map(({ query, index }) => {
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
