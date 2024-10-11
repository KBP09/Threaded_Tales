import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

function Main() {
  const [userProfilePic, setUserProfilePic] = useState('');

  return (
    <Auth0Provider
      domain="dev-t8noyagy1ozp2ndx.us.auth0.com"
      clientId="uhZrNIcAia0fl4BF6MNus0F2yVMNYnL3"
      authorizationParams={{
        redirect_uri: window.location.origin // This ensures that after login, users are redirected to /home
      }}
    >
      <App userProfilePic={userProfilePic} setUserProfilePic={setUserProfilePic} />
    </Auth0Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
