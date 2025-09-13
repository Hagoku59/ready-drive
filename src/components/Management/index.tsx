import React from 'react';
import Sort from './../../assets/images/sort.png';
import Placeholder from './../../assets/images/placeholder.png';
import {
  SearchOutlined
} from '@ant-design/icons';
import { Flex } from 'antd';
import './index.scss';

const Management = (): React.JSX.Element => {

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%', paddingLeft: '10px'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p style={{margin: '0 10px', fontSize: '20px', fontWeight: '600', color: '#0C0C0C'}} className='rent-title'>Fleet Management</p>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft:'10px', width: '221px', height: '24px', borderRadius: '8px', border: '1px solid #797C80', backgroundColor: '#FBFCFC', fontSize: '11px', fontWeight: '400', color: '#797C80'}}><SearchOutlined />Search</div>
                    
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:'0 10px', width: '180px', height: '24px', borderRadius: '8px', border: '1px solid #797C80',backgroundColor: '#FBFCFC', fontSize: '11px', fontWeight: '400', color: '#0C0C0C', marginLeft: '10px'}}>
                            Car Brand
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:'0 10px', width: '180px', height: '24px', borderRadius: '8px', border: '1px solid #797C80',backgroundColor: '#FBFCFC', fontSize: '11px', fontWeight: '400', color: '#0C0C0C', marginLeft: '10px'}}>
                            Car Models
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:'0 10px', width: '78px', height: '24px', borderRadius: '8px', border: '1px solid #797C80', fontSize: '11px', fontWeight: '400', color: '#797C80', marginLeft: '10px'}}>
                            <img src={Sort} style={{marginRight: '10px'}} /> Filters
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:'0 10px', width: '165px', height: '24px', borderRadius: '8px', backgroundColor: '#0C0C0C', fontSize: '11px', fontWeight: '400', color: '#CCFF00', margin: '0 10px'}}>
                            + Add Car
                        </div>
                        
                    </div>
                </div>
                
                <div style={{backgroundColor: '#CBCFD5', width: '97%', height: '1px', margin: '15px 10px'}} />

                <Flex wrap gap="small">
                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>

                    <div style={{width: '32%', height: '116px', backgroundColor: '#FBFCFC', borderRadius: '16px', display: 'flex', flexDirection: 'row', padding: '5px'}}>
                        <div style={{width: '45%', height: '100%', borderRadius: '16px'}}>
                            <img src={Placeholder} style={{width: 'auto', height: '100%'}} />
                        </div>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '5px'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p style={{margin: '0', fontSize: '14px', fontWeight: '700', color: '#0C0C0C'}}>Make & Model</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '400', color: '#797C80'}}>D17301 • Body Color • 2021</p>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#918272'}}>0 AED/Day •0 km </p>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '5px'}}>
                                <p style={{margin: '5px 0', fontSize: '12px', fontWeight: '400', color: '#0C0C0C'}}>Rent Status</p>
                                <p style={{margin: '0', fontSize: '12px', fontWeight: '800', color: '#0C0C0C', textTransform: 'uppercase'}}>additional tag</p>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '18px', height: '12px', borderRadius: '4px', backgroundColor: '#F0F2F5', color: '#797C80'}}>...</div>
                    </div>
                </Flex>
            </div>
        </>
        
    );
};

export default Management;