// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useForm } from "antd/es/form/Form";
// import { Col, Row, Button, Form, Input, DatePicker, InputNumber, Select, Switch } from "antd";
// import axios from "axios";
// import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

// const Tinting = ({ username }) => {
//   const handleSubmit = () => {
//     let formData = FormInsert.getFieldValue();
//     formData["CreateBy"] = username;
//     const date = new Date();
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     formData["day"] = day;
//     formData["month"] = month;
//     formData["year"] = year;
//     console.log(JSON.stringify(formData));
//     axios
//       .post("http://localhost:5147/api/tintingbanglore/post", formData)
//       .then(
//         toast("Data is being saved", {
//           position: "top-center",
//           autoClose: 50,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         })
//       );
//   };

//   const [FormInsert] = useForm();

//   return (
//     <>
//       <h1 className="text-center">Tinting Banco</h1>
//       <div className="container-fluid mt-5">
//         <Form
//           form={FormInsert}
//           className="FormMainClass"
//           onFinish={handleSubmit}
//           layout="vertical"
//         >
//           <Row gutter={[16, 24]}>
//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Date"
//                 name="Date"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a date",
//                   },
//                 ]}
//               >
//                 <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Name Of Project"
//                 name="NameOfTheProject"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a name",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={20} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Fandeck"
//                 name="Fandeck"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Fandeck",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Shade Code"
//                 name="ShadeCode"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Shade Code",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Shade Name"
//                 name="ShadeName"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Shade Name",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={20} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Product"
//                 name="Product"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Product",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={20} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Base"
//                 name="Base"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Base",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={20} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Base Batch Number"
//                 name="BaseBatchNo"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Base Batch Number",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={10} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Formulation for 1L"
//                 name="FormulationFor1LitrePackSize"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Formulation",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Quantity Tinted in Litres"
//                 name="QuantityTintedInLitres"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Quantity",
//                   },
//                 ]}
//               >
//                 <InputNumber style={{ width: "100%" }} min={0} max={100000} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Reference"
//                 name="Reference"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Reference",
//                   },
//                 ]}
//               >
//                 <Select style={{ width: "100%" }}>
//                   <Select.Option value="">Select</Select.Option>
//                   <Select.Option value="Standard">Standard</Select.Option>
//                   <Select.Option value="Customized">Customized</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Project/Retail"
//                 name="ForProjectOrRetail"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Project/Retail",
//                   },
//                 ]}
//               >
//                 <Select style={{ width: "100%" }}>
//                   <Select.Option value="">Select</Select.Option>
//                   <Select.Option value="Project">Project</Select.Option>
//                   <Select.Option value="Retail">Retail</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Shade Match Confirmation"
//                 name="ShadeMatchConfirmation"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Shade Match Confirmation",
//                   },
//                 ]}
//               >
//                 <Switch
//                   checkedChildren={<CheckOutlined />}
//                   unCheckedChildren={<CloseOutlined />}
//                 />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Shade Patch/Swatch"
//                 name="ShadePatch"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Shade Patch/Swatch",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Other Observations"
//                 name="OtherObservations"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide Other Observations",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Dispensing Machine"
//                 name="DispensingMachine"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Dispensing Machine",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Row justify="end">
//             <Col className="gutter-box">
//               <Form.Item className="FormButtonClass">
//                 <Button type="primary" danger onClick={() => FormInsert.resetFields()}>
//                   Reset
//                 </Button>
//                 <Button type="primary" htmlType="submit" style={{ marginLeft: "10px" }}>
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Col>
//           </Row>
//         </Form>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Tinting;


import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'antd/es/form/Form';
import { Col, Row, Button, Form, Input, DatePicker, InputNumber, Select, Switch, Collapse } from 'antd';
import axios from 'axios';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ColourantBanco from './ColourantBanco';
// import './scc.css'

const Tinting = ({ username, setIsDummyButtonPressed }) => {
  const [collapseKey, setCollapseKey] = useState('');
  const [DispensingMachine, setDispensingMachine] = useState(false);
  const [nameOfSalesPerson , setNameOfSalesPerson] = useState(true);
  const [colorShade,setColorShade]=useState(false);
  const [tintingInvoice , setTintingInvoice] = useState(false);
  const [otherObservations, setOtherObservations] = useState(true);
  const [originalInvoice , setOriginalInvoice] = useState(false);
  const [projectRetail,setProjectRetial] = useState(false);
  const [smproject,setSMProject]= useState(true);

  const [Depot,setDepot]=useState('');

  const [Loading,setLoading]=useState(false);

  var CreateBy = 'Kumaran';

  // const handleCollapse = () => {
  //   setCollapseKey(collapseKey === '1' ? '' : '1');
  // };

  // const handleSubmit = () => {
  //   let formData = FormInsert.getFieldValue();
  //   formData['CreateBy'] = username;
  //   const date = new Date();
  //   let day = date.getDate();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();
  //   formData['day'] = day;
  //   formData['month'] = month;
  //   formData['year'] = year;
  //   console.log(JSON.stringify(formData));
  //   axios
  //     .post('http://localhost:5147/api/tintingbanglore/post', formData)
  //     .then(() => {
  //       setIsSubmitted(true);
  //       toast('Data is being saved', {
  //         position: 'top-center',
  //         autoClose: 50,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: 'light',
  //       });
  //     });
  // };


  const handleSubmit = () =>{
    let formData = FormInsert.getFieldValue();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    formData["day"] = day;
    formData["month"] = month;
    formData["year"] = year;
    axios.post('https://localhost:7206/api/tinting/post',formData)

  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://localhost:7206/api/login/get/12345`)
      .then((response) => {
        setDepot(response.data[0].depot);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        if (Depot === 'Bangalore') {
          setDispensingMachine(true);
          setNameOfSalesPerson(false);
          setProjectRetial(true);
          setSMProject(false);
        }
        else if(Depot==='Vijayawada'){
          setColorShade(true);
        }
        else if (Depot==='Vizag'){
          setTintingInvoice(true);
          setOriginalInvoice(true);
          setOtherObservations(false);
        }
        setLoading(false);
      });
  }, [Depot]);

  const [FormInsert] = useForm();

  return (
    <>
      <div className="TintingContainer">
        <Form form={FormInsert} className="FormMainClass" onFinish={handleSubmit} layout="vertical">
        <Row gutter={[16, 24]}>
            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Date"
                name="Date"
                rules={[
                  {
                    required: true,
                    message: "Please provide a date",
                  },
                ]}
              >
                <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Name Of Project"
               name="NameOfTheProject"
               rules={[
                 {
                   required: true,
                   message: "Please provide a name",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>

           {nameOfSalesPerson && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Name Of Sales Person"
               name="NameOfSalesPerson"
               rules={[
                 {
                   required: true,
                   message: "Please provide the name of sales person",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>}

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Fandeck"
               name="Fandeck"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Fandeck",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Shade Code"
               name="ShadeCode"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Shade Code",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           {colorShade && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Colour Shade"
               name="ColourShade"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Colour Shade",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>}

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Shade Name"
               name="ShadeName"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Shade Name",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Product"
               name="Product"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Product",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Base"
               name="Base"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Base",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Base Batch Number"
               name="BaseBatchNo"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Base Batch Number",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={10} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Formulation for 1L"
               name="FormulationFor1LitrePackSize"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Formulation",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Quantity Tinted in Litres"
               name="QuantityTintedInLitres"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Quantity",
                 },
               ]}
             >
               <InputNumber style={{ width: "100%" }} min={0} max={100000} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Reference"
               name="Reference"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Reference",
                 },
               ]}
             >
               <Select style={{ width: "100%" }}>
                 <Select.Option value="">Select</Select.Option>
                 <Select.Option value="Standard">Standard</Select.Option>
                 <Select.Option value="Customized">Customized</Select.Option>
               </Select>
             </Form.Item>
           </Col>

           {projectRetail && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Project/Retail"
               name="ForProjectOrRetail"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Project/Retail",
                 },
               ]}
             >
               <Select style={{ width: "100%" }}>
                 <Select.Option value="">Select</Select.Option>
                 <Select.Option value="Project">Project</Select.Option>
                 <Select.Option value="Retail">Retail</Select.Option>
               </Select>
             </Form.Item>
           </Col>}

           {smproject && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="S&MProject/Retail/BUKA"
               name="ForS&MProjectOrRetailOrBUKA"
               rules={[
                 {
                   required: true,
                   message: "Please provide a S&MProject/Retail/BUKA",
                 },
               ]}
             >
               <Select style={{ width: "100%" }}>
                 <Select.Option value="">Select</Select.Option>
                 <Select.Option value="Project">S&M Project</Select.Option>
                 <Select.Option value="Retail">Retail</Select.Option>
                 <Select.Option value="Buka">BUKA</Select.Option>
               </Select>
             </Form.Item>
           </Col>}

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Shade Match Confirmation"
               name="ShadeMatchConfirmation"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Shade Match Confirmation",
                 },
               ]}
             >
               <Switch
                 checkedChildren={<CheckOutlined />}
                 unCheckedChildren={<CloseOutlined />}
               />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Shade Patch/Swatch"
               name="ShadePatch"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Shade Patch/Swatch",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           {otherObservations && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Other Observations"
               name="OtherObservations"
               rules={[
                 {
                   required: true,
                   message: "Please provide Other Observations",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>}

           {DispensingMachine && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
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
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>}
           
           {tintingInvoice && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Tinting Invoice"
               name="TintingInvoice"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Tinting Invoice",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>}

           {originalInvoice && <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Original Invoice"
               name="OriginalInvoice"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Original Invoice",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>}
          </Row>
        </Form>
      <Row justify="end">
        <Col className="gutter-box">
          <Form.Item className="FormButtonClass">
          <Button type="primary" danger onClick={() => FormInsert.resetFields()}>
              Reset
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }}>
              Submit
            </Button>
            <Button
              type="primary"
              onClick={() => setIsDummyButtonPressed(true)}
              style={{ marginLeft: '10px' }}
            >
              Dummy
            </Button>
          </Form.Item>
        </Col>
      </Row>
      </div>
      {/* {setIsDummyButtonPressed ? (
        <Collapse activeKey={collapseKey}>
          <Collapse.Panel header="Colourant" key="1" onClick={handleCollapse}>
            <ColourantBanco />
          </Collapse.Panel>
        </Collapse>
      ) : null} */}
      <ToastContainer />
    </>
  );
};

export default Tinting;
