// import React from "react";
import { useContext, useState, useEffect } from "react";
import MyContext from "../../context/data/MyContext"
// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
 
// @icons
import { CpuChipIcon } from "@heroicons/react/24/solid";
import { Navigate, useNavigate } from "react-router-dom";
 
export function CryptoLogin() {

  const context = useContext(MyContext);
  const {user,setUser} = context;
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  
  const nevigate = useNavigate();

  useEffect(() => {
    console.log("User updated:", user); 
  }, [user]);

  const handleLogin = (event) => {
    event.preventDefault();
    setUser({ email, password });
  };

  return (
    <Card
      shadow={false}
      className="md:px-24 md:py-14 py-8 border border-gray-300"
    >
      <CardHeader shadow={false} floated={false} className="text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:text-4xl"
        >
          Web3 Login Simplified
        </Typography>
        <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">
          Enjoy quick and secure access to your accounts on various Web3
          platforms.
        </Typography>
      </CardHeader>
      <CardBody>
        <form
          action="#"
          className="flex flex-col gap-4 md:mt-12"
          onSubmit={handleLogin}
        >
          <div>
            <label htmlFor="email">
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium mb-2"
              >
                Your Email and Password
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div>
            <Input
              id="password"
              color="gray"
              size="lg"
              type="password"
              name="password"
              placeholder="Abc$123***"
              className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <Button size="lg" color="gray" fullWidth type="submit">
            LogIn
          </Button>
          <Button
            variant="outlined"
            size="lg"
            className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
          <Button
            variant="outlined"
            size="lg"
            className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
            fullWidth
          >
            <CpuChipIcon className="h-6 w-6" />
            Wallet Authentication
          </Button>
          <Typography
            variant="small"
            className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
          >
            Upon signing in, you consent to abide by our{" "}
            <a href="#" className="text-gray-900">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="#" className="text-gray-900">
              Privacy Policy.
            </a>
          </Typography>
        </form>
      </CardBody>
    </Card>
  );
}
 
export default CryptoLogin;