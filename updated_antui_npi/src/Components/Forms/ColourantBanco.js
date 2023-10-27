import React, { useState } from "react";
import { Col, Row, Button, Form, Input, DatePicker, InputNumber, Select } from "antd";
import { useForm } from "antd/es/form/Form";

const ColourantBanco = ({ username }) => {
  const [Date1, setDate] = useState('');
  const [Colorant, setColorant] = useState('');
  const [BatchNo, setBatchNo] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [DispensingMachine, setDispensingMachine] = useState('');
  var CreateBy = username;

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const data = { "Date": Date1, "Colourant": Colorant, "BatchNo": parseInt(BatchNo), "Quantity": parseInt(Quantity), DispensingMachine, day, month, year, CreateBy };
    console.log(JSON.stringify(data));
    fetch('http://localhost:5147/api/tintingcolourants/post', {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      setDate('');
      setColorant('');
      setBatchNo('');
      setQuantity('');
      setDispensingMachine('');
      alert("Data Saved")
    });
  };

  const [FormInsert] = useForm();

  return (
    <>
      <h1 className="text-center">Colorant Banco</h1>
      <div className="container-fluid mt-5">
        <Form
          form={FormInsert}
          className="FormMainClass"
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Row gutter={[16, 24]}>
            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Date"
                name="Date"
                rules={[
                  {
                    required: true,
                    message: "Please provide a Date",
                  },
                ]}
              >
                <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} placeholder="" />
              </Form.Item>
            </Col>

            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Colourant"
                name="Colourant"
                rules={[
                  {
                    required: true,
                    message: "Please provide a Colourant",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} maxLength={20} />
              </Form.Item>
            </Col>

            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="BatchNo."
                name="BatchNo"
                rules={[
                  {
                    required: true,
                    message: "Please provide a BatchNo.",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} maxLength={40} />
              </Form.Item>
            </Col>

            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Quantity"
                name="Quantity"
                rules={[
                  {
                    required: true,
                    message: "Please provide a Quantity",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Dispensing Machine"
                name="DispensingMachine"
                rules={[
                  {
                    required: true,
                    message: "Please provide a Dispensing Machine",
                  },
                ]}
              >
                <Select style={{ width: "100%" }}>
                  <Select.Option value="">Select</Select.Option>
                  <Select.Option value="Banco">Banco</Select.Option>
                  <Select.Option value="D180">D180</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row justify="end">
            <Col className="gutter-box">
              <Form.Item className="FormButtonClass">
                <Button type="primary" danger onClick={() => FormInsert.resetFields()}>
                  Reset
                </Button>
                <Button type="primary" htmlType="submit" style={{ marginLeft: "10px" }}>
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default ColourantBanco;
