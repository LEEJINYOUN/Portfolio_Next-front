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
import {
  EMAIL_SEND_PUBLIC_KEY,
  EMAIL_SEND_SERVICE,
  EMAIL_SEND_TEMPLATE,
} from "@/constants/contact/EmailKey";

export default function ContactPage() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const checkEmail = (value: string) => {
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (regEmail.test(value) === true) return true;
    return alert("이메일 형식이 아닙니다. 다시 입력하세요.");
  };

  const sendEmail = () => {
    if (checkEmail(inputData.email)) {
      const params = {
        name: inputData.name,
        email: inputData.email,
        phone: inputData.phone,
        message: inputData.message,
      };
      if (
        inputData.name != "" &&
        inputData.email != "" &&
        inputData.phone != "" &&
        inputData.message != ""
      ) {
        emailjs
          .send(EMAIL_SEND_SERVICE, EMAIL_SEND_TEMPLATE, params)
          .then(function () {
            alert("성공적으로 메세지를 전송했습니다.");
            setInputData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          });
      } else {
        alert("빈칸이 있습니다. 전부 다 입력하세요.");
      }
    }
  };

  useEffect(() => {
    emailjs.init({
      publicKey: EMAIL_SEND_PUBLIC_KEY,
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
                name="name"
                value={inputData.name}
                onChange={onChange}
                isReadOnly={false}
              />
            </div>
            <div>
              <InputLabel isFor="email" title="이메일" />
              <InputItem
                type="email"
                id="email"
                name="email"
                value={inputData.email}
                onChange={onChange}
                isReadOnly={false}
              />
            </div>
            <div>
              <InputLabel isFor="phone" title="전화번호" />
              <InputItem
                type="text"
                id="phone"
                name="phone"
                value={inputData.phone}
                onChange={onChange}
                isReadOnly={false}
              />
            </div>
          </div>
          <div className="mb-6">
            <InputLabel isFor="message" title="메세지" />
            <TextareaItem
              id="message"
              name="message"
              value={inputData.message}
              onChange={onChange}
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
