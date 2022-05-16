import React from 'react';
import {Dropdown, Menu, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";

const DropDownMenu = ({
	items = [],
	label,
	defaultValue = items[0]?.label?.props?.children
}) => {
	return (
		<Dropdown overlay={<Menu items={items}/>}>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<Space className={'space'}>
				<div>
					{label}{defaultValue}
				</div>
				<DownOutlined className={'down'}/>
			</Space>
		</Dropdown>
	);
};

export default DropDownMenu;