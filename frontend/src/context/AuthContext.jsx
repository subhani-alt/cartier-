import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('aurelia_user');
    return saved ? JSON.parse(saved) : {
      name: 'Lord Aurelius',
      email: 'collector@aurelia.luxury',
      role: 'customer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      token: 'demo_jwt_token'
    };
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('aurelia_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('aurelia_user');
    }
  }, [user]);

  const login = (email, role = 'customer') => {
    const newUser = {
      name: role === 'admin' ? 'Maison Administrator' : 'Valued Collector',
      email: email || (role === 'admin' ? 'admin@aurelia.luxury' : 'collector@aurelia.luxury'),
      role,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      token: 'demo_jwt_token'
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  const toggleAdminRole = () => {
    const newRole = user?.role === 'admin' ? 'customer' : 'admin';
    login(user?.email, newRole);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, toggleAdminRole, isAdmin: user?.role === 'admin' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
