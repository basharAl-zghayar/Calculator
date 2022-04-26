import React from "react";
import { Row, Card, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const Calculator = () => {
  return (
    <React.Fragment>
      <Card title={"My Calculator"}>
        <Row align="middle" justify="end" gutter={24}>
          <Button onClick={(value: any) => console.log(value)}>
            <PlusOutlined />
          </Button>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default Calculator;
