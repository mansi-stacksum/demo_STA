import React, { useState } from "react";
import { Row, Col, Table, Form, Button, ButtonGroup } from "react-bootstrap";
import { ReactComponent as EditIcon } from "../../../assets/icons/Pen-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/Bin-icon.svg";
import { ReactComponent as EyeIcon } from "../../../assets/icons/Eye-icon.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/Filter-icon.svg";
import TableHeader from "../../../ui/TableHeader";

const currentData = [
  {
    orderId: "1",
    customer: "1532",
    product: "xyz",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "pending",
  },
  {
    orderId: "1",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "pending",
  },
  {
    orderId: "2",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "pending",
  },
  {
    orderId: "4",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "pending",
  },
  {
    orderId: "5",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "pending",
  },
  {
    orderId: "6",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "pending",
  },
  {
    orderId: "7",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "pending",
  },
  {
    orderId: "8",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "pending",
  },
];

const Section1 = () => {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const filteredData = currentData?.filter((item) => {
    const product = item?.product?.toLowerCase();

    if (!inputText) {
      return item;
    } else {
      return product?.includes(inputText.toLowerCase());
    }
  });

  return (
    <Row>
      <Col sm="12">
        <TableHeader title="Order History">
          <Row>
            <Col sm={5} xs={12}>
              <Form
                className="d-flex"
                style={{ padding: "10px" }}
                onChange={inputHandler}
              >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>

            <Col sm={2} xs={12} style={{ padding: "10px" }}>
              <Form.Select
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <option>Select a Date </option>
              </Form.Select>
            </Col>

            <Col sm={2} xs={12} style={{ padding: "10px" }}>
              <Form.Select style={{ width: "100%", height: "100%" }}>
                <option>Select.... </option>
              </Form.Select>
            </Col>
            <Col sm={2} xs={12} style={{ padding: "10px" }}>
              <Form.Select style={{ width: "100%", height: "100%" }}>
                <option>Select....</option>
              </Form.Select>
            </Col>
            <Col md={1} xs={12} style={{ padding: "10px" }}>
              <ButtonGroup className="me-2" aria-label="First group">
                <Button>
                  <FilterIcon />
                  Filter
                </Button>
              </ButtonGroup>
            </Col>
          </Row>

          <Table striped bordered hover>
            <thead>
              <tr className="ligth">
                <th
                  className="text-center"
                  style={{
                    padding: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    style={{
                      position: "absolute",
                      marginTop: "2px",
                      marginleft: "-4px",
                    }}
                    type="checkbox"
                    className="form-check-input"
                    id="rowcheck{user.id}"
                  />
                </th>
                <th className="text-center">Order Id</th>
                <th className="text-center">Customer</th>
                <th className="text-center">Product</th>
                <th className="text-center">Order Date</th>
                <th className="text-center">Amount</th>
                <th className="text-center">Payment Method</th>
                <th className="text-center">Delivery Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((item) => (
                <tr key={item?.id}>
                  <th className="text-center" style={{ padding: "10px" }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rowcheck{user.id}"
                      style={{
                        position: "absolute",
                        marginTop: "2px",
                        marginleft: "-5px",
                      }}
                    />
                  </th>
                  <td className="text-center">{item?.orderId}</td>
                  <td className="text-center">{item?.customer}</td>
                  <td className="text-center">{item?.product}</td>
                  <td className="text-center">{item?.order_date}</td>
                  <td className="text-center">{item?.amount}</td>
                  <td className="text-center">{item?.payment_method}</td>
                  <td className="text-center">
                    <span
                      className="badge"
                      style={{
                        backgroundColor:
                          item?.status === "Active" ? "green" : "red",
                      }}
                    >
                      {item?.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="flex align-items-center list-user-action">
                      <button
                        className="btn btn-sm btn-icon btn-primary "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Edit"
                      >
                        <span className="btn-inner">
                          <EyeIcon />
                        </span>
                      </button>
                      <button
                        className="btn btn-sm btn-icon btn-primary "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Edit"
                        style={{ marginLeft: "10px" }}
                      >
                        <span className="btn-inner">
                          <EditIcon />
                        </span>
                      </button>

                      <button
                        className="btn btn-sm btn-icon btn-danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Delete"
                        style={{ marginLeft: "10px" }}
                      >
                        <span className="btn-inner">
                          <DeleteIcon />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableHeader>
      </Col>
    </Row>
  );
};
export default Section1;
