import {transactions} from './../../datas'
import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {

  const Button = ({type}) => {
   return <button className={"WidgetLgButton " + type}>{type}</button>

  }

  return (
    <div className="WidgetLg">
      <h3 className="WidgetLgTitle">Latest TransActions</h3>
      <table className="WidgetLgTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amout</th>
          <th className="WidgetLgTh">Status</th>
        </tr>
        {transactions.map((transactions) =>(
          <tr key={transactions.id} className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src={transactions.img} className="widgetLgImg" />
            <span className="WidgetLgName">{transactions.customer}</span>
          </td>
          <td className="WidgetLgDate">{transactions.date}</td>

          <td className="WidgetLgAmount">${transactions.amount}</td>

          <td className="WidgetLgStatus">
            < Button type={transactions.status}/>
          </td>
        </tr>

        ))}

      </table>
    </div>
  )
}
