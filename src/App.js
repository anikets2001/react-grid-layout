import React from "react";
import "./App.css";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

const App = () => {
  const layout = [
    { i: "1", x: 0, y: 0, w: 4, h: 8 },
    { i: "2", x: 2, y: 0, w: 4, h: 8 },
    { i: "3", x: 4, y: 0, w: 2, h: 8 },
    { i: "4", x: 6, y: 0, w: 4, h: 4 },
    { i: "5", x: 8, y: 0, w: 4, h: 4 },
  ];

  return (
    <div>
      <ReactGridLayout
        layout={layout}
        cols={10}
        rowHeight={30}
        width={1200}
      >
        <div key="1" className="box">
          1
        </div>
        <div key="2" className="box">
          2
        </div>
        <div key="3" className="box">
          3
        </div>
        <div key="4" className="box">
          4
        </div>
        <div key="5" className="box">
          5
        </div>
      </ReactGridLayout>
    </div>
  );
};

export default App;
