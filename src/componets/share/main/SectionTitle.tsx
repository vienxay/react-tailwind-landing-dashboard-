import React from "react";
import { Container } from "@/componets/share/main/Container";

interface SectionTitleProps {
  preTitle?: string;
  title: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export  function SectionTitle(props: Readonly<SectionTitleProps>) {
  return (
    <Container
      className={`flex flex-col w-full mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-wider lg:leading-tight lg:text-4xl">
          {props.title}
        </div>
      )}

      {props.children && (
        <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {props.children}
        </div>
      )}
    </Container>
  );
}
