import ReactDOM from 'react-dom';
function Notification(props: any) {
  const { title, message, status } = props;

  let statusClasses = '';

  const baseClasses =
    'flex justify-between items-center text-gray-100 p-8 fixed h-20 bottom-0 w-full left-0 shadow-lg';
  statusClasses =
    status === 'success' ? 'bg-green-500 text-gray-800' : 'bg-red-500';
  const responsiveClasses =
    'md:w-160 md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-t-md';

  const cssClasses = `${baseClasses} ${statusClasses} ${responsiveClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2 className='text-2xl m-0'>{title}</h2>
      <p className='m-0'>{message}</p>
    </div>,
    document.getElementById('notifications') as Element
  );
}
export default Notification;
