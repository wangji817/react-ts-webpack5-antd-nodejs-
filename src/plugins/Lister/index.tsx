import React from 'react';
import './index.scss';
import axios from 'axios';
const { useEffect, useState } = React;
import { LikeOutlined, UserOutlined, HeartOutlined, EyeOutlined, MessageOutlined } from '@ant-design/icons';
import { Avatar, List, Button, Statistic, } from 'antd';
import { defaultPostDomain, defaultAuthorDomain } from '@util/common';
import { DataObj } from './interface';
import Link from '@plugins/Link';


//标题
const chapterName = (item: DataObj) => (
    <Link url={defaultPostDomain + (item?.slug || '')} clasName='chapter-name'>{item.title}</Link>
)

//描述
const chapterDesc = (item: DataObj) => (
    <div className='chapter-description'>
        <div className='chapter-desc'>{item.desc}</div>
        <div className='chapter-flex'>
            <Statistic value={(item?.amount || 0) + "k"} className='hot' prefix={<LikeOutlined className='icon' />} />
            <Link url={defaultAuthorDomain + (item?.user?.slug || "")}><Statistic value={(item?.user?.nickname || "匿名")} className='normal' prefix={<UserOutlined />} /></Link>
            <Statistic value={(item?.comments_count || "0")} className='normal' prefix={<MessageOutlined />} />
            <Statistic value={(item?.likes_count || "0")} className='normal' prefix={<HeartOutlined />} />
            <Statistic value={(item?.views_count || "0")} className='normal' prefix={<EyeOutlined />} />
        </div>
    </div>
)



const Lister: React.FC = () => {
    const [datas, setDatas] = useState([]);
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const fetchList = (pageNo) => {
        setLoading(true);
        axios.get(`/getList?pageNo=${pageNo}&pageSize=${pageSize}`)
            .then(response => {
                setPageNo(pageNo);
                setInitLoading(false);
                setLoading(false);
                const new_datas = datas.concat(response.data);
                setDatas(new_datas);
            }).catch(error => { console.error('Error fetching data: ', error); setLoading(false); });
    }
    const nextList = () => {
        fetchList(pageNo + 1);
    }
    const loadMore = !initLoading && !loading ? (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={nextList}>loading more</Button>
        </div>
    ) : null;

    useEffect(() => {
        fetchList(pageNo);
    }, [])
    return (
        <div className='Lister'>
            <List
                itemLayout="horizontal"
                dataSource={datas}
                loading={initLoading}
                loadMore={loadMore}
                renderItem={(item: DataObj[], index) => (
                    <List
                        itemLayout="horizontal"
                        dataSource={item}
                        renderItem={(_item: DataObj, _index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${_index}`} />}
                                    title={chapterName(_item)}
                                    description={chapterDesc(_item)}
                                />
                            </List.Item>
                        )}
                    />
                )}
            />
        </div>
    )
}

export default Lister;