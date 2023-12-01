import React from 'react';
import Features from './../../Components/features/Features';
import Chart from '../../Components/Chart/Chart';
import WidgetSm from '../../Components/widgetSm/widgetSm';
import WidgetLg from '../../Components/widgetLg/widgetLg';

import { xAxisData } from '../../datas';

import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Features/>
      <Chart grid title="Month Sale" data={xAxisData} />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
