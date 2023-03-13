import { copies } from "@/assets/utils/characteristic.copy";
import { FC, useRef, useEffect, useState } from "react";
import clsx from "clsx";
import CardComponent from "../card/card";
import styles from "./characteristic.module.css";
import Image from "next/image";

import ShieldIcon from "@/assets/icons/shield-icon.svg";
import StarIcon from "@/assets/icons/star-icon.svg";
import ThumbIcon from "@/assets/icons/thumb-icon.svg";
import triggerOnScreenRef from "@/hooks/trigger-on-screen-ref";

const CharacteristicsComponent: FC = () => {
  const ref = useRef<any>();
  const {active} = triggerOnScreenRef({ref});


  return (
    <section
      className={clsx(styles["container"], "container-zoom")}
      id="characteristic"
    >
      <div ref={ref} className={clsx(styles["wrapper-card"])}>
        <CardComponent
          title={copies["Characteristics"]?.[0]?.["Title"]}
          description={copies["Characteristics"]?.[0]?.["Description"]}
          className={active ? "fade-in--up" : ''}
          icon={<Image priority src={ShieldIcon} alt="MercuryInc Image 2" />}
        />
        <CardComponent
          title={copies["Characteristics"]?.[1]?.["Title"]}
          description={copies["Characteristics"]?.[1]?.["Description"]}
          className={active ? "fade-in--up" : ''}
          icon={<Image priority src={StarIcon} alt="MercuryInc Image 2" />}
        />
        <CardComponent
          title={copies["Characteristics"]?.[2]?.["Title"]}
          description={copies["Characteristics"]?.[2]?.["Description"]}
          className={active ? "fade-in--up" : ''}
          icon={<Image priority src={ThumbIcon} alt="MercuryInc Image 2" />}
        />
      </div>
    </section>
  );
};

export default CharacteristicsComponent;
