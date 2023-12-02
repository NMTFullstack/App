import instance from "@/components/hooks/axios.config";
import { dispatch } from "@/redux/storeQLC";
import { Button, Image, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {
    getListId,
    getTotalTime,
    setFrom,
    setType,
} from "../common/redux/reducer";

export default function TabsUV({ index }: { index: number }) {
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            title: "ID",
            dataIndex: "use_id",
            key: "1",
            width: 40,
        },
        {
            title: "Link",
            dataIndex: "user_name",
            key: "2",
            width: 180,
        },
        {
            title: "Avatar",
            dataIndex: "logo_user",
            key: "2",
            width: 180,
            render: (data) => {
                return <Image src={data} alt="avatar" />;
            },
        },
        {
            title: "Thong tin",
            dataIndex: "ttin_user",
            key: "2",
            width: 180,
        },
    ];
    const exportVideo = () => {
        var windowWidth = 964;
        var windowHeight = 560;

        var windowLeft = (window.screen.width - windowWidth) / 2;
        var windowTop = (window.screen.height - windowHeight) / 2;
        dispatch(setType(3));
        if (index === 1) {
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
        } else if (index === 2) {
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
                        type: 3,
                        page: 1,
                    }
                );
            };
            try {
                const result = await fetcher();
                let news = result.data.data.news;
                const ids = news.map((id) => id.use_id);
                const data = news.map((id) => ({
                    ...id,
                    key: id.use_id,
                }));
                setDataSource(data);
                dispatch(getListId(ids));
                console.log(data);
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
                    "/api/qlc/videoai/getListBlogTimViec",
                    {
                        type: 3,
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
        if (index === 1) {
            Work247();
        } else if (index === 2) {
            TimViec();
        }
    }, [index]);
    return (
        <div>
            <div className="text-align-center">
                <Typography.Text>Danh sach blog</Typography.Text>
            </div>
            <div>
                <Button onClick={exportVideo}>Xuat Video</Button>
            </div>
            <div className="my-16">
                <div className="w-50">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        bordered={false}
                    />
                </div>
            </div>
        </div>
    );
}
