import React from 'react';
import { Row, Col } from 'antd';
import {SnippetsOutlined,PhoneOutlined,InstagramOutlined} from '@ant-design/icons';
import { Form, Input, Button,Checkbox } from 'antd';


const Location = () => {
	const layout = {
		labelCol: { span: 8},
		wrapperCol: { span: 16 },
	};
	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
			number: '${label} is not a valid number!',
		},
		number: {
			range: '${label} must be between ${min} and ${max}',
		},
	};
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Success:', values);
		localStorage.setItem('user',JSON.stringify(values))
		form.resetFields()
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	// const mapGoogle = '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1652066246135!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

	return (
		<div>
			{/*<div dangerouslySetInnerHTML={{__html:mapGoogle}}/>*/}
			{/*<CurrentLocation/>*/}
			<div className={'form'}>
				<Row gutter={[48, 16]}>
					<Col span={'12'}>
						<h3>Liên hệ chúng tôi</h3>
						<p>Claritas est etiam processus dynamicus, qui sequitur
							mutationem consuetudium lectorum. Mirum est notare
							quam littera gothica, quam nunc putamus parum claram
							anteposuerit litterarum formas human. qui sequitur
							mutationem consuetudium lectorum.
							Mirum est notare quam
						</p>
						<ul>
							<li><SnippetsOutlined/><span>  Address : Your address goes here.</span></li>
							<li><PhoneOutlined /><span>   0123456789</span></li>
							<li><InstagramOutlined /><span>  demo@example.com</span></li>

						</ul>
					</Col>
					<Col span={'12'}>
						<h3 className={'contact-title'}>Cho chúng tôi biết dự án của bạn</h3>
						<Form
							form={form}
							autoComplete="off"
							labelCol={{ span: 10 }}
							wrapperCol={{ span: 14 }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
						>
							<Form.Item
								name="fullName"
								label="Full Name"
								rules={[
									{
										required: true,
										message: "Xin hãy nhập tên của bạn",
									},
									{ whitespace: true },
									{ min: 3 },
								]}
								hasFeedback
							>
								<Input placeholder="Type your name" />
							</Form.Item>

							<Form.Item
								name="email"
								label="Email"
								rules={[
									{
										required: true,
										message: "Vui lòng nhập email của bạn",
									},
									{ type: "email", message: " email không hợp lệ" },
								]}
								hasFeedback
							>
								<Input placeholder="Type your email" />
							</Form.Item>

							<Form.Item
								name="password"
								label="Password"
								rules={[
									{
										required: true,
										message:'Vui lòng nhập mật khẩu'
									},
									{ min: 6 },
									{
										validator: (_, value) =>
											value && value.includes("@")
												? Promise.resolve()
												: Promise.reject("Mật khẩu không hợp lệ"),
									},
								]}
								hasFeedback
							>
								<Input.Password placeholder="Type your password" />
							</Form.Item>

							<Form.Item
								name="confirmPassword"
								label="Confirm Password"
								dependencies={["password"]}
								rules={[
									{
										required: true,
										message:'Vui lòng nhập mật khẩu'
									},
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue("password") === value) {
												return Promise.resolve();
											}
											return Promise.reject(
												"Mật khẩu không đủ mạnh"
											);
										},
									}),
								]}
								hasFeedback
							>
								<Input.Password placeholder="Confirm your password" />
							</Form.Item>




							<Form.Item
								name="agreement"
								wrapperCol={{ span: 24 }}
								valuePropName="checked"
								rules={[
									{
										validator: (_, value) =>
											value
												? Promise.resolve()
												: Promise.reject(
													"Để tiếp tục, bạn cần đồng ý với các điều khoản và điều kiện của chúng tôi"
												),
									},
								]}
							>
								<Checkbox>
									{" "}
									Đồng ý với <a href="/#">Các điều khoản và điều kiện</a>
								</Checkbox>
							</Form.Item>
							<Form.Item wrapperCol={{ span: 24 }}>
								<Button block type="primary" htmlType="submit">
									Đồng ý
								</Button>

							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
			<div className={'form-us'}>
				<div className={'about-us'}>
					<h3>Liên hệ chúng tôi</h3>
					<p>Claritas est etiam processus dynamicus, qui sequitur
						mutationem consuetudium lectorum. Mirum est notare
						quam littera gothica, quam nunc putamus parum claram
						anteposuerit litterarum formas human. qui sequitur
						mutationem consuetudium lectorum.
						Mirum est notare quam
					</p>
					<ul>
						<li><SnippetsOutlined/><span>  Address : Your address goes here.</span></li>
						<li><PhoneOutlined /><span>   0123456789</span></li>
						<li><InstagramOutlined /><span>  demo@example.com</span></li>

					</ul>
				</div>
				<div className={'form-about'}>
					<h3>Cho chúng tôi biết dự án của bạn</h3>
					<Form  name="nest-messages"  validateMessages={validateMessages}>
						<Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
							<Input />
						</Form.Item>
						<Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
							<Input />
						</Form.Item>
						<Form.Item name={['user', 'Subject']} label="Subject">
							<Input />
						</Form.Item>
						<Form.Item name={['user', 'Your Message']} label="Your Message">
							<Input.TextArea />
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol }}>
							<Button type="primary" htmlType="submit" className={'btn-form'}>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>

			</div>
		</div>
	);
};

export default Location;