import bgChart from "assets/img/bgChart.jpg";

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
const renderToolText = (value: number) =>
  `<div class="p-6 font-bold">
	<div class="text-lg">Data Pemohon</div>
	<div class="text-lg">Perbulan</div>
	<div class="text-6xl text-blue-100 mt-2">${value}</div>
</div>
`;

const chartConfigs = {
  type: "column2d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      theme: "fusion",
      rotateValues: "0",
      toolTipBgColor: "#efefef",
      toolbalButtonColor: "#000000",
    },
    data: [
      {
        label: "2017",
        value: "168",
        link: "newchart-xml-2017",
        toolText: `${renderToolText(168)}`,
      },
      {
        label: "2018",
        value: "400",
        link: "newchart-xml-2018",
        toolText: `${renderToolText(400)}`,
      },
      {
        label: "2019",
        value: "600",
        link: "newchart-xml-2019",
        toolText: `${renderToolText(600)}`,
      },
    ],
    linkeddata: [
      {
        id: "2017",
        linkedchart: {
          chart: {
            theme: "fusion",
            rotateValues: "0",
            toolTipBgColor: "#efefef",
          },
          data: [
            {
              label: "Januari",
              value: "45",
              toolText: `${renderToolText(45)}`,
            },
            {
              label: "Februari",
              value: "100",
              toolText: `${renderToolText(100)}`,
            },
            {
              label: "Maret",
              value: "23",
              toolText: `${renderToolText(23)}`,
            },
          ],
        },
      },
      {
        id: "2018",
        linkedchart: {
          chart: {
            theme: "fusion",
            rotateValues: "0",
            toolTipBgColor: "#efefef",
          },
          data: [
            {
              label: "Januari",
              value: "45",
              toolText: `${renderToolText(45)}`,
            },
            {
              label: "Februari",
              value: "100",
              toolText: `${renderToolText(100)}`,
            },
            {
              label: "Maret",
              value: "23",
              toolText: `${renderToolText(23)}`,
            },
          ],
        },
      },
      {
        id: "2019",
        linkedchart: {
          chart: {
            theme: "fusion",
            rotateValues: "0",
            toolTipBgColor: "#efefef",
          },
          data: [
            {
              label: "Januari",
              value: "45",
              toolText: `${renderToolText(45)}`,
            },
            {
              label: "Februari",
              value: "100",
              toolText: `${renderToolText(100)}`,
            },
            {
              label: "Maret",
              value: "23",
              toolText: `${renderToolText(23)}`,
            },
          ],
        },
      },
    ],
  },
};

const index = () => {
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

export default index;
