import { Col, Row, Space } from 'antd';
import React, { useState } from 'react';
import Car from './../../assets/images/car-photo.png';
import Calendar from './../../assets/images/calendar.png';
import Maximize from './../../assets/images/maximize.png';
import Add from './../../assets/images/group.png';
import './index.scss';

const ParkData = [
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

const Card = (item: any) => {
    return (
        <div className='card-body'>
            <img src={item.image} />
            <p className='card-status'>{item.status}</p>
        </div>
    )
};

const Rent = (): React.JSX.Element => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%', paddingLeft: '10px'}}>
            <div style={{marginLeft: '10px', fontSize: '20px', fontWeight: '600', color: '#0C0C0C'}}>Rent & Booking</div>
            <div style={{backgroundColor: '#CBCFD5', width: '97%', height: '1px', margin: '15px 10px'}} />
            <Row gutter={10} style={{width: '100%', height: '100%'}}>
                <Col flex={1} style={{height: '100%'}}>
                    <div style={{backgroundColor: '#FBFCFC', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', padding: '10px' }}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <p className='category-title'>In park</p>
                            <img src={Maximize} />
                        </div>
                        
                        {ParkData.map(item => {
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
                <Col flex={1} style={{height: '100%'}}>
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
                <Col flex={1} style={{height: '100%'}}>
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
                <Col flex={1} style={{height: '100%'}}>
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
                <Col flex={1} style={{height: '100%'}}>
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
    );
};

export default Rent;