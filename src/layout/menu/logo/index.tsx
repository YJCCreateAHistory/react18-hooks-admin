import logo from "../../../assets/images/logo.svg";


const Logo = (props: any) => {
	return (
		<div className="logo-box" >
			<img src={logo} alt="logo" className="logo-img" />
		</div>
	);
};


export default Logo
