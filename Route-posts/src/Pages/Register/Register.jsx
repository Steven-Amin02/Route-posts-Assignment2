import { useState } from "react";
import { Link } from "react-router";
import {
  Button,
  Input,
  InputGroup,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { Calendar, Eye, EyeSlash, Person, Persons } from "@gravity-ui/icons";

//for styling
const fieldClassNames = {
  inputWrapper:
    "w-100 h-12 rounded-xl border border-slate-200 bg-slate-50 shadow-none data-[focus=true]:border-main data-[focus=true]:ring-2 data-[focus=true]:ring-blue-100",
  input: "text-sm text-slate-800 placeholder:text-slate-400",
};

function FieldIcon({ children }) {
  return (
    <span className="flex h-5 w-5 items-center justify-center text-slate-400">
      {children}
    </span>
  );
}

export default function Register() {
  //controlled component  and un controlled component

  const [FullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  console.log(FullName)
  function submitData() {
    const formData = {
      name: FullName,
    };
  }
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-sm sm:p-7">
      <div className="flex rounded-xl bg-slate-100 p-1 text-sm font-bold">
        <Link
          to=".."
          className="flex-1 rounded-lg px-4 py-3 text-center text-slate-600 transition-colors hover:text-main"
        >
          Login
        </Link>
        <Link
          to="."
          className="flex-1 rounded-lg bg-white px-4 py-3 text-center text-main shadow-sm"
        >
          Register
        </Link>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Create a new account
        </h1>
        <p className="mt-1 text-sm text-slate-500">It is quick and easy.</p>
      </div>

      <form
        className="mt-5 space-y-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <Input
          value={FullName}
          onChange={(e) => setFullName(e.target.value)}
          aria-label="Full name"
          className="w-full"
          classNames={fieldClassNames}
          placeholder="Full name"
          startContent={
            <FieldIcon>
              <Person className="size-5" />
            </FieldIcon>
          }
          type="text"
        />

        <Input
          aria-label="Username"
          className="w-full"
          classNames={fieldClassNames}
          placeholder="Username (optional)"
          startContent={
            <FieldIcon>
              <span className="text-base font-semibold">@</span>
            </FieldIcon>
          }
          type="text"
        />

        <Input
          aria-label="Email address"
          className="w-full"
          classNames={fieldClassNames}
          placeholder="Email address"
          startContent={
            <FieldIcon>
              <span className="text-base font-semibold">@</span>
            </FieldIcon>
          }
          type="email"
        />

        <Select
          aria-label="Gender"
          className="w-full"
          placeholder="Select gender"
        >
          <Select.Trigger className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-3 shadow-none data-[focus=true]:border-main data-[focus=true]:ring-2 data-[focus=true]:ring-blue-100">
            <FieldIcon>
              <Persons className="size-5" />
            </FieldIcon>
            <Select.Value className="text-sm text-slate-800" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="male" textValue="Male">
                Male
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="female" textValue="Female">
                Female
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField aria-label="Date of birth" className="w-full">
          <InputGroup className="h-12 rounded-xl border border-slate-200 bg-slate-50 shadow-none data-[focus-within=true]:border-main data-[focus-within=true]:ring-2 data-[focus-within=true]:ring-blue-100">
            <InputGroup.Prefix>
              <Calendar className="size-5 text-slate-400" />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Date of birth"
              className="text-sm text-slate-800 placeholder:text-slate-400"
              placeholder="mm/dd/yyyy"
              type="date"
            />
          </InputGroup>
        </TextField>

        <TextField aria-label="Password" className="w-full">
          <InputGroup className="h-12 rounded-xl border border-slate-200 bg-slate-50 shadow-none data-[focus-within=true]:border-main data-[focus-within=true]:ring-2 data-[focus-within=true]:ring-blue-100">
            <InputGroup.Prefix>
              <span className="text-lg text-slate-400">⌕</span>
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Password"
              className="text-sm text-slate-800 placeholder:text-slate-400"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <InputGroup.Suffix>
              <button
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-slate-400 hover:text-main"
                onClick={() => setShowPassword((visible) => !visible)}
                type="button"
              >
                {showPassword ? (
                  <EyeSlash className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
        {/*                                */}
        <TextField aria-label="Confirm Password" className="w-full">
          <InputGroup className="h-12 rounded-xl border border-slate-200 bg-slate-50 shadow-none data-[focus-within=true]:border-main data-[focus-within=true]:ring-2 data-[focus-within=true]:ring-blue-100">
            <InputGroup.Prefix>
              <span className="text-lg text-slate-400">⌕</span>
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Confirm Password"
              className="text-sm text-slate-800 placeholder:text-slate-400"
              placeholder="Confirm Password"
              type={showPassword ? "text" : "password"}
            />
            <InputGroup.Suffix>
              <button
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-slate-400 hover:text-main"
                onClick={() => setShowPassword((visible) => !visible)}
                type="button"
              >
                {showPassword ? (
                  <EyeSlash className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
        {/*                                */}

        <Button
          className="h-12 w-full rounded-xl bg-main text-base font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2"
          fullWidth
          type="submit"
        >
          Create New Account
        </Button>
      </form>
    </div>
  );
}
