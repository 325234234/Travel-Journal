import logo  from '../assets/logo.png'

export default function Nav() {
    return (
        <nav>
            <img src={logo} className="nav--logo"/>
            <p className="nav--heading">my travel journal</p>
        </nav>
    )
}