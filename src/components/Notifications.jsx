import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = ({ message, type }) => {
	toast(message);

	return <ToastContainer />;
};

export default Notifications;
