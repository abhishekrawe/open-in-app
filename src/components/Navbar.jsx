import { NavLink } from 'react-router-dom';
import {
    DashboardIcon,
    UploadIcon,
    InvoiceIcon,
    ScheduleIcon,
    CalenderIcon,
    NotificationIcon,
    SettingsIcon,
} from '../assets/icons';

export default function Navbar({ setMobileMenuOpen }) {
    const navItems = [
        { to: '/dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
        { to: '/upload', icon: <UploadIcon />, label: 'Upload' },
        { to: '/invoice', icon: <InvoiceIcon />, label: 'Invoice' },
        { to: '/schedule', icon: <ScheduleIcon />, label: 'Schedule' },
        { to: '/calender', icon: <CalenderIcon />, label: 'Calender' },
        { to: '/notification', icon: <NotificationIcon />, label: 'Notification' },
        { to: '/setting', icon: <SettingsIcon />, label: 'setting' },
    ];

    return (
        <nav className='w-full'>
            <ul className='flex flex-col gap-6'>
                {navItems.map((item) => (
                    <NavItem
                        key={item.to}
                        {...item}
                        setMobileMenuOpen={setMobileMenuOpen}
                    />
                ))}
            </ul>
        </nav>
    );
}

function NavItem({ to, icon, label, setMobileMenuOpen }) {
    return (
        <li
            className='main-nav__link'
            onClick={
                typeof setMobileMenuOpen === 'function'
                    ? () => setMobileMenuOpen(false)
                    : null
            }
        >
            <NavLink
                to={to}
                className='group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100 text-gray-text font-nunito text-xl font-semibold'
            >
                {icon}
                <span className='text-md font-nunito opacity-100 group-hover:opacity-100 transition-all font-semibold'>
                    {label}
                </span>
            </NavLink>

        </li>
    );
}
