import { IQuery } from "../models/TableStructure";

export const Queries: IQuery[] = [
  {
    query: "select * from customers;",
    index: 1,
  },
  {
    query: "select customerID, companyName, contact_name from customers limit 18;",
    index: 2,
  },
  {
    query: "select * from products;",
    index: 3,
  },

  {
    query: "select * from orders;",
    index: 4,
  },
  {
    query: "select * from territory;",
    index: 5,
  },
];
