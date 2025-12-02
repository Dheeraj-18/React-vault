import React, { useState } from "react";
import Modal from "./Modal";

export  function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className="text-xl">
        Connect with Us on{" "}
        <a
          className="text-blue-600 hover:text-blue-800"
          href="https://www.linkedin.com/in/dheeraj3/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
      </h1>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Popup
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-2xl font-bold text-red-400">Hii</p>}
        footer={
          <div className="flex justify-end">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="cursor-pointer rounded bg-slate-300 px-4 py-1 font-bold"
            >
              OK
            </button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          impedit dolorum dolor tenetur, eligendi in repudiandae facilis illum
          placeat ut neque, voluptas ducimus reiciendis! Possimus tempora
          voluptatem incidunt explicabo quaerat?
        </p>
      </Modal>
    </>
  );
}
