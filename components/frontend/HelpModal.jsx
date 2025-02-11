"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";
import {
  CornerDownLeft,
  Headphones,
  HelpCircle,
  MessageSquare,
  Truck,
} from "lucide-react";
import Link from "next/link";
export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <button
        onClick={() => setOpenModal(true)}
        href="/"
        className="flex items-center space-x-1 text-green-950  dark:text-slate-100"
      >
        <HelpCircle />
        <span>Help</span>
      </button>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        // className="w-4/6 mx-auto"
      >
        <Modal.Header>
          Need Help With Shoping, Talk To Our Help Desk
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-2  gap-6 ">
            <Link
              href="tel:12553366"
              className="flex items-center space-x-2 text-green-950  dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10   bg-lime-100 justify-center rounded-full">
                <Headphones className="w-6 h-6 text-lime-800" />
              </div>
              <span>Call: 078800994646</span>
            </Link>
            <Link
              href="/track"
              className="flex items-center space-x-2 text-green-950  dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10   bg-lime-100 justify-center rounded-full">
                <Truck className="w-6 h-6 text-lime-800" />
              </div>
              <span>Track Your Order</span>
            </Link>
            <Link
              href="tel:12553366"
              className="flex items-center space-x-2 text-green-950  dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10   bg-lime-100 justify-center rounded-full">
                <CornerDownLeft className="w-6 h-6 text-lime-800" />
              </div>
              <span>Returns and Refunds</span>
            </Link>
            <Link
              href="tel:12553366"
              className="flex items-center space-x-2 text-green-950  dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10   bg-lime-100 justify-center rounded-full">
                <MessageSquare className="w-6 h-6 text-lime-800" />
              </div>
              <span>Chat With Us</span>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
