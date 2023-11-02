import React, { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import './Login.css';

function Login({setToken}) {
    const [LoginForm] = useForm()
    const [LoaderHiden, setLoaderHiden] = useState(false)
    const onLoginClick = () => {
        let Input = LoginForm.getFieldValue()
        if (Input.UserName.substring(0, 3).toUpperCase() === "NPI") {
            Input = { EmployeeId: Input.UserName.toUpperCase(), Password: Input.Password };
            setLoaderHiden(true)
            axios
                .post(
                    `https://hrdetails.nipponpaint.co.in/api/Employee/Authenticate`,
                    Input
                )
                .then(
                    (res) => {
                        setLoaderHiden(true);
                        if (res.data.Status === "No Results Found") {
                            toast.warning("Login credentials mismatch !", {
                                position: toast.POSITION.TOP_RIGHT,
                            })
                            setToken(true);
                            LoginForm.setFieldsValue({
                                UserName: Input.UserName,
                                password: "",
                            });
                        } else {
                            setToken(true);
                            window.location.reload(false);
                            // Navigate("/Dashboard");

                        }
                    },
                    (err) => {
                        setLoaderHiden(true);
                        setToken(true);
                        toast.info({
                            message: "Login credentials mismatch",
                            top: 50,
                        });
                    }
                );
        } else {
            // alert("Others");
            sessionStorage.setItem("UserInfo", JSON.stringify({
                EmpNo:"NPI38380"
            }))
            window.location.reload(false);
        }
    }

    return (
    <>
        <div className="LoginHeader">
                <div>
                    <img id="blobby-1" src='https://www.nipponpaint.co.in/wp-content/uploads/2021/08/Nippon-Logo-11-01-01.png' alt="Blobby" />
                </div>
        </div>
        
        <div className="LoginMainClass">
            <div className="LoginPage">
                <h2 style={{ marginBottom: '40px' }}>
                    {/* <img src={'https://www.nipponpaint.co.in/wp-content/uploads/2021/08/Nippon-Logo-11-01-01.png'} style={{ width: '200px' }} /> */}
                    LOGIN
                </h2>
                <div>
                    <Form form={LoginForm} onFinish={() => onLoginClick()}>
                        <Form.Item name={"UserName"} rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            }
                        ]}>
                            <Input placeholder="User Name" size="large" />
                        </Form.Item>
                        <Form.Item name={"Password"} rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            }
                        ]}>
                            <Input placeholder="Password" type="password" size="large" />
                        </Form.Item>
                        <Form.Item className="LoginButtonAlign">
                            <Button size="large" htmlType="submit" type="primary">Login</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
         
        </div>
    </>
    )
}
export default Login;