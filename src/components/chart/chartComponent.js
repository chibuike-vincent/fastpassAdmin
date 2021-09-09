import React from 'react';
import {Line} from 'react-chartjs-2';

const VisitorState = {
  labels: ['January', 'February', 'March',
           'April', 'May', "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: 'Visitors inflow',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56, 44,12,57,23,96,23,78]
    }
  ]
}

const TenantState = {
  labels: ['January', 'February', 'March',
           'April', 'May', "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: 'Tenants inflow',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56, 44,12,57,23,96,23,78]
    }
  ]
}

function Chart(){

    return (
      <div style={{width: "100%", marginTop: 20 }}> 
        <div style={{width: "80%",  marginTop: 20, backgroundColor:"white", marginLeft:"10%" }}>
        <Line
          data={VisitorState}
          options={{
            title:{
              display:true,
              text:'Average visitors per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>

      </div>
    );
  }

export default Chart