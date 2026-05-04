import './CustomAlert.css'
import { useSelector } from 'react-redux'

const CustomAlert = () => {
    const { isOpen, message, type } = useSelector(state => state.alert)
    const alertClass = `alert alert-${type} ${isOpen ? 'show' : ''} `
    return (
        <div className={alertClass} >
            {message}
        </div>
    )

}

export default CustomAlert