import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Input from "components/Input";
import Label from "components/Label";
import Select from "components/Select";
import Guest from "layouts/Guest";
import Link from "next/link";
import { ReactElement } from "react";

export default function register() {
  return (
    <div>
      <form>
        <div className="mb-5">
          <Label forInput="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </div>
        <div className="mb-5">
          <Label forInput="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="mb-6">
            <Label forInput="password">Password</Label>
            <Input type="password" name="password" id="password" />
          </div>
          <div className="mb-6">
            <Label forInput="password_confirmation">Confirm Password</Label>
            <Input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
            />
          </div>
        </div>

        <div className="mb-6">
          <Label forInput="gender">Gender</Label>
          <Select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </div>

        <div className="mb-5 flex justify-between">
          <div>
            <Checkbox
              forInput="agree"
              label="Agree With Privacy and Terms"
              name="agree"
              id="agree"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button className="">Register</Button>
          <Link href="/login">
            <a className="text-blue-500 font-normal underline">
              Allready have an account ?
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}
register.getLayout = function getLayout(page: ReactElement) {
  return (
    <Guest cardClassName={"w-2/5"} title="Register" header="Register">
      {page}
    </Guest>
  );
};
