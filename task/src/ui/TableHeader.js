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
          <Col md={7} xs={12}>
            <Button variant="success" style={{ width: "100%" }}>
              <PlusIcon />
              Create Order
            </Button>
          </Col>
          <Col md={3} xs={12}>
            <Button variant="primary" style={{ width: "137%" }}>
              <FileIcon /> Export
            </Button>
          </Col>
          <Col md={2} xs={12}>
            <Button variant="danger" style={{ marginRight: "32px" }}>
              <DeleteIcon />
            </Button>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body className="px-0">{children}</Card.Body>
    </Card>
  );
};

export default TableHeader;
