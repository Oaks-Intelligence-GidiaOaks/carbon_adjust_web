import { LogoAndBrandVertical, RegisterGraphic } from "@/assets/icons";
import { Input } from "../../components/ui";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormContext } from "@/types/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemas } from "@/schemas/forms";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import AccountActionHeader from "@/components/reusables/account-setup/AccountActionHeader";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () =>
    setShowPassword((prevState) => !prevState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormContext>({
    resolver: yupResolver(FormSchemas().RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormContext> = (data) => {
    console.log(data);
  };

  const goToRegistration = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="h-[calc(100vh-60px)]">
        <div className="bg-grey-swatch-100 flex justify-center mx-auto">
          <AccountActionHeader
            action={goToRegistration}
            actionTitle="Register"
          />
        </div>
        <div className="mt-8 flex justify-center mx-auto">
          <div className="flex justify-between px-14 py-3 w-full max-w-[1440px]">
            <div className="flex justify-start min-h-screen flex-[0.55] flex-col relative">
              <div className="flex flex-col items-center gap-y-7 pt-10">
                <p className="max-w-[342px] text-center">
                  In need of Carbon Credit?
                  <br /> Get it with
                </p>
                <LogoAndBrandVertical className="max-h-[100px]" />
              </div>
              <RegisterGraphic className="absolute bottom-0 right-0 w-[120%] flex justify-center -z-10 min-h-[720px]" />
            </div>
            <div className="bg-glass h-fit flex-[0.45] py-9 px-12 rounded-xl max-w-[600px]">
              <p className="text-3xl font-bold">Login</p>
              <p className="pt-2">Welcome back, please enter your details.</p>
              <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type={"text"}
                  labelClassName="text-sm 2xl:text-base font-normal"
                  name="email"
                  register={register}
                  wrapperClassName="mt-4"
                  error={errors.email?.message}
                  placeholder="Email"
                />
                <Input
                  type={"text"}
                  labelClassName="text-sm 2xl:text-base font-normal"
                  name="password"
                  register={register}
                  wrapperClassName="mt-4"
                  appendIcon={
                    !showPassword ? (
                      <EyeIcon
                        width={18}
                        className="cursor-pointer select-none"
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <EyeSlashIcon
                        width={18}
                        className="cursor-pointer select-none"
                        onClick={togglePasswordVisibility}
                      />
                    )
                  }
                  error={errors.password?.message}
                  placeholder="Password"
                />
                <Button className="rounded-lg text-white mt-4 w-full h-11">
                  Login
                </Button>
                <p className="mt-6 text-sm">
                  Don't have an account?{" "}
                  <Button
                    variant={"link"}
                    onClick={goToRegistration}
                    className="inline-flex text-sm font-bold py-0 h-fit px-0 bg-transparent text-blue-main hover:underline underline-offset-1"
                  >
                    Register
                  </Button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1440px] text-center mt-10 text-sm">
          Copyright Copyright Escrow-Tech Limited {new Date().getFullYear()}.
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
