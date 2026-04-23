import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../features/auth/pages/AuthContext";

const MobileSidebarContext = createContext(null);

const DEMO_USERS = {
  "admin@school.com": { 
    password: "admin@2026", 
    name: "Ebenezer", 
    role: "admin" 
  },
  "teacher@school.com": {
    password: "teacher@2026",
    name: "Mrs. Mensah",
    role: "teacher",
  },
  "student@school.com": {
    password: "student@2026",
    name: "Kojo",
    role: "student",
  },
};

export function Providers({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const openMobileSidebar = useCallback(() => setIsMobileSidebarOpen(true), []);
  const closeMobileSidebar = useCallback(() => setIsMobileSidebarOpen(false), []);
  const toggleMobileSidebar = useCallback(
    () => setIsMobileSidebarOpen((current) => !current),
    []
  );

  useEffect(() => {
    document.body.classList.toggle("mobile-sidebar-open", isMobileSidebarOpen);

    return () => {
      document.body.classList.remove("mobile-sidebar-open");
    };
  }, [isMobileSidebarOpen]);

  async function login({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const matchedUser = DEMO_USERS[normalizedEmail];

    if (!matchedUser || matchedUser.password !== password) {
      throw new Error("Invalid email or password");
    }

    const authenticatedUser = {
      email: normalizedEmail,
      name: matchedUser.name,
      role: matchedUser.role,
    };

    localStorage.setItem("token", "demo-token");
    localStorage.setItem("user", JSON.stringify(authenticatedUser));
    setUser(authenticatedUser);

    return authenticatedUser;
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }

  const authValue = useMemo(() => ({ user, login, logout }), [user]);
  const mobileSidebarValue = useMemo(
    () => ({
      isMobileSidebarOpen,
      openMobileSidebar,
      closeMobileSidebar,
      toggleMobileSidebar,
    }),
    [closeMobileSidebar, isMobileSidebarOpen, openMobileSidebar, toggleMobileSidebar]
  );

  return (
    <AuthContext.Provider value={authValue}>
      <MobileSidebarContext.Provider value={mobileSidebarValue}>
        {children}
      </MobileSidebarContext.Provider>
    </AuthContext.Provider>
  );
}

export function useMobileSidebar() {
  const context = useContext(MobileSidebarContext);

  if (!context) {
    throw new Error("useMobileSidebar must be used within Providers");
  }

  return context;
}
