import { useEffect, useState } from "react";

import bgChart from "assets/img/bgChart.jpg";
import { ChartsApi } from "api";

//Import ReactFC
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
//Including the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
//Including the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import "./index.css";

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations

const Index = () => {
  const [charts, setCharts] = useState<[]>([]);

  useEffect(() => {
    loadChart();
  }, []);

  const loadChart = () =>
    ChartsApi()
      .then((response) => response.json())
      .then(({ records }) => setCharts(records));

  const renderToolText = (by: string, value: number) =>
    `<div class="p-6 font-medium">
	<div class="text-lg">Rata-Rata Pemohon</div>
	<div class="text-lg">Per${by}</div>
	<div class="text-6xl text-blue-100 mt-2">${value}</div>
</div>
`;

  let chartYear: any = [];
  let chartMonth: any = [];

  let dataYear: any = [];

  charts.map((c: any) => {
    let parsed = JSON.parse(c.data);
    let id = { id: c.id };
    return chartYear.push({ ...id, ...parsed });
  });

  for (let cy in chartYear) {
    let year = JSON.stringify(chartYear[cy].year);
    let id = JSON.stringify(chartYear[cy].id);
    dataYear.push({
      label: year,
      value: chartYear[cy].value,
      link: "newchart-xml-" + id,
      toolText: `${renderToolText("tahun", chartYear[cy].value)}`,
    });

    let months = chartYear[cy].months;

    for (let m in months) {
      let { label } = months[m];
      let capitalize = label.split("")[0].toUpperCase();
      let fullLabel = capitalize.concat(label.substring(1));
      months[m].value = months[m]["score"];
      delete months[m].score;
      months[m].toolText = `${renderToolText("bulan", months[m].value)}`;
      months[m].label = fullLabel;
      chartMonth.push({
        id: id,
        linkedchart: {
          chart: {
            theme: "fusion",
            paletteColors: "9CE4F3",
            rotateValues: "0",
            toolTipBgColor: "#efefef",
          },
          data: months,
        },
      });
    }
  }

  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        theme: "fusion",
        paletteColors: "9CE4F3",
        rotateValues: "0",
        toolTipBgColor: "#efefef",
        toolbalButtonColor: "#000000",
      },
      data: dataYear,
      linkeddata: chartMonth,
    },
  };

  return (
    <div className="">
      <div className="flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20">
        <h3 className="text-lg lg:text-3xl w-36 lg:w-72">
          Jumlah Pemohon Informasi
        </h3>
        <h1 className="text-xl lg:text-6xl">Berkala</h1>
      </div>

      <div className="text-center text-blue-100 my-12 lg:my-16 mx-2 lg:mx-0">
        <h4 className="text-xl lg:text-2xl mb-3">
          Statistik Permohonan Informasi
        </h4>
        <h3 className="uppercase text-xl lg:text-3xl">
          PT Pelabuhan Indonesia III (Persero)
        </h3>
      </div>
      <div className="relative mx-auto z-25">
        <img
          src={bgChart}
          className="absolute opacity-5 -z-10 top-0 right-0"
          alt=""
        />
        <div className="mx-6 lg:mx-32 h-3/4">
          <ReactFC {...chartConfigs} />

          <p className="text-sm mt-16 mb-32 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            modi dolorum culpa laboriosam natus sequi praesentium ea velit
            recusandae doloribus expedita aliquam tenetur placeat at accusamus.
            Nulla itaque sequi, alias nostrum molestiae sapiente eius aut earum,
            quo maxime reiciendis illum quos sed excepturi, est dolorem ea eos
            accusantium eaque tenetur. A corporis eveniet commodi atque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
