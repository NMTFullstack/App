import instance from "@/components/hooks/axios.config";
import { dispatch } from "@/redux/storeQLC";
import { Button, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {
    getListId,
    getTotalTime,
    setFrom,
    setType,
} from "../common/redux/reducer";
import Link from "next/link";

export default function TabsWork({ index }: { index: number }) {
    const [dataSource, setDataSource] = useState([]);
    const [dataSourceTableYoutube, setDataSourceTableYoutube] = useState([]);
    const columns = [
        {
            title: "ID",
            dataIndex: "news_id",
            key: "1",
            width: 40,
        },
        {
            title: "Link",
            dataIndex: "news_link",
            key: "2",
            width: 180,
            render: (data) => {
                return (
                    <Link href={data} target="_blank">
                        {data}
                    </Link>
                );
            },
        },
        {
            title: "Actions",
            dataIndex: "news_id",
            key: "3",
            width: 40,
            render: (data) => {
                dispatch(getListId(data));
                return (
                    <div>
                        <Button onClick={exportVideo}>Xuat Video</Button>
                    </div>
                );
            },
        },
    ];
    const columnTableYoutube = [
        {
            title: "ID",
            dataIndex: "id_blog",
            key: "1",
            width: 40,
        },
        {
            title: "Link",
            dataIndex: "link_server",
            key: "2",
            width: 120,
            render: (data) => {
                return (
                    <Link href={data} target="_blank">
                        {data}
                    </Link>
                );
            },
        },
        {
            title: "Tinh Trang",
            dataIndex: "status",
            key: "3",
            width: 40,
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "4",
            width: 40,
            render: (data) => (
                <Button
                    onClick={() => {
                        let windowWidth = 964;
                        let windowHeight = 560;

                        let windowLeft =
                            (window.screen.width - windowWidth) / 2;
                        let windowTop =
                            (window.screen.height - windowHeight) / 2;
                        window.open(
                            `${data}`,
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
                    Xem thử
                </Button>
            ),
        },
    ];
    console.log(index);
    const exportVideo = () => {
        let windowWidth = 964;
        let windowHeight = 566;

        let windowLeft = (window.screen.width - windowWidth) / 2;
        let windowTop = (window.screen.height - windowHeight) / 2;
        if (index === 1) {
            dispatch(setType(1));

            window.open(
                "/admin/quan-ly-video/render-video-work247",
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
        } else if (index === 3) {
            dispatch(setType(3));

            window.open(
                "/admin/quan-ly-video/render-video-timviec",
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
        }
    };
    useEffect(() => {
        const Work247 = async () => {
            const fetcher = async () => {
                return await instance.post(
                    "/api/qlc/videoai/getListBlogWork247",
                    {
                        type: 1,
                        page: 1,
                    }
                );
            };
            try {
                const result = await fetcher();
                let news = result.data.data.news;
                const ids = news.map((id) => id.news_id);
                const data = news.map((id) => ({
                    ...id,
                    key: id.news_id,
                }));
                setDataSource(data);
                dispatch(getListId(ids));
                if (news[0]?.time_new.length > 0) {
                    let time = JSON.parse(
                        result.data.data.news[0]?.time_new[0]?.news_time_ai
                    );
                    let total = time[time.length - 1];
                    dispatch(getTotalTime((total[1] + 12 + 8) * 1000));
                } else dispatch(getTotalTime(1000 * 1000));
            } catch (err) {
                console.error(err);
            }
        };
        const TimViec = async () => {
            const fetcher = async () => {
                return await instance.post(
                    "http://localhost:8000/api/qlc/videoai/getListBlogTimViec",
                    {
                        type: 1,
                        page: 1,
                        pageSize: 25,
                    }
                );
            };
            try {
                const result = await fetcher();

                let news = result.data.data.data;
                const ids = news.map((id) => id.news_id);
                const data = news.map((id) => ({
                    ...id,
                    key: id.news_id,
                }));
                setDataSource(data);
                dispatch(getListId(ids));
                if (news[0]?.time_new.length > 0) {
                    let time = JSON.parse(
                        result.data.data.news[0]?.time_new[0]?.news_time_ai
                    );
                    let total = time[time.length - 1];
                    dispatch(getTotalTime((total[1] + 12 + 8) * 1000));
                } else dispatch(getTotalTime(1000 * 1000));
            } catch (err) {
                console.error(err);
            }
        };
        if (index === 1) {
            Work247();
        } else if (index === 3) {
            TimViec();
        }
    }, [index]);
    useEffect(() => {
        const unFollow = async () => {
            const fetcher = async () => {
                return await instance.post("/api/qlc/videoai/listAllFilter");
            };
            try {
                const result = await fetcher();

                let news = result?.data?.data?.data;
                const data = news?.map((id) => ({
                    ...id,
                    key: id.news_id,
                }));
                setDataSourceTableYoutube(data);
            } catch (err) {
                console.error(err);
            }
        };
        unFollow();
    }, []);
    return (
        <div>
            <div>
                <Button onClick={exportVideo}>Xuat ALL Video</Button>
            </div>
            <div className="my-16 flex gap-16">
                <div className="w-50">
                    <div className="text-align-center">
                        <Typography.Text>Danh sach blog</Typography.Text>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        bordered={false}
                    />
                </div>
                <div className="w-50">
                    <div className="text-align-center">
                        <Typography.Text>
                            Danh sach video youtube
                        </Typography.Text>
                    </div>
                    {/* <Table
                        columns={columnTableYoutube}
                        dataSource={dataSourceTableYoutube}
                        bordered={false}
                    /> */}
                </div>
            </div>
        </div>
    );
}
