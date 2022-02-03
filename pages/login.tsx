import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Input from "components/Input";
import Label from "components/Label";
import Guest from "layouts/Guest";
import Link from "next/link";
import { ReactElement } from "react";

export default function login() {
  return (
    <div>
      <form>
        <div className="mb-5">
          <Label forInput="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </div>
        <div className="mb-6">
          <Label forInput="password">Password</Label>
          <Input type="password" name="password" id="password" />
        </div>
        <div className="mb-5 flex justify-between">
          <div>
            <Checkbox
              forInput="remember"
              label="Remember Me"
              name="remember"
              id="remember"
            />
          </div>
          <a href="#">Forgot Password</a>
        </div>
        <div className="flex justify-between items-center">
          <Button className="">Login</Button>
          <Link href="/Register">
            <a className="text-blue-500 font-normal underline">New user ?</a>
          </Link>
        </div>
      </form>
    </div>
  );
}
login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Guest cardClassName="" title="Selamat Datang" header="Login">
      {page}
    </Guest>
  );
};
