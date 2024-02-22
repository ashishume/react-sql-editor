import Territory from "../../mock-data/territory.json";
import Customers from "../../mock-data/customers.json";
import Orders from "../../mock-data/orders.json";
import Products from "../../mock-data/products.json";
import CustomersLimit from "../../mock-data/customer-limit.json";
import { ITableQueryData } from "../models/TableStructure";



export const AvailableTable: ITableQueryData[] = [
  {
    table: Territory,
    label: "territory",
    query: "select * from territory;",
    index: 5,
  },
  {
    table: Customers,
    label: "customers",
    query: "select * from customers;",
    index: 1,
  },
  {
    table: Orders,
    label: "orders",
    query: "select * from orders;",
    index: 4,
  },
  {
    table: Products,
    label: "products",
    query: "select * from products;",
    index: 3,
  },
  {
    table: CustomersLimit,
    label: "customersLimit",
    query:
      "select customerID, companyName, contact_name from customers limit 18;",
    index: 2,
  },
];
