import React, { useState } from 'react';

function Registration() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsValid(validatePassword(value));
  };

  const validatePassword = (password) => {
    // Length check
    if (password.length < 6 || password.length > 20) {
      return false;
    }

    // Character composition check
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    if (!hasLowercase || !hasUppercase || !hasDigit) {
      return false;
    }

    // Repeating characters check
    for (let i = 0; i < password.length - 2; i++) {
      if (
        password.charAt(i) === password.charAt(i + 1) &&
        password.charAt(i + 1) === password.charAt(i + 2)
      ) {
        return false;
      }
    }

    return true;
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      {isValid ? <span style={{ color: 'green' }}>Strong password</span> : null}
      {!isValid ? <span style={{ color: 'red' }}>Weak password</span> : null}
    </div>
  );
}

export default Registration;
