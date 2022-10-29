import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { ReactComponent as DeleteIcon } from "../assets/icons/Bin-icon.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/Plus-icon.svg";
import { ReactComponent as FileIcon } from "../assets/icons/File-icon.svg";

import Card from "./Card";

const DataPerPage = (props) => {
  const { handleShowItemChange } = props;

  return (
    <div className="col-md-6">
      <div className="dataTables_length" id="user-list-table_length">
        <label style={{ padding: "0.75rem 1.5rem", display: "flex" }}>
          Show
          <select
            name="user-list-table_length"
            aria-controls="user-list-table"
            className="custom-select custom-select-sm form-control form-control-sm"
            style={{ width: "60px" }}
            onChange={handleShowItemChange}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          entries
        </label>
      </div>
    </div>
  );
};

const TableHeader = (props) => {
  const { title, children } = props;

  return (
    <Card>
      <Card.Header>
        <Card.Header.Title>
          <h4 className="card-title">{title}</h4>
        </Card.Header.Title>

        <Row>
          <Col md={6} xs={12} style={{paddingRight:"revert"}}>
            <Button  style={{ width: "100%",backgroundColor:"#6ada7d" ,border:"none", fontSize:"0.85rem"}}>
            <svg style={{margin:"0 0.5em"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
              Create Order
            </Button>
          </Col>
          <Col md={4} xs={12} style={{paddingRight:"revert"}}>
            <Button variant="primary" style={{ width: "100%" ,backgroundColor:"#58caea",height:"2.3em" , border: "none",fontSize:"0.85rem",display:"inline-flex"}}>
            <svg style={{margin:"0.3em 0.2em"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
  <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg>
 Export
            </Button>
          </Col>
          <Col md={2} xs={12}>
            <Button  style={{  backgroundColor:"#fef3f0",border:"none",height:"2em"}}>
              {/* <DeleteIcon /> */}
              <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:"-3px"}} width="16" height="16" fill="#fa896b" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
            </Button>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body className="px-0">{children}</Card.Body>
    </Card>
  );
};

export default TableHeader;
