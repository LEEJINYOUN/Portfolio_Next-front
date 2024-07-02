"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionLayout from "@/components/layout/SectionLayout";
import ContainerLayout from "@/components/layout/ContainerLayout";
import SectionTitle from "@/components/text/SectionTitle";
import InputLabel from "@/components/text/InputLabel";
import InputItem from "@/components/form/InputItem";
import TextareaItem from "@/components/form/TextareaItem";
import BlueButton from "@/components/button/BlueButton";
import Footer from "@/components/ui/Footer";

export default function ContactPage() {
  const emailSendService = process.env.NEXT_PUBLIC_EMAIL_SEND_SERVICE as string;
  const emailSendTemplate = process.env
    .NEXT_PUBLIC_EMAIL_SEND_TEMPLATE as string;
  const emailSendPublicKey = process.env.NEXT_PUBLIC_EMAIL_SEND_PUBLIC_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const saveName = (event: any) => {
    setName(event.target.value);
  };

  const saveEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const savePhone = (event: any) => {
    setPhone(event.target.value);
  };

  const saveMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const checkEmail = (value: string) => {
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (regEmail.test(value) === true) return true;
    return alert("이메일 형식이 아닙니다. 다시 입력하세요.");
  };

  const sendEmail = () => {
    if (checkEmail(email)) {
      let params = {
        name,
        email,
        phone,
        message,
      };
      if (name != "" && email != "" && phone != "" && message != "") {
        emailjs
          .send(emailSendService, emailSendTemplate, params)
          .then(function () {
            alert("성공적으로 메세지를 전송했습니다.");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          });
      } else {
        alert("빈칸이 있습니다. 전부 다 입력하세요.");
      }
    }
  };

  useEffect(() => {
    emailjs.init({
      publicKey: emailSendPublicKey,
    });
  });

  return (
    <SectionLayout>
      <ContainerLayout>
        <SectionTitle>- contact-</SectionTitle>
        <form className="flex flex-col gap-10 w-3/4 lg:w-4/5 xl:w-2/3 m-auto">
          <div className="grid gap-10 mb-6 md:grid-cols-3">
            <div>
              <InputLabel isFor="name" title="이름" />
              <InputItem
                type="text"
                id="name"
                value={name}
                onChange={saveName}
                isReadOnly={false}
              />
            </div>
            <div>
              <InputLabel isFor="email" title="이메일" />
              <InputItem
                type="email"
                id="email"
                value={email}
                onChange={saveEmail}
                isReadOnly={false}
              />
            </div>
            <div>
              <InputLabel isFor="phone" title="전화번호" />
              <InputItem
                type="text"
                id="phone"
                value={phone}
                onChange={savePhone}
                isReadOnly={false}
              />
            </div>
          </div>
          <div className="mb-6">
            <InputLabel isFor="message" title="메세지" />
            <TextareaItem
              id="message"
              value={message}
              onChange={saveMessage}
              isReadOnly={false}
            />
          </div>
          <BlueButton onClick={sendEmail}>보내기</BlueButton>
        </form>
      </ContainerLayout>
      <Footer />
    </SectionLayout>
  );
}
