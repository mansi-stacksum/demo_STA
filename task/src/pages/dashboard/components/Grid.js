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
    status: "Delivered",
  },
  {
    orderId: "1",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "Cancelled",
  },
  {
    orderId: "2",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "Cancelled",
  },
  {
    orderId: "4",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "Delivered",
  },
  {
    orderId: "5",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "Cancelled",
  },
  {
    orderId: "6",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "Cancelled",
  },
  {
    orderId: "7",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "Inprogress",
  },
  {
    orderId: "8",
    customer: "1532",
    product: "abc",
    order_date: "12",
    amount: "12",
    payment_method: "cash",
    status: "Inprogress",
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
              <ButtonGroup className="me-2" aria-label="First group" >
                <Button style={{backgroundColor: "#5ea3cb",fontSize:"0.85rem", width:"100%", display:"inline-flex"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
</svg>
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
                      // marginleft: "-4px",
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
                          item?.status === "Delivered" ? "#d9f9ed" : (item?.status === "Inprogress" ? "#eff6fa" : "#fef3f0") ,
                          color:  item?.status === "Delivered" ? "#6cdb7f" :(item?.status === "Inprogress" ? "#79add7" : "#fa896e") 
                      }}
                    >
                      {item?.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="flex align-items-center list-user-action">
                      <button
                        className="btn btn-sm btn-icon "
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Edit"
                      >
                        <span className="btn-inner">
                          {/* <EyeIcon />  */}
                          <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5fa5ce" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
                        </span>
                      </button>
                     
                      <button
                        className="btn btn-sm btn-icon"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Edit"
                        style={{ marginLeft: "10px" }}
                      >
                        <span className="btn-inner">
                          {/* <EditIcon /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5ea3cb" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
                        </span>
                      </button>

                      <button
                        className="btn btn-sm btn-icon "
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Delete"
                        style={{ marginLeft: "10px" }}
                      >
                        <span className="btn-inner">
                          {/* <DeleteIcon /> */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fa896b" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
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
