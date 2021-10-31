import React, { useEffect, useState } from 'react';
import BodySheulder from '../body-sheulder';
import HeaderSheulder from '../header-sheulder'
import './sheulder.scss';
import send from '../../server/index'

const Sheulder = () => {
    // async componentDidMount() {
    //     await send("http://testing-domain.na4u.ru/list_mysql").then((res) => this.setState({data: res}));
    // }
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     send("http://testing-domain.na4u.ru/list_mysql").then((res) => setData(res));
    // }, [])

    return (
        <div className="sheulder">
            <HeaderSheulder dateBegin="05.04" dateEnd="11.04" isCurrentWeek={true}/>
            <BodySheulder></BodySheulder>
        </div>
    );
};

export default Sheulder;