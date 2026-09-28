import { Link } from "react-router";
import { Button, Input } from "@heroui/react";

export default function Login() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-sm sm:p-7">
      <div className="flex rounded-xl bg-slate-100 p-1 text-sm font-bold">
        <Link
          to="."
          className="flex-1 rounded-lg bg-white px-4 py-3 text-center text-main shadow-sm"
        >
          Login
        </Link>
        <Link
          to="register"
          className="flex-1 rounded-lg px-4 py-3 text-center text-slate-600 transition-colors hover:text-main"
        >
          Register
        </Link>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Log in to Route Posts
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Log in and continue your social journey.
        </p>
      </div>

      <form
        className="mt-5 space-y-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <Input
          aria-label="Email or username"
          className="w-full"
          classNames={{
            inputWrapper:
              "h-12 rounded-xl border border-slate-200 bg-slate-50 shadow-none data-[focus=true]:border-main data-[focus=true]:ring-2 data-[focus=true]:ring-blue-100",
            input: "text-sm text-slate-800 placeholder:text-slate-400",
          }}
          placeholder="Email or username"
          startContent={
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5.5 20c.7-3.2 2.7-5 6.5-5s5.8 1.8 6.5 5" />
            </svg>
          }
          type="text"
        />

        <Input
          aria-label="Password"
          className="w-full"
          classNames={{
            inputWrapper:
              "h-12 rounded-xl border border-slate-200 bg-slate-50 shadow-none data-[focus=true]:border-main data-[focus=true]:ring-2 data-[focus=true]:ring-blue-100",
            input: "text-sm text-slate-800 placeholder:text-slate-400",
          }}
          placeholder="Password"
          startContent={
            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="8.5" cy="15.5" r="3.5" />
              <path d="m11 13 7-7a2.1 2.1 0 0 1 3 3l-7 7M17 9l-2-2m-1 5-2-2" />
            </svg>
          }
          type="password"
        />

        <Button
          className="h-12 w-full rounded-xl bg-main text-base font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2"
          fullWidth
          type="submit"
        >
          Log In
        </Button>
      </form>

      <Link
        to="#"
        className="mt-4 block text-center text-sm font-medium text-main hover:underline"
      >
        Forgot password?
      </Link>
    </div>
  );
}
