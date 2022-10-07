import React from "react";
import { Col, Row } from "react-bootstrap";
import { Roll } from "react-reveal";
export const Category = ({ filterByCategory, allCategory }) => {
  //To filter by category
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Roll>
        {allCategory.length > 0 ? (
          allCategory.map((item) => {
            return (
              <div>
                <button onClick={() => onFilter(item)} className="btn mx-2">
                  {item}
                </button>
              </div>
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات</h4>
        )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
