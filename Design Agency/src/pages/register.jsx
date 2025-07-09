import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem(data.email, JSON.stringify(userData));
    console.log("You have successfully register!!");
  };
  // const onErrors = (errors) => {};

  const registrationRequirement = {
    name: { required: "Name is required" },
    mail: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters long",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          {...register("name", registrationRequirement.name)}
        />
        <small>{errors?.name && errors.name.message}</small>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email", registrationRequirement.email)}
        />
        <small>{errors?.email && errors.email.message}</small>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password", registrationRequirement.password)}
        />
        <small>{errors?.password && errors.password.message}</small>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Register;
