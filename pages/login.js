import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import Styles from "../styles/Form.module.css";
import Image from "next/image";
import {
  HiAtSymbol,
  HiFingerPrint,
  HiLockClosed,
  HiLockOpen,
} from "react-icons/hi";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useFormik } from "formik";
import login_validate from "@/library/validate";
export default function Login() {
  const [show, setShow] = useState(false);
  //Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit: onsubmit,
  });

  async function onsubmit(values) {
    console.log(values);
  }

  // Google sign in function

  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  //Github Sign in function

  async function handleGithubSignIn() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <Layout>
      <Head>
        <title> Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-grey-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Login Forms */}
        <form className="flex flex-col gap-5 " onSubmit={formik.handleSubmit}>
          <div
            className={`${Styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              className={Styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={21} />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500 text-sm">{formik.errors.email}</span>
          ) : (
            <></>
          )} */}
          <div
            className={`${Styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              className={Styles.input_text}
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />

            <span
              className="icon flex items-center px-4"
              onClick={() => {
                setShow(!show);
              }}
            >
              {!show ? <HiLockClosed size={21} /> : <HiLockOpen size={21} />}
              {/* <HiLockClosed size={21} /> */}
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500 text-sm">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )} */}

          {/* Login Buttons */}

          <div className="input-button">
            <button className={Styles.button} type="submit">
              Login
            </button>
          </div>

          {/* Google Sign in */}

          <div className="input-button">
            <button
              className={Styles.button_custom}
              onClick={handleGoogleSignIn}
              type="button"
            >
              Sign in with Google{"   "}
              <Image
                src={"./assets/google.svg"}
                alt="pic"
                width={20}
                height={20}
              ></Image>
            </button>
          </div>

          {/* Github Sign in */}

          <div className="input-button">
            <button
              onClick={handleGithubSignIn}
              type="button"
              className={Styles.button_custom}
            >
              Sign in with Github{"   "}
              <Image
                src={"./assets/github.svg"}
                alt="pic"
                width={25}
                height={25}
              ></Image>
            </button>
          </div>
        </form>
        {/* bottom */}

        <p className="text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}
