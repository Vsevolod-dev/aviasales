import React, {FC} from 'react';
import mainLogo from "../assets/img/Logo.svg";

const Header: FC = () => {
    return (
        <header className={'header'}>
            <div className="container">
                <img className={'header__logo'} src={mainLogo} alt="Logo"/>
            </div>
        </header>
    );
};

export default Header;
