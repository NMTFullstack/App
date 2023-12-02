import { Button, Tabs } from "antd";
import TabsContent from "./tabs/tabs";
import { useEffect, useState } from "react";
import instance from "@/components/hooks/axios.config";
import { useRouter } from "next/router";
import Link from "next/link";
export default function MangerVideoPlayer() {
    const items = [
        {
            label: " Work247",
            children: <TabsContent index={1} />,
            key: "1",
        },
        {
            label: "Hungha365",
            children: <TabsContent index={2} />,
            key: "2",
        },
        {
            label: "Timviec365",
            children: <TabsContent index={3} />,
            key: "3",
        },
    ];
    const [getToken, setGetToken] = useState("");
    useEffect(() => {
        const unFollow = async () => {
            const fetcher = async () => {
                return await instance.post("/api/qlc/videoai/getTokenYoutube");
            };
            const data = await fetcher();
            setGetToken(data.data.data.url);
        };
        unFollow();
    }, []);
    return (
        <div className="h-100">
            <div className="my-8 flex flex-align-center  gap-20">
                <div>
                    <h3>Tự động xuất video dựa theo img,audio</h3>
                </div>
                <div className="my-8">
                    <Button
                        onClick={() => {
                            let windowWidth = 964;
                            let windowHeight = 560;

                            let windowLeft =
                                (window.screen.width - windowWidth) / 2;
                            let windowTop =
                                (window.screen.height - windowHeight) / 2;
                            window.open(
                                `${getToken}`,
                                "_blank",
                                "width=" +
                                    windowWidth +
                                    ", height=" +
                                    windowHeight +
                                    ", left=" +
                                    windowLeft +
                                    ", top=" +
                                    windowTop
                            );
                        }}
                    >
                        Lấy token
                    </Button>
                </div>
            </div>

            <div className="h-100 ">
                <Tabs items={items} centered type="card" />
            </div>
        </div>
    );
}
