import React from "react";

function BoxDate (props) {
    const dateFormated = () => {
        let date = new Date(props.date)
        let month = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date(date));
        let year =  date.getFullYear();
        let day = date.getDay()
        return `${day} de ${month} de ${year}`;
    }

    // const renderDate
   return (
    <h4 class="com-date">
        { dateFormated() }
    </h4>
   )
};

export default BoxDate;