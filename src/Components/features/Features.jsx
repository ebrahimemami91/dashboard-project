import React from 'react';
import './Features.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Features() {
  return(
      <div className="features">
            <div className="featureItem">
                  <span className="featureTitle">Revanue</span>
                  <div className="featureContainer">
                        <span className="featureMoney">$2,415</span>
                        <span className="featureRate">
                              -11.4 <ArrowDownwardIcon className="featureIcon negative"/>
                        </span>
                  </div>
                  <span className="featureSub">Compared to last month</span>

            </div>
            <div className="featureItem">
                  <span className="featureTitle">Sale</span>
                  <div className="featureContainer">
                        <span className="featureMoney">$4,415</span>
                        <span className="featureRate">
                              -1.4 <ArrowDownwardIcon className="featureIcon negative"/>
                        </span>
                  </div>
                  <span className="featureSub">Compared to last month</span>

            </div>
            <div className="featureItem">
                  <span className="featureTitle">Cost</span>
                  <div className="featureContainer">
                        <span className="featureMoney">$2,225</span>
                        <span className="featureRate">
                              +2.4 <ArrowUpwardIcon className="featureIcon"/>
                        </span>
                  </div>
                  <span className="featureSub">Compared to last month</span>

            </div>
      </div>
  )
  
}