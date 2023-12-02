import { useEffect, useState } from "react";
import IntroWork247 from "../InTro/Work247";
import styles from "./content.module.scss";
import TitleWork247UV from "../Title/uv-work247";
import OutTroWork247 from "../OutTro";
import { Image } from "antd";
import HeadePhone from "../Animation/head-phone";
import SliderTdWork from "../Swiper/td-work247";

export default function ContentVideoTD({
    user,
    totalTime,
    title,
    listSlices,
    listTime,
}: {
    user: any;
    totalTime: number;
    title: string;
    listSlices: any;
    listTime: any;
}) {
    const [hiddenInTro, setHiddenInTro] = useState(true);
    const [hiddenOutTro, setHiddenOutTro] = useState(false);
    const [hiddenTitle, setHiddenTitle] = useState(false);
    const [step2, setStep2] = useState(false);
    const [step1, setStep1] = useState(false);
    const [sliderState, setSliderState] = useState<boolean[]>([]);
    useEffect(() => {
        setTimeout(() => {
            setHiddenInTro(false);
            setHiddenTitle(true);
        }, 8000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setStep1(true);
            setHiddenTitle(false);
        }, 10000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setHiddenOutTro(true);
            setStep2(false);
        }, totalTime - 7000);
    }, []);
    useEffect(() => {
        if (listSlices?.length > 0) {
            setTimeout(() => {
                setStep1(false);
                doTasksAtTimeIntervals(listTime);
                setStep2(true);
            }, listTime[0]);
        }
    }, [listSlices]);
    let arr: boolean[] = [];

    useEffect(() => {
        if (listSlices?.length > 0) {
            setSliderState(new Array(listSlices.length).fill(false));
            arr = new Array(listSlices.length).fill(false);
        }
    }, []);
    if (listSlices?.length > 0) {
        arr = new Array(listSlices.length).fill(false);
    }
    function doTasksAtTimeIntervals(timeIntervals: number[]): void {
        console.log("actions");
        function executeTaskAtIndex(index: number): void {
            if (index < timeIntervals.length) {
                arr[index] = true;
                setSliderState([...arr]);
                arr = new Array(listSlices.length).fill(false);
                setTimeout(() => {
                    executeTaskAtIndex(index + 1);
                }, timeIntervals[index + 1] - timeIntervals[index]);
            }
        }

        executeTaskAtIndex(0);
    }
    const item = {
        title: user.user_name,
        img: user.logo_user,
    };
    return (
        <>
            <div className={styles.content}>
                {hiddenInTro ? <IntroWork247 hidden={hiddenInTro} /> : <></>}
                {hiddenTitle ? (
                    <Image src="/video/img/td-work.jpg" preview={false} />
                ) : (
                    <></>
                )}
                {step1 ? (
                    <TitleWork247UV
                        hidden={true}
                        title={title}
                        forwards={true}
                    />
                ) : (
                    <></>
                )}
                {step2 && (
                    <>
                        {listSlices?.map((item: any, index: number) => (
                            <>
                                {sliderState[index] ? (
                                    <div
                                        style={{
                                            width: "960px",
                                            height: "520px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                        key={index}
                                    >
                                        <SliderTdWork item={item} />
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </>
                        ))}
                    </>
                )}
                {hiddenOutTro ? <OutTroWork247 hidden={hiddenOutTro} /> : <></>}
            </div>
        </>
    );
}
