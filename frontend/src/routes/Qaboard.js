import "../css/qacss.css";
import { Table } from "antd";
import { Link } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import "antd/dist/antd.css";
import Logo from "./components/Logo.js";
import React, { useState } from "react";
import axios from "axios";

const Qablock = () => {
    return (
        <section className="block">
            <button className="qanda" >Q & A 게시판</button><Cwrite />
        </section>
    );
};


const Cwrite = () => {
    return (
        <section>
            <button className="newstudy" style={{ marginLeft: "0px" }}>
                <Link to="/setboard_qa">글 작성하기</Link></button>
        </section>
    );
};

const Qaboard = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState([]);
    React.useEffect(() => {
        axios
            .get("http://localhost:8080/studyPosts/category?category=%EC%A7%88%EB%AC%B8%20%EA%B2%8C%EC%8B%9C%EA%B8%80")
            .then((response) => {
                setId(response.data);
            });

        for (let i = 0; i < id.length; i++) {
            axios.get(`http://localhost:8080/studyPost/info?id=${id[i]}`)
                .then((response) => {
                    if (data.some((element) => element.id === id[i]) === false) {
                        const temp = data.concat(response.data);
                        setData(temp);
                    }
                });
        }
    }, [id]);
    data.sort((a, b) => {
        return a.id - b.id;
    });

    const columns = [
        {
            title: <div className="studyname">스터디 명</div>,
            dataIndex: "title",
            key: "title",
            render: (text, record, index) => (
                <Link
                    to={`/detailqa/${id[index]}`}
                    state={{ boardId: id[index] }}
                >
                    {text}
                </Link>
            ),
        },

        {
            title: <div className="user">작성자</div>,
            dataIndex: "name",
            key: <div>"address"</div>
        }
    ];

    return (
        <>
            <GlobalStyle />
            <Logo />
            <Qablock />
            <section className="table">
                <Table columns={columns} dataSource={data} />;
            </section>
        </>
    )
};

export default Qaboard;

