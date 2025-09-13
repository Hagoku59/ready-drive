import { Col, Row, Space, Drawer } from 'antd';
import React, { useState } from 'react';
import Car from './../../assets/images/car-photo.png';
import McLaren from './../../assets/images/mclaren.png';
import Calendar from './../../assets/images/calendar.png';
import Maximize from './../../assets/images/maximize.png';
import Add from './../../assets/images/group.png';
import Sort from './../../assets/images/sort.png';
import Kanban from './../../assets/images/kanban-green.png';
import Rows from './../../assets/images/fatrows.png';
import Spacing from './../../assets/images/spacing.png';
import './index.scss';
import CarDetails from './CarDetails';
import {
  SearchOutlined
} from '@ant-design/icons';

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

const RentData = [
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
    {
        status: 'PICKUP SOON',
        brand: 'McLaren M650',
        info: 'D17301 • Light Blue • 2021',
        date: 'Aug 1-10',
        image: Car
    },
       
];

const ReturningData = [
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

const InServiceData = [
    {
        status: 'PICKUP SOON',
        brand: 'McLaren M650',
        info: 'D17301 • Light Blue • 2021',
        date: 'Aug 1-10',
        image: Car
    },   
];


const Rent = (): React.JSX.Element => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const onClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%', paddingLeft: '10px'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p style={{margin: '0 10px', fontSize: '20px', fontWeight: '600', color: '#0C0C0C'}} className='rent-title'>Rent & Booking</p>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft:'10px', width: '221px', height: '24px', borderRadius: '8px', backgroundColor: '#FBFCFC', fontSize: '11px', fontWeight: '400', color: '#797C80'}}><SearchOutlined />Search</div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:'0 10px', width: '78px', height: '24px', borderRadius: '8px', border: '1px solid #797C80', fontSize: '11px', fontWeight: '400', color: '#797C80', marginLeft: '10px'}}>
                            <img src={Sort} style={{marginRight: '10px'}} /> Filters
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:'0 10px', width: '109px', height: '24px', borderRadius: '8px', backgroundColor: '#0C0C0C', fontSize: '11px', fontWeight: '400', color: '#CCFF00', marginLeft: '10px'}}>
                            <img src={Kanban} style={{marginRight: '10px'}} /> Kanban
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:'0 10px', width: '109px', height: '24px', borderRadius: '8px', backgroundColor: '#FBFCFC', fontSize: '11px', fontWeight: '400', color: '#797C80'}}>
                            <img src={Rows} style={{marginRight: '10px'}} /> Timeline
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:'0 10px', width: '112px', height: '24px', borderRadius: '8px', backgroundColor: '#FBFCFC', fontSize: '11px', fontWeight: '400', color: '#797C80', margin: '0 10px'}}>
                            <img src={Spacing} style={{marginRight: '10px'}} /> Compact View
                        </div>
                    </div>
                </div>
                
                <div style={{backgroundColor: '#CBCFD5', width: '97%', height: '1px', margin: '15px 10px'}} />
                <Row gutter={10} style={{width: '100%', height: '100%'}}>
                    <Col flex="1 0 20%" style={{height: '100%'}}>
                        <div style={{backgroundColor: '#FBFCFC', borderRadius: '16px',height: '100%', display: 'flex', flexDirection: 'column', padding: '10px'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <p className='category-title'>Handover</p>
                                <img src={Maximize} />
                            </div>
                            {ParkData.map(item => {
                                return (
                                    <div className='card-body' onClick={openDrawer}>
                            
                                            <img src={item.image} style={{width: '100%', height: 'auto'}}/>
                                        
                                        <Space direction="vertical" size={5} style={{padding: '10px'}}>
                                            
                                            <p className='card-status' style={{fontSize: '12px', fontWeight: '800', color: '#0B6FE0'}}>{item.status}</p> 
                                            <div>
                                                <p className='card-status' style={{fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>{item.brand}</p> 
                                                <p className='card-status' style={{fontSize: '12px', fontWeight: '400', color: '#797C80'}}>{item.info}</p>
                                            </div> 
                                            
                                
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                    <img src={Calendar} style={{width: '15px', height: '15px', marginRight: '5px'}} />
                                                    <p style={{margin: '0'}}>{item.date}</p>
                                                </div>

                                                <div style={{display: 'flex', flexDirection: 'row' }}>
                                                    <img src={Add} style={{marginRight: '3px'}}/>
                                                    <img src={Add} />
                                                </div>
                                            </div>
                                        </Space>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                    <Col flex="1 0 20%" style={{height: '100%'}}>
                        <div style={{backgroundColor: '#FBFCFC', borderRadius: '16px',height: '100%', display: 'flex', flexDirection: 'column', padding: '10px'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <p className='category-title'>Handover</p>
                                <img src={Maximize} />
                            </div>
                            {HandoverData.map(item => {
                                return (
                                    <div className='card-body'>
                            
                                            <img src={item.image} style={{width: '100%', height: 'auto'}}/>
                                        
                                        <Space direction="vertical" size={5} style={{padding: '10px'}}>
                                            
                                            <p className='card-status' style={{fontSize: '12px', fontWeight: '800', color: '#0B6FE0'}}>{item.status}</p> 
                                            <div>
                                                <p className='card-status' style={{fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>{item.brand}</p> 
                                                <p className='card-status' style={{fontSize: '12px', fontWeight: '400', color: '#797C80'}}>{item.info}</p>
                                            </div> 
                                            
                                
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                    <img src={Calendar} style={{width: '15px', height: '15px', marginRight: '5px'}} />
                                                    <p style={{margin: '0'}}>{item.date}</p>
                                                </div>

                                                <div style={{display: 'flex', flexDirection: 'row' }}>
                                                    <img src={Add} style={{marginRight: '3px'}}/>
                                                    <img src={Add} />
                                                </div>
                                            </div>
                                        </Space>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                    <Col flex="1 0 20%" style={{height: '100%'}}>
                        <div style={{backgroundColor: '#FBFCFC', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', padding: '10px'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <p className='category-title'>In rent</p>
                                <img src={Maximize} />
                            </div>
                            {RentData.map(item => {
                                return (
                                    <div className='card-body'>
                            
                                            <img src={item.image} style={{width: '100%', height: 'auto'}}/>
                                        
                                        <Space direction="vertical" size={5} style={{padding: '10px'}}>
                                            
                                            <p className='card-status' style={{fontSize: '12px', fontWeight: '800', color: '#0B6FE0'}}>{item.status}</p> 
                                            <div>
                                                <p className='card-status' style={{fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>{item.brand}</p> 
                                                <p className='card-status' style={{fontSize: '12px', fontWeight: '400', color: '#797C80'}}>{item.info}</p>
                                            </div> 
                                            
                                
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                    <img src={Calendar} style={{width: '15px', height: '15px', marginRight: '5px'}} />
                                                    <p style={{margin: '0'}}>{item.date}</p>
                                                </div>

                                                <div style={{display: 'flex', flexDirection: 'row' }}>
                                                    <img src={Add} style={{marginRight: '3px'}}/>
                                                    <img src={Add} />
                                                </div>
                                            </div>
                                        </Space>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                    <Col flex="1 0 20%" style={{height: '100%'}}>
                        <div style={{backgroundColor: '#FBFCFC', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <p className='category-title'>Returning</p>
                                <img src={Maximize} />
                            </div>
                            {ReturningData.map(item => {
                                return (
                                    <div className='card-body'>
                            
                                            <img src={item.image} style={{width: '100%', height: 'auto'}}/>
                                        
                                        <Space direction="vertical" size={5} style={{padding: '10px'}}>
                                            
                                            <p className='card-status' style={{fontSize: '12px', fontWeight: '800', color: '#0B6FE0'}}>{item.status}</p> 
                                            <div>
                                                <p className='card-status' style={{fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>{item.brand}</p> 
                                                <p className='card-status' style={{fontSize: '12px', fontWeight: '400', color: '#797C80'}}>{item.info}</p>
                                            </div> 
                                            
                                
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                    <img src={Calendar} style={{width: '15px', height: '15px', marginRight: '5px'}} />
                                                    <p style={{margin: '0'}}>{item.date}</p>
                                                </div>

                                                <div style={{display: 'flex', flexDirection: 'row' }}>
                                                    <img src={Add} style={{marginRight: '3px'}}/>
                                                    <img src={Add} />
                                                </div>
                                            </div>
                                        </Space>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                    <Col flex="1 0 20%" style={{height: '100%'}}>
                        <div style={{backgroundColor: '#FBFCFC', borderRadius: '16px',  height: '100%', display: 'flex', flexDirection: 'column', padding: '10px'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <p className='category-title'>In service</p>
                                <img src={Maximize} />
                            </div>
                            {InServiceData.map(item => {
                                return (
                                    <div className='card-body'>
                            
                                            <img src={item.image} style={{width: '100%', height: 'auto'}}/>
                                        
                                        <Space direction="vertical" size={5} style={{padding: '10px'}}>
                                            
                                            <p className='card-status' style={{fontSize: '12px', fontWeight: '800', color: '#0B6FE0'}}>{item.status}</p> 
                                            <div>
                                                <p className='card-status' style={{fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>{item.brand}</p> 
                                                <p className='card-status' style={{fontSize: '12px', fontWeight: '400', color: '#797C80'}}>{item.info}</p>
                                            </div> 
                                            
                                
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                    <img src={Calendar} style={{width: '15px', height: '15px', marginRight: '5px'}} />
                                                    <p style={{margin: '0'}}>{item.date}</p>
                                                </div>

                                                <div style={{display: 'flex', flexDirection: 'row' }}>
                                                    <img src={Add} style={{marginRight: '3px'}}/>
                                                    <img src={Add} />
                                                </div>
                                            </div>
                                        </Space>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </div>

            <Drawer
                title="Basic Drawer"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isDrawerOpen}
                width={'80%'}
                
                style={{borderRadius: '32px 0 0 32px'}}
            >
                <CarDetails />
            </Drawer>
        </>
    );
};

export default Rent;