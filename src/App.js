import React, { useState } from 'react';
import NotificationPanel from './components/NotificationPanel';

const App = () => {
  const [notificationMessage, setNotificationMessage] = useState('');

  const triggerNotification = () => {
    setNotificationMessage('This is a sample notification message');
  };

  const handleClose = () => {
    setNotificationMessage('');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <button onClick={triggerNotification}>Trigger Notification</button>
      {notificationMessage && (
        <NotificationPanel
          message={notificationMessage}
          onClose={handleClose}
          animationDuration={3000}
        />
      )}
    </div>
  );
};

export default App;
