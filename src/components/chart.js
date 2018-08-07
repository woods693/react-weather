import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(_.sum(data)/data.length);

}

const Chart = (props) => {

  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        avg: {average(props.data)}
      </div>
    </div>
  );

};

export default Chart;
