
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const Donut = () => {
  const navigate = useNavigate();

  const handleSegmentClick = (type) => {
    navigate(`/detail/${type}`);
  };

  React.useEffect(() => {
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0;

    chart.data = [
      {
        type: "Food&Shopping",
        value: 350,
        color: am4core.color("#C0C000")
      },
      {
        type: "Entertainment",
        value: 300,
        color: am4core.color("#4169E1")
      },
      {
        type: "Travel",
        value: 200,
        color: am4core.color("#E67015")
      },
      {
        type: "Savings",
        value: 165,
        color: am4core.color("#7A5AB0")

      },
      {
        type: "Other Allowances",
        value: 139,
        color: am4core.color("#2E8B57")
      }
    ];

    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "type";
    series.slices.template.propertyFields.fill = "color";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 10;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    series.slices.template.events.on("hit", function (event) {
      handleSegmentClick(event.target.dataItem.type);
    });

    chart.legend = new am4charts.Legend();

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [handleSegmentClick]);

  return (
    <div id="chartdiv" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default Donut;


