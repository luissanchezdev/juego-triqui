function Notification({ message, type }) {
  return (
    <div className={ type === 'success' ? 'bg-green-600 text-white rounded-md my-2 capitalize' : 'bg-red-600 text-white rounded-md my-2 capitalize' }>
      <p>{ message }</p>
    </div>
  )
}

export default Notification
