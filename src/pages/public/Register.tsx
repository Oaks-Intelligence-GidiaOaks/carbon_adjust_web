import { LogoAndBrandVertical, RegisterGraphic } from "@/assets/icons";
import { Dropdown, Input } from "../../components/ui";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormContext } from "@/types/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemas } from "@/schemas/forms";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import CheckBox from "@/components/ui/CheckBox";
import { useNavigate } from "react-router-dom";
import { accountTypes } from "@/constants";
import AccountActionHeader from "@/components/reusables/account-setup/AccountActionHeader";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () =>
    setShowPassword((prevState) => !prevState);

  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prevState) => !prevState);

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

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="bg-grey-swatch-100 flex justify-center mx-auto">
        <AccountActionHeader action={goToLogin} actionTitle="Login" />
      </div>
      <div className="mt-8 flex justify-center mx-auto">
        <div className="flex justify-between px-14 py-3 w-full max-w-[1440px]">
          <div className="flex justify-start flex-[0.55] flex-col relative">
            <div className="flex flex-col items-center gap-y-7">
              <p className="max-w-[342px] text-center">
                Get compensated for Carbon Credits you generate from Home Energy
                efficiency investments
              </p>
              <LogoAndBrandVertical className="max-h-[100px]" />
            </div>
            <div className="absolute bottom-0 right-0 w-[120%] flex justify-center -z-10 h-full">
              <RegisterGraphic />
            </div>
          </div>
          <div className="bg-glass flex-[0.45] py-9 px-12 rounded-xl max-w-[600px]">
            <p className="text-3xl font-bold">Create an account</p>
            <p className="pt-2">
              Let’s get started with your 30 days free trial
            </p>
            <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
              <Input
                // label="Password"
                type={"text"}
                labelClassName="text-sm 2xl:text-base font-normal"
                name="name"
                register={register}
                wrapperClassName="mt-4"
                error={errors.name?.message}
                placeholder="Name"
              />
              <Input
                // label="Password"
                type={"text"}
                labelClassName="text-sm 2xl:text-base font-normal"
                name="email"
                register={register}
                wrapperClassName="mt-4"
                error={errors.email?.message}
                placeholder="Email"
              />
              <Input
                // label="Password"
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
              <Input
                // label="Password"
                type={showConfirmPassword ? "text" : "password"}
                labelClassName="text-sm 2xl:text-base font-normal"
                name="confirmPassword"
                register={register}
                wrapperClassName="mt-4"
                appendIcon={
                  !showConfirmPassword ? (
                    <EyeIcon
                      width={18}
                      className="cursor-pointer select-none"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <EyeSlashIcon
                      width={18}
                      className="cursor-pointer select-none"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  )
                }
                error={errors.confirmPassword?.message}
                placeholder="Confirm password"
              />
              <Dropdown
                placeholder="Account type"
                wrapperClassName="w-full mt-4"
                name="accountType"
                options={accountTypes}
              />
              <div className="flex gap-x-2 items-start mt-4">
                <CheckBox
                  className="border-2 border-grey-swatch-700"
                  id="t&c"
                  checked={true}
                />
                <p className="font-poppins text-xs text-grey-swatch-800">
                  By clicking create account, you agree to the{" "}
                  <Button
                    variant={"link"}
                    className="inline-flex text-xs py-0 h-fit px-0 bg-transparent text-blue-main hover:underline underline-offset-1 font-normal"
                  >
                    terms and conditions
                  </Button>
                </p>
              </div>
              <Button className="rounded-lg text-white mt-4 w-full h-11">
                Create account
              </Button>
              <p className="mt-6 text-sm">
                Already have an account?{" "}
                <Button
                  variant={"link"}
                  onClick={goToLogin}
                  className="inline-flex text-sm font-bold py-0 h-fit px-0 bg-transparent text-blue-main hover:underline underline-offset-1"
                >
                  Log In
                </Button>
              </p>
            </form>
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

export default Register;
