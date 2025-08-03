import Logo from './../../assets/images/DEIZ.png';
import Line from './../../assets/images/VerticalLine.png';
import Bell from './../../assets/images/Bell.png';
import './index.scss';

const Header = () => {
    return (
        <div className='header-body'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={Logo} style={{marginRight: '20px'}} />
                <img src={Line} style={{marginRight: '20px'}} />
                <div style={{display: 'flex', flexDirection: 'column', color: '#0C0C0C', fontSize: '14px', fontWeight: '500'}}>
                    <p style={{margin: '0'}}>Management</p>
                    <p style={{margin: '0'}}>Platform</p>
                </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={Bell} style={{marginRight: '20px'}} />
                <img src={Line} style={{marginRight: '20px'}} />
                <div style={{height: '28px', width: '28px', backgroundColor: 'grey', borderRadius: '8px', marginRight: '10px'}}></div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p style={{fontSize: '12px', fontWeight: '600', color: '#000000', margin: '0'}}>Sid Rivers</p>
                    <p style={{fontSize: '10px', fontWeight: '400', color: '#000000',  margin: '0'}}>Rent manager</p>
                </div>
            </div>
        </div>
    )
};

export default Header;