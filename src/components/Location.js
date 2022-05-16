import React from 'react';
import { Row, Col } from 'antd';
import {SnippetsOutlined,PhoneOutlined,InstagramOutlined} from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
const Location = () => {
	const layout = {
		labelCol: { span: 4 },
		wrapperCol: { span: 20 },
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
						<h3>Cho chúng tôi biết dự án của bạn</h3>
						<Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
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
							<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
								<Button type="primary" htmlType="submit" className={'btn-form'}>
									Submit
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Location;