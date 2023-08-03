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
  HiOutlineUser,
} from "react-icons/hi";
import { useState } from "react";
export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  return (
    <Layout>
      <Head>
        <title> Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-grey-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Login Forms */}
        <form className="flex flex-col gap-5">
          <div className={Styles.input_group}>
            <input
              className={Styles.input_text}
              type="text"
              name="Username"
              placeholder="Username"
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={21} />
            </span>
          </div>
          <div className={Styles.input_group}>
            <input
              className={Styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={21} />
            </span>
          </div>
          <div className={Styles.input_group}>
            <input
              className={Styles.input_text}
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
            />

            <span
              className="icon flex items-center px-4"
              onClick={() => {
                setShow({
                  ...show,
                  password: !show.password,
                });
              }}
            >
              {!show.password ? (
                <HiLockClosed size={21} />
              ) : (
                <HiLockOpen size={21} />
              )}
              {/* <HiLockClosed size={21} /> */}
            </span>
          </div>
          <div className={Styles.input_group}>
            <input
              className={Styles.input_text}
              type={`${show.cpassword ? "text" : "password"}`}
              name="Cpassword"
              placeholder="Confirm Password"
            />

            <span
              className="icon flex items-center px-4"
              onClick={() => {
                setShow({
                  ...show,
                  cpassword: !show.cpassword,
                });
              }}
            >
              {!show.cpassword ? (
                <HiLockClosed size={21} />
              ) : (
                <HiLockOpen size={21} />
              )}
              {/* <HiLockClosed size={21} /> */}
            </span>
          </div>

          {/* Login Buttons */}

          <div className="input-button">
            <button className={Styles.button} type="submit">
              Sign Up
            </button>
          </div>
        </form>
        {/* bottom */}

        <p className="text-center text-gray-400">
          Have an account?{" "}
          <Link href={"/login"} className="text-blue-700">
            Sign In
          </Link>
        </p>
      </section>
    </Layout>
  );
}
