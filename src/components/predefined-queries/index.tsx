import style from "./style.module.scss";
import { IQuery, ITableQueryData } from "../../shared/models/TableStructure";
import { AvailableTable } from "../../shared/mocks/TableData";
import React from "react";
const PredefinedQueries = ({
  handleAvailableQueries,
  recentlyUsedQueries,
}: {
  handleAvailableQueries: ({}: string) => void;
  recentlyUsedQueries: string[];
}) => {
  return (
    <div className={style["container"]}>
      <h2 className={style["title"]}>Available Queries</h2>
      {AvailableTable.map(({ query, index }) => {
        return (
          <div
            className={style["list"]}
            key={index}
            onClick={() => handleAvailableQueries(query)}
          >
            {query}
          </div>
        );
      })}
      <div>
        <h2>Recently used queries</h2>
        {recentlyUsedQueries?.length
          ? recentlyUsedQueries.map((query, index) => {
              return (
                <div
                  className={style["list"]}
                  key={index}
                  onClick={() => handleAvailableQueries(query)}
                >
                  {query}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default React.memo(PredefinedQueries);
