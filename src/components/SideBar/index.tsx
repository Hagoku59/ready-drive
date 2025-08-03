
import { NavLink } from 'react-router-dom';
import Car from './../../assets/images/car.png';
import Coin from './../../assets/images/coin.png';
import Dashboard from './../../assets/images/DASHBOARD.png';
import Diagram from './../../assets/images/diagram.png';
import Kanban from './../../assets/images/kanban.png';
import Like from './../../assets/images/like-dislike.png';
import Logout from './../../assets/images/logout.png';
import Receipt from './../../assets/images/receipt-disscount.png';
import Setting from './../../assets/images/setting.png';
import Task from './../../assets/images/task.png';
import User from './../../assets/images/user-edit.png';
import './index.scss';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: Dashboard
    },
    {
        title: 'Rent & Booking',
        path: '/',
        icon: Kanban
    },
    {
        title: 'Fleet Management',
        path: '/management',
        icon: Car
    },
    {
        title: 'Clients',
        path: '/clients',
        icon: User
    },
    {
        title: 'Support',
        path: '/support',
        icon: Task
    },
    {
        title: 'Finance',
        path: '/finance',
        icon: Coin
    },
    {
        title: 'Promo & Discounts',
        path: '/promo',
        icon: Receipt
    },
    {
        title: 'Feedback',
        path: '/feedback',
        icon: Like
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon: Diagram
    }
];

const SideBar = () => {
    return (
        <div className='sidebar-body'>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                SidebarData.map(item => {
                    return (
                        <NavLink
                            to={item.path}
                            className={ ({isActive}) => isActive ? 'link active' : 'link' }
                        >
                            <img src={item.icon} style={{marginRight: '15px'}} />
                            {item.title}
                        </NavLink>
                    )
                })
            }   
            </div>

            <div>
                <div style={{color: '#0C0C0C', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', padding: '0 10px', height: '44px'}}>
                    <img src={Setting} style={{marginRight: '15px'}}/>
                    System Settings
                </div>

                <div style={{color: '#0C0C0C', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', padding: '0 10px', height: '44px'}}>
                    <img src={Logout} style={{marginRight: '15px'}}/>
                    Logout
                </div>
                <div style={{backgroundColor: '#CBCFD5', width: '90%', height: '1px', marginLeft: '10px', marginBottom: '30px'}} />
            </div>
            
        </div>
    )
};

export default SideBar;