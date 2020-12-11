import { Link } from 'react-router-dom'

function Procedures(props) {
    const procedureItems = props.proceduresList.map((procedure, index) => {
        return <li key={index}><Link to ={`/procedures/${procedure.id}`}>{procedure.name}</Link></li>
    })
    return (
        <div>
            <h1>Procedures</h1>
            <ul>

            {procedureItems}
            </ul>
        </div>
    )
}

export default Procedures