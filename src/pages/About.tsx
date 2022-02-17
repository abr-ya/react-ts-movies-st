import React from "react";
import Table from "../components/Table/BrandMarkupTable";

const About = (): JSX.Element => {
  const data = [
    {
      brand_id: "37fafd46-8f26-11e3-80b7-6805ca183101",
      brand_name: "KS-IS",
      min: 3,
      desired: 4,
    },
    {
      brand_id: "17d50b86-a963-11e5-93f2-001b21d8d330",
      brand_name: "Promate",
      min: 1,
      desired: 4,
    },
  ];

  return (
    <div className="container">
      <h1>About page</h1>
      <p>Первый абзац страницы About.</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        a rem id quae officiis distinctio ipsa, quidem nisi amet eos?
      </p>
      <div className="row">
        <div className="col-md-6">
          <Table
            data={data}
            editHandler={() => console.log("first")}
            deleteHandler={() => console.log("first")}
            markupIsUpdating={false}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
