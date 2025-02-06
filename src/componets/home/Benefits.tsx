import React from "react"
import { Container }  from "@/componets/share/main/Container"

interface BenefitsProps {
  imgPos?: "left" | "right"
  data: {
    imgPos?: "left" | "right"
    title: string
    desc: string
    image: string
    bullets: {
      title: string
      desc: string
      icon: React.ComponentType
    }[]
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <img
              src={data.image}
              width={521}
              height={521}
              alt="Benefits"
              className={"object-contain"}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-400">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  )
}

interface BenefitProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode;
}

function Benefit(props: BenefitProps) {
  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.createElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
  )
}