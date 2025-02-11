"use client";
import { faker } from "@faker-js/faker";
import React from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

const generateRandomData = (numPoints) => {
  return Array.from({ length: numPoints }, () =>
    faker.datatype.number({ min: 0, max: 100 })
  );
};
export default function WeeklySalesCharts() {
  ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales ",
        data: generateRandomData(7),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
      //   {
      //     label: "Dataset 2",
      //     data: generateRandomData(7),
      //     fill: false,
      //     borderColor: "rgba(153, 102, 255, 1)",
      //     tension: 0.1,
      //   },
    ],
  };

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Sales ",
            data: generateRandomData(7),
            fill: false,
            borderColor: "rgba(255, 0, 221, 0.7)",
            tension: 0.1,
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Orders ",
            data: generateRandomData(7),
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
          },
        ],
      },
    },
  ];
  const [chartToDisplay, setChatToDisplay] = useState("sales");
  return (
    <div className="dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">
        Weekly Sales
      </h2>
      <div className="p-4">
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700 ">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChatToDisplay(tab.type)}
                    className={
                      chartToDisplay == tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        : " inline-block p-4 border-b-2 text-slate-800 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-100"
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <Line data={tab.data} options={options} key={i} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
