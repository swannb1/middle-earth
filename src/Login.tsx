import formToJson from "./formToJson";
import type { RegisterData } from "./types";

const Login = () => {
  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jsonData: RegisterData = formToJson<RegisterData>(e.currentTarget);

    try {
      const response = await fetch("http://127.0.0.1:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) throw new Error(`Register failed: ${response.status}`);
      const result = await response.json().catch(() => ({}));
      console.log("Registration success:", result);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    const username = (form.get("username") ?? "").toString();
    const password = (form.get("password") ?? "").toString();
    body.set("username", username);
    body.set("password", password);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        body,
      });

      if (!response.ok) throw new Error(`Login failed: ${response.status}`);
      const token = await response.json();
      console.log("Login success:", token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-[120px]">
      <div>
        <div className="relative bg-shire_green">
          {/* Transparent Leaves Background Layer */}
          <div
            className="absolute inset-0 bg-[url('/src/assets/images/leaves_texture.svg')] bg-cover opacity-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Content Layer */}
          <div className="relative z-10 h-screen flex items-center justify-center px-6 gap-6">
            {/* Registration Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-10 text-center w-full max-w-md">
              <p className="text-4xl font-quicksand mb-6">New User</p>
              <form className="space-y-5 text-left" onSubmit={handleRegisterSubmit}>
                {/* Username */}
                <div>
                  <label htmlFor="reg-username" className="block text-sm font-medium text-gray-800">
                    Username
                  </label>
                  <input
                    type="text"
                    id="reg-username"
                    name="username"
                    autoComplete="username"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-800">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    autoComplete="name"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="reg-email" className="block text-sm font-medium text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    id="reg-email"
                    name="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="reg-password" className="block text-sm font-medium text-gray-800">
                    Password
                  </label>
                  <input
                    type="password"
                    id="reg-password"
                    name="password"
                    autoComplete="new-password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full !rounded-xl bg-green-500 text-white font-semibold py-2 shadow-md hover:bg-green-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Login Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-10 text-center w-full max-w-md">
              <p className="text-4xl font-quicksand mb-6">Login</p>
              <form className="space-y-5 text-left" onSubmit={handleLoginSubmit}>
                <div>
                  <label htmlFor="login-username" className="block text-sm font-medium text-gray-800">
                    Username
                  </label>
                  <input
                    type="text"
                    id="login-username"
                    name="username"
                    autoComplete="username"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-800">
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    name="password"
                    autoComplete="current-password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full !rounded-xl bg-green-500 text-white font-semibold py-2 shadow-md hover:bg-green-600 transition"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
