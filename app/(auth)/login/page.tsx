import AuthLayout from "@/components/layouts/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
      <p className="text-gray-500 mb-6">Login to continue</p>
      {/* Login form fields go here */}
    </AuthLayout>
  );
}
