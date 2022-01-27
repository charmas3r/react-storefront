import {useAuth, useAuthState} from "@saleor/sdk";
import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";
import {useForm} from "react-hook-form";

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.VFC = () => {
  const router = useRouter();
  const {login} = useAuth();
  const {authenticated} = useAuthState();
  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: {errors: errorsForm},
    setError: setErrorForm,
    getValues,
  } = useForm<LoginFormData>({});

  const redirectURL = router.query.next?.toString() || "/";

  const handleLogin = handleSubmitForm(async (formData: LoginFormData) => {
    const {data} = await login({
      email: formData.email,
      password: formData.password,
    });

    if (data?.tokenCreate?.errors[0]) {
      // Unable to sign in.
      console.log(data?.tokenCreate?.errors);
      setErrorForm("email", {message: "Invalid credentials"});
    }
  });
  if (authenticated) {
    // User signed in successfully.
    router.push(redirectURL);
    return null;
  }

  return (
    <div className="hero min-h-screen bg-base-200" data-theme="garden">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold text-gray-800">
            Hello there
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
          <div>
            <form onSubmit={handleLogin}>
              <div>
                <span className="text-sm text-gray-800">Welcome</span>
                <h1 className="text-2xl font-bold">Login to your account</h1>
              </div>
              <div className="my-3">
                <label className="block text-md mb-2">Email</label>
                <input
                  className="w-full input input-primary input-bordered text-accent-content"
                  type="email"
                  placeholder="email"
                  {...registerForm("email", {
                    required: true,
                  })}
                />
              </div>
              <div className="mt-5">
                <label className="block text-md mb-2">Password</label>
                <input
                  className="w-full input input-primary input-bordered text-accent-content"
                  type="password"
                  placeholder="password"
                  {...registerForm("password", {
                    required: true,
                  })}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-green-700 hover:underline cursor-pointer pt-2">
                  Forgot password?
                </span>
              </div>
              <div className="">
                <button
                  className="btn btn-primary mt-6">
                  Login now
                </button>
                {!!errorsForm.email && (
                  <p className="text-sm text-red-500 pt-2">
                    {errorsForm.email?.message}
                  </p>
                )}
              </div>
            </form>
            <p className="mt-8">
              {" "}
              Dont have an account?{" "}
              <Link href="/account/register">
                <a className="text-green-700"> Register!</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
