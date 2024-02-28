"use client";
import React, { useRef } from "react";
import { spaceGrotesk } from "../fonts";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef(null);
  const submit = (e: any) => {
    e.preventDefault();
    const currentForm = form.current as unknown as HTMLFormElement;
    form.current &&
      emailjs
        .sendForm(
          "portfolio",
          "contact_form",
          form.current,
          `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
        )
        currentForm && currentForm.reset();
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      ref={form}
      className={`flex flex-col gap-5 md:gap-10 mt-10 mb-10 items-start`}
      onSubmit={submit}
    >
      <div className="w-full">
        <label
          htmlFor="name"
          className={`${spaceGrotesk.className} !font-semibold`}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="flex items-center p-4 bg-[#F1ECE6] text-black focus:!border-2 focus:!border-bronze md:w-[400px] w-full outline-none"
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="email"
          className={`${spaceGrotesk.className} !font-semibold`}
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="flex items-center p-4 bg-[#F1ECE6] text-black focus:!border-2 focus:!border-bronze md:w-[400px] w-full outline-none"
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="message"
          className={`${spaceGrotesk.className} !font-semibold`}
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="flex items-center p-4 bg-[#F1ECE6] text-black focus:!border-2 focus:!border-bronze md:w-[400px] w-full h-[240px] resize-none outline-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="flex justify-center items-center w-full md:w-40 pt-4 pb-4 pl-2 pr-2 !font-semibold bg-black text-white hover:text-bronze duration-500"
      >
        Send
      </button>
    </motion.form>
  );
}

export default Form;
