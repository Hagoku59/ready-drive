import { Col, Divider, Flex, Row, Space } from 'antd';
import React, { useState } from 'react';
import Car from './../../assets/images/car-photo.png';
import McLaren from './../../assets/images/mclaren.png';
import Photoscroll from './../../assets/images/photos-scroll.png';
import './CarDetails.scss';
import CarIcon from './../../assets/images/car-info.svg';
import StatusIcon from './../../assets/images/notification-status.svg';
import LogIcon from './../../assets/images/LOG.svg';

const ParkData = [
    {
        status: 'PICKUP SOON',
        brand: 'McLaren M650',
        info: 'D17301 • Light Blue • 2021',
        date: 'Aug 1-10',
        image: McLaren
    },
    {
        status: 'PICKUP SOON',
        brand: 'McLaren M650',
        info: 'D17301 • Light Blue • 2021',
        date: 'Aug 1-10',
        image: Car
    }, 
];

const HandoverData = [
    {
        status: 'PICKUP SOON',
        brand: 'McLaren M650',
        info: 'D17301 • Light Blue • 2021',
        date: 'Aug 1-10',
        image: Car
    },
    {
        status: 'PICKUP SOON',
        brand: 'McLaren M650',
        info: 'D17301 • Light Blue • 2021',
        date: 'Aug 1-10',
        image: Car
    },    
];



const CarDetails = (): React.JSX.Element => {
    const [menuItemSelected, setMenuItemSelected] = useState<string>('status');

	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const carInfo = {
		tags: ['pickup', 'booked', 'cleaning'],

	};

	const getTagColor = (tag: string) => {
		let tagColor = 'grey';
		let tagText = '';
		switch(tag) {
			case 'pickup': 
				tagColor = '#0B6FE0';
				tagText = 'pickup soon';
				break;
			case 'booked': 
				tagColor = '#931BE9';
				tagText = 'booked';
				break;
			case 'cleaning': 
				tagColor = '#918272';
				tagText = 'needs cleaning';
				break;
			
		}
		return (
			<div style={{backgroundColor: tagColor}} className='car-info-status-tag'>{tagText}</div>
		)
	};

    return (
        <div style={{width: '100%', height: '100%', borderRadius: '32px 0 0 32px', display: 'flex', flexDirection: 'row'}}>
            <div style={{backgroundColor: '#D8DCE2', width: '30px', height: '100%', borderRadius: '32px 0 0 32px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{backgroundColor: '#ADB0B5', width: '4px', height: '84px', borderRadius: '4px'}} />
            </div>

            <div className='car-details-drawer-main'>
                <div  style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <p style={{color: '#0C0C0C', fontSize: '48px', fontWeight: '600', margin: '0'}} className='car-details-drawer-header'>McLaren M650</p>
                        <p style={{color: '#0B6FE0', fontSize: '24px', fontWeight: '600', margin: '0', marginLeft: '20px', textTransform: 'uppercase'}}>In park</p>
                    </div>
                    <p style={{color: '#797C80', fontSize: '24px', fontWeight: '600', margin: '0'}}>2021</p>
                </div>

                <Row gutter={20} style={{marginTop: '20px', height: '100%'}}>
                    <Col span={12} style={{borderRadius: '16px', width: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #CBCFD5'}}>
                        <Row
                            style={{
                                height: '60px',
                                borderBottom: '1px solid #CBCFD5',
                                borderRadius: '16px 16px 0 0',
                            }}
                        >
                            <Col span={6} >
                                <div 
                                    onClick={
                                        () => {
                                            setMenuItemSelected('status');
                                        }
                                    }
                                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                                >
                                    <div className={menuItemSelected === 'status' ? 'car-info-menu-title-selected' : 'car-info-menu-title'}>
                                        <img src={StatusIcon} className={menuItemSelected === 'status' ? 'car-info-menu-icon-selected' : 'car-info-menu-icon'} /> Status
                                    </div>
                                    <div className={menuItemSelected === 'status' ? 'info-menu-indicator-selected' : 'info-menu-indicator'} />
                                </div>
                            </Col>
                            <Col span={6}>
                                <div
                                    onClick={
                                        () => {
                                            setMenuItemSelected('info');
                                        }
                                    }
                                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                                >
                                    <div className={menuItemSelected === 'info' ? 'car-info-menu-title-selected' : 'car-info-menu-title'}>
                                        <img src={CarIcon} className={menuItemSelected === 'info' ? 'car-info-menu-icon-selected' : 'car-info-menu-icon'} /> Car Info
                                    </div>
                                    <div className={menuItemSelected === 'info' ? 'info-menu-indicator-selected' : 'info-menu-indicator'} />
                                </div>
                            </Col>
                            <Col span={6}>
                                <div
                                    onClick={
                                        () => {
                                            setMenuItemSelected('docs');
                                        }
                                    }
                                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                                    
                                >
                                    <div className={menuItemSelected === 'docs' ? 'car-info-menu-title-selected' : 'car-info-menu-title'}>
                                        <img src={StatusIcon} className={menuItemSelected === 'docs' ? 'car-info-menu-icon-selected' : 'car-info-menu-icon'} /> Docs
                                    </div>
                                    
                                    <div className={menuItemSelected === 'docs' ? 'info-menu-indicator-selected' : 'info-menu-indicator'} />
                                </div>
                            </Col>
                            <Col span={6}>
                                <div
                                    onClick={
                                        () => {
                                            setMenuItemSelected('activity');
                                        }
                                    }
                                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                                >
                                    <div className={menuItemSelected === 'activity' ? 'car-info-menu-title-selected' : 'car-info-menu-title'}>
                                        <img src={LogIcon} className={menuItemSelected === 'activity' ? 'car-info-menu-icon-selected' : 'car-info-menu-icon'} /> Activity
                                    </div>
                                    
                                    <div className={menuItemSelected === 'activity' ? 'info-menu-indicator-selected' : 'info-menu-indicator'} />
                                </div>
                            </Col>
                        </Row>

                    
                        {menuItemSelected === 'status' ? <div className='car-info-status-content' style={{height: '100%', display: 'flex', flexDirection: 'column', padding: '30px', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p className='car-info-status-title'>Tags</p>
                                <Flex wrap gap='small'>
                                    { carInfo?.tags ? ( carInfo?.tags.map((tag) => (
                                        getTagColor(tag)	
                                    ))) : ''}
                                    <div className='car-info-status-tag-add'>+</div>
                                </Flex>

                                <Divider size="middle" style={{ borderColor: '#CBCFD5' }}/>
                                <p className='car-info-status-title'>Personalities</p>
                                <Row gutter={10} style={{width: '100%'}}>
                                    <Col span={8} style={{width: '100%'}}>
                                        <div className='car-info-status-person' >
                                            
                                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'green', marginRight: '5px'}}></div>
                                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                                    <p style={{fontSize: '10px', fontWeight: '600', color: '#000000', margin: '0'}}>David Tennant</p>
                                                    <p style={{fontSize: '10px', fontWeight: '400', color: '#797C80', margin: '0'}}>Client #2311</p> 
                                                </div>
                                                
                                            </div>
                                            {/* <p>R</p> */}
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className='car-info-status-apply-btn'>
                                            Apply Order
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className='car-info-status-appoint-btn'>
                                            + Appoint an Agent
                                        </div>
                                    </Col>
                                </Row>

                                <Divider size="middle" style={{ borderColor: '#CBCFD5' }}/>
                                <p className='car-info-status-title'>Comments</p>
                                <div style={{display: 'flex', overflow: 'auto'}}>
                                    <div className='car-info-comment'>
                                        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'top'}}>
                                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                    <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'blue', marginRight: '5px'}}></div>
                                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                                        <p style={{fontSize: '10px', fontWeight: '600', color: '#000000', margin: '0'}}>Sid Rivers • Rent Manager</p>
                                                        <p style={{fontSize: '10px', fontWeight: '400', color: '#797C80', margin: '0'}}>July 18 2025 • 10:55</p> 
                                                    </div>
                                                    
                                                </div>
                                                <div style={{width: '25px', height: '14px', backgroundColor: '#CCFF00', borderRadius: '4px', fontSize: '8px', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    New
                                                </div>
                                            </div>
                                            <p style={{margin: '0px', fontSize: '12px', fontWeight: '500'}}>We need to clean the car faster. There is dirt on the surface. There isn’t time. Please do it faster!</p>
                                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                                <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blueviolet', marginRight: '5px'}} />
                                                <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blueviolet', marginRight: '5px'}} />
                                                <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blueviolet', marginRight: '5px'}} />
                                                <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blueviolet', marginRight: '5px'}} />
                                                <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blueviolet', marginRight: '5px'}} />
                                            </div>	
                                        </Space>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '33px', borderRadius: '8px', backgroundColor: '#CCFF00', color: '#0C0C0C', fontSize: '10px', fontWeight: '500'}}>Add Comment and Tag</div>
                            
                        </div> : ''}

                        {menuItemSelected === 'info' ? 
                            <div style={{padding: '30px'}}>
                                <Row>
                                    <Col span={10}>
                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>D17301</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Plate Number</p>
                                            </div>

                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>Light Blue</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Body Color</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>2</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Seats</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>341 kmh</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Max Speed</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>710</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Horsepower</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>RWD</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Drive</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>Drive</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Fuel Type</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={14}>
                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>Fuel Type</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Mileage Limit</p>
                                            </div>

                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>Black / Orange</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Interior Color</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>210 L</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Luggage Capacity</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>2.9</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>0-100</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>4.0</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Engine</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>Automatic</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Transmission</p>
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                                <p style={{margin: '0', fontSize: '24px', fontWeight: '700', color: '#0C0C0C'}}>No</p>
                                                <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797C80'}}>Deposit Amount</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                            
                        : ''}

                        {menuItemSelected === 'docs' ? 
                            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <p style={{color: '#797C80', fontSize: '14px', fontWeight: '600'}}>No documents yet</p>
                            </div>
                        : ''}

                        {menuItemSelected === 'activity' ? 
                            <div style={{display: 'flex', flexDirection: 'column', padding: '30px'}}>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px'}}>
                                    <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '5px'}}/>
                                    <div style={{width: '20px', height: '20px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '10px'}}/>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <p style={{fontSize: '10px', fontWeight: '500', color: '#797C80', margin: '0'}}>July 18 2025 • 10:55</p>
                                        <p style={{fontSize: '12px', fontWeight: '500', color: '#797C80', margin: '0'}}>Manager Sid Rivers commented</p>
                                    </div>
                                </div>

                                <div style={{height: '102px', borderRadius: '8px', backgroundColor: '#FBFCFC', marginBottom: '20px', marginLeft: '60px', display: 'flex', flexDirection: 'column', padding: '15px'}}>
                                    <p style={{fontSize: '12px', fontWeight: '500', color: '#0C0C0C', marginTop: '0'}}>We need to clean the car faster. There is dirt on the surface. There isn’t time. Please do this faster!</p>
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blue', marginRight: '5px'}} />
                                            <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blue', marginRight: '5px'}} />
                                            <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blue', marginRight: '5px'}} />
                                            <div style={{width: '83px', height: '47px', borderRadius: '4px', backgroundColor: 'blue', marginRight: '5px'}} />
                                    </div>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px'}}>
                                    <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '5px'}}/>
                                    <div style={{width: '20px', height: '20px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '10px'}}/>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <p style={{fontSize: '10px', fontWeight: '500', color: '#797C80', margin: '0'}}>July 18 2025 • 10:55</p>
                                        <p style={{fontSize: '12px', fontWeight: '500', color: '#797C80', margin: '0'}}>Agent Matt Smith added tags Needs Cleaning</p>
                                    </div>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px'}}>
                                    <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '5px'}}/>
                                    <div style={{width: '20px', height: '20px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '10px'}}/>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <p style={{fontSize: '10px', fontWeight: '500', color: '#797C80', margin: '0'}}>July 22 2025 • 09:55</p>
                                        <p style={{fontSize: '12px', fontWeight: '500', color: '#797C80', margin: '0'}}>Status changed to Pickup Soon</p>
                                    </div>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px'}}>
                                    <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '5px'}}/>
                                    <div style={{width: '20px', height: '20px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '10px'}}/>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <p style={{fontSize: '10px', fontWeight: '500', color: '#797C80', margin: '0'}}>July 18 2025 • 10:55</p>
                                        <p style={{fontSize: '12px', fontWeight: '500', color: '#797C80', margin: '0'}}>Status changed to Pickup Soon</p>
                                    </div>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px'}}>
                                    <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '5px'}}/>
                                    <div style={{width: '20px', height: '20px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '10px'}}/>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <p style={{fontSize: '10px', fontWeight: '500', color: '#797C80', margin: '0'}}>July 18 2025 • 10:55</p>
                                        <p style={{fontSize: '12px', fontWeight: '500', color: '#797C80', margin: '0'}}>Manager Sid Rivers applied the order</p>
                                    </div>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px'}}>
                                    <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '5px'}}/>
                                    <div style={{width: '20px', height: '20px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '10px'}}/>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <p style={{fontSize: '10px', fontWeight: '500', color: '#797C80', margin: '0'}}>July 18 2025 • 10:55</p>
                                        <p style={{fontSize: '12px', fontWeight: '500', color: '#797C80', margin: '0'}}>David Tennant #2311 booked the car for 23-25 July 2025</p>
                                    </div>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px'}}>
                                    <div style={{width: '28px', height: '28px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '5px'}}/>
                                    <div style={{width: '20px', height: '20px', borderRadius: '8px', backgroundColor: 'grey', marginRight: '10px'}}/>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <p style={{fontSize: '10px', fontWeight: '500', color: '#797C80', margin: '0'}}>July 18 2025 • 10:55</p>
                                        <p style={{fontSize: '12px', fontWeight: '500', color: '#797C80', margin: '0'}}>Somebody is making some activities</p>
                                    </div>
                                </div>
                            </div>
                        : ''}
                    </Col>

                    <Col span={12}>
                        <div className='car-details-photos-main'>
                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                                <div style={{borderRadius: '16px', width: '100%', marginBottom: '10px', minHeight: '304px', display: 'flex', justifyContent: 'center'}}>
                                    <img src={McLaren} style={{width: 'auto', height: '100%'}} />
                                </div>

                                <div style={{width: '100%', height: '266px', overflowY: 'scroll', marginTop: '10px'}}>
                                    <img src={Photoscroll} style={{width: '100%', height: 'auto'}} />
                                </div>
                            </div>
                            

                            <div style={{width: '100%', height: '48px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0C0C0C', color: '#CCFF00', fontSize: '14px', fontWeight: '700'}}>
                                Show in fleet
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
           
        </div>
    );
};

export default CarDetails;