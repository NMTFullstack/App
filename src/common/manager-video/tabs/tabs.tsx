import { Tabs } from "antd";
import TabsBlog from "./blog";
import TabsUV from "./uv";
import TabsTD from "./td";

export default function TabsContent({ index }: { index: number }) {
    const items = [
        {
            label: "Blog",
            children: <TabsBlog index={index} />,
            key: "1",
        },
        {
            label: "Tuyen dung",
            children: <TabsTD index={index} />,

            key: "2",
        },
        {
            label: "Ung vien",
            children: <TabsUV index={index} />,

            key: "3",
        },
    ];
    return (
        <div className="h-100">
            <Tabs items={items} tabPosition="left" centered />
        </div>
    );
}
