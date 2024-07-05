
import CustomLink from './CustomLink';

const Navbar = () => {
  const linksData = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/services', text: 'Services', replace: true },
    { to: '/profile', text: 'Profile', state: { fromDashboard: true } },
    { to: '/contact', text: 'Contact', style: { color: 'red', textDecoration: 'none' } },
  ];
  console.log(linksData);
  
  return (
    <nav>
      {linksData.map((link, index) => (
        <CustomLink
          key={index}
          to={link.to}
          replace={link.replace}
          state={link.state}
          style={link.style}
        >
          {link.text}
        </CustomLink>
      ))}
    </nav>
  );
};

export default Navbar;
