import React from "react";
import styles from "./Chart.module.scss";


function Chart(data) {
  const completedItems = data.items.filter((el) => el.completed);

  const completedItemsCount =  completedItems.reduce( (a, c) => {
    var day = c.day;
    if (!a.hasOwnProperty(day)) {
      a[day] = 0;
    }
    a[day]++;
    return a;
}, {});


    const weekdays = [
        'понедельник',
        'вторник',
        'среда',
        'четверг', 
        'пятница', 
        'суббота',
        'воскресенье'
    ]

    const countLength = (item) => {
        const count =  completedItemsCount[item] || 0;
        return count * 16;
    }

  return (
    <div className={styles.chart}>
      <div className={styles.header}>
        <p>Твои достижения</p>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.value}>
          <span>25</span>
          <span>20</span>
          <span>15</span>
          <span>10</span>
          <span>5</span>
          <span>0</span>
        </div>
        <div className={styles.chartWrapper}>
        {
           weekdays.map((item, i) => 
            {   
                return <div key={i} className={[styles.chartInfo, styles.chartValue].join(' ')} style={{height: countLength(item) + 'px', transition: 'height .2s ease-in'} }></div>;
            })
        }
        </div>
       
       
      </div>
      <div className={styles.days}>
        <div className={styles.daysItems}>
          <span>Пн</span>
          <span>Вт</span>
          <span>Ср</span>
          <span>Чт</span>
          <span>Пт</span>
          <span>Сб</span>
          <span>Вс</span>
        </div>
      </div>
    </div>
  );
}

export default Chart;
