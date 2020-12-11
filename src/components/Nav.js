import { Link } from 'react-router-dom'

function Nav() {
    return (
        <ul>
            <li> <Link to ="/">Home</Link></li>
            <li> <Link to ="/Contact">Contact</Link></li>
            <li> <Link to ="/Procedures">Procedures</Link></li>
        </ul>
    )
}
export default Nav