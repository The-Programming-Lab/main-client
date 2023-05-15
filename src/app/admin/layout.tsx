import ProtectedRoute from "@/src/firebase/auth/ProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
