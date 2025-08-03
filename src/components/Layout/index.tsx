import { Outlet } from 'react-router-dom';
import React from 'react';
import { Col, Row } from 'antd';
import './index.scss';
import SideBar from '../SideBar';
import Header from '../Header';

const Layout = (): React.JSX.Element => {
	return (
		<Row className='main-container'>
			{/* <Row className='layout-header'>

			</Row> */}
			<Header />

			<Row gutter={20} style={{width: '100%', margin: '10px 0'}} >
				<Col span={4} style={{padding: '0'}}>
					<SideBar />
				</Col>

				<Col span={20} style={{padding: '0', paddingLeft: '10px'}}>
					<Outlet />
				</Col>
			</Row>
			
		</Row>
	);
};

export default Layout;