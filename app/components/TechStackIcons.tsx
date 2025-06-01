import { cn, getTechLogos } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const TechStackIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);
  return (
    <>
      <div className="flex flex-row">
        {techIcons.slice(0, 3).map(({ tech, url }, index) => {
          return (
            <div
              className={cn(
                "relative group bg-dark-300 rounded-full p-2 flex-center",
                index >= 1 && "-ml-3"
              )}
              key={tech}
            >
              <span className="tech-tooltip">{tech}</span>
              <Image
                className="size-5"
                src={url}
                alt={tech}
                width={50}
                height={50}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
