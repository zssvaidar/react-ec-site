import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'

function Logo() {
    return (
        <div className="logo">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
    );
}

export default Logo;