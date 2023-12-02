import styles from "./intro.module.scss";
import { Image } from "antd";

export default function IntroWork247({ hidden }: { hidden: boolean }) {
    return (
        <>
            {hidden ? (
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Image
                            src="/img/logo247.svg"
                            preview={false}
                            alt="word247"
                            width={236}
                        />
                    </div>
                    <div className={styles.ten}>
                        <Image
                            src="/img/ten.svg"
                            preview={false}
                            alt="word247"
                            width={840}
                        />
                    </div>
                    <div className={styles.triangle}>
                        <Image
                            src="/img/triangle.svg"
                            preview={false}
                            alt="word247"
                            width={468}
                            height={530}
                        />
                    </div>
                    <div className={styles.line}>
                        <Image
                            src="/img/line.svg"
                            preview={false}
                            alt="word247"
                            width={446}
                            height={540}
                        />
                    </div>
                    <div className={styles.line2}>
                        <Image
                            src="/img/line2.svg"
                            preview={false}
                            alt="word247"
                            width={336}
                            height={490}
                        />
                    </div>
                    <div className={styles.circle}>
                        <Image
                            src="/img/circle.svg"
                            preview={false}
                            alt="word247"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className={styles.circle1}>
                        <Image
                            src="/img/circle.svg"
                            preview={false}
                            alt="word247"
                            width={68}
                            height={68}
                        />
                    </div>{" "}
                    <div className={styles.circle2}>
                        <Image
                            src="/img/circle.svg"
                            preview={false}
                            alt="word247"
                            width={54}
                            height={54}
                        />
                    </div>
                    <div className={styles.circle3}>
                        <Image
                            src="/img/circle.svg"
                            preview={false}
                            alt="word247"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className={styles.square}>
                        <Image
                            src="/img/square.svg"
                            preview={false}
                            alt="word247"
                        />
                    </div>
                    <div className={styles.circle_big}>
                        <div className={styles.pos}>
                            <div className={styles.img_wrapper}>
                                <Image
                                    src="/img/circle_big.svg"
                                    preview={false}
                                    alt="word247"
                                    width={250}
                                    height={250}
                                />
                            </div>

                            <div className={styles.head_phone}>
                                <Image
                                    src="/img/head_phone.svg"
                                    preview={false}
                                    alt="word247"
                                    width={220}
                                />
                            </div>
                            <div className={styles.square_mini_wrapper}>
                                <div className={styles.sound_wave}>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                    <i className={styles.bar}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
