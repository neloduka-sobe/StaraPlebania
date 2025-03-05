import { useEffect } from 'react';

function RedirectToHome() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return null;
}

export default RedirectToHome;
