import React, {useEffect, useState} from 'react';
import Slider from '../slider';
// import {TaskLine} from '../task-line';
import TaskTableLine from '../task-table-line'
import ContentTable from '../content-table';

import send from '../../server/index'
import './body-sheulder.scss';

const DayHeader = ({name, isDayNow, onClick}) => {
    return (
        <div className="day-header">
            <div className="name" onClick={onClick}><p>{name}</p></div>
            {isDayNow? <div className="now">сегодня</div> : ""}
        </div>
    )
};

const TaskContent = ({data, isBodyVisible, isDayNow}) => {
    return (
        <div className="day-body">
            <ContentTable 
                header={["", "Задача", "Группа", "Время"]}
                body={<TaskTableLine data={data}/>}
                data={data}
            />
        </div>
    );
};

const WeekDayContent = ({data, isDayNow, name}) =>{
    data = data || [];
    
    return (
        <div className="day-content">
            <Slider 
                header={ <DayHeader name={name} isDayNow={isDayNow} />}
                body={<TaskContent data={data} isDayNow={isDayNow}/>}
                isBodyVisible={data.isVisible}
            >
            </Slider>
        </div>
    );
};

const BodySheulder = () => {
    const dayName = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const [data, setData] = useState([]);
    useEffect(() => {
        send("http://testing-domain.na4u.ru/list_mysql").then((res) => setData(res));
    }, [])

    return (
        <div>
            {dayName.map((elem, ind) => {
                const dataDay = data.filter(elem => elem.day == ind);
                for(let i = 1; i < 100; i++) {
                    dataDay.push({"date_from": "2021-10-20T12:07:18.000Z",
                    "date_to": "2021-10-28T12:07:19.000Z",
                    "day": 1,
                    "group_name": "C#",
                    "id": 2 + i,
                    "task": "C# Metanit 5-6 pages"})
                }
                dataDay.isVisible = false;

                if(ind == new Date().getDay())//ajax
                    dataDay.isVisible = true;

                return  <WeekDayContent key={ind} name={elem} data={dataDay}/>
            })}
        </div>
    )
}

export default BodySheulder;