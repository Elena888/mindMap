export const data = {
   nodes: [
      {
         id: "1",
         label: "Unit 1",
         description: "Russian Federation",
         color: "#9254de",
         x: 589.0765596307003,
         y: 278.05965828558897,
      },
      {
         id: "2",
         label: "Unit 2",
         description: "United Kingdom",
         color: "#4caf50",
         x: 463.3083702964221,
         y: 510.563697665016,
      },
      {
         id: "3",
         label: "Unit 3",
         description: "Ukraine",
         color: "#ea3a02",
         x: 735.2977416754745,
         y: 508.58846593930787,
      },
      {
         id: "4",
         label: "Director",
         description: "Anna",
         color: "#e06ca2",
         x: 282.7518041694314,
         y: 311.68254056614336,
      },
      {
         id: "5",
         label: "Director",
         description: "John",
         color: "#e06ca2",
         x: 291.72352164895244,
         y: 189.18902186708766,
      },
      {
         id: "6",
         label: "Unit 6",
         description: "Russian Federation",
         color: "#9254de",
         x: 143.28546748314125,
         y: 71.46040098228889,
      },
   ],
   edges: [
      {
         source: "1",
         target: "2",
         style: {
            stroke: "#2196f3",
            lineWidth: 2,
         },
      },
      {
         source: "1",
         target: "3",
         style: {
            stroke: "#2196f3",
            lineWidth: 2,
         },
      },
      {
         source: "2",
         target: "3",
         style: {
            stroke: "#2196f3",
            lineWidth: 2,
         },
      },
      {
         source: "1",
         target: "4",
         style: {
            stroke: "#e06ca2",
            lineWidth: 2,
         },
      },
      {
         source: "1",
         target: "5",
         style: {
            stroke: "#e06ca2",
            lineWidth: 2,
         },
      },
   ],
}
