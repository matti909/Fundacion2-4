// Story.tsx
import React from "react";
import "./Story.scss";
import { Map, Marker } from "pigeon-maps";

const Story = () => {
  return (
    <section className="story">
      <h2>
        DEPORTIVO 2 DE ABRIL
      </h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        dignissimos esse dolorem corrupti mollitia ex omnis vitae, ipsam soluta
        eaque praesentium. Maiores molestias quisquam soluta, iusto fuga
        repellendus quam dolorum!
      </div>
      <div>
        <Map
          height={300}
          defaultCenter={[-27.468342086764366, -58.93438204042026]}
          defaultZoom={11}
        >
          <Marker
            width={50}
            anchor={[-27.468342086764366, -58.93438204042026]}
          />
        </Map>
      </div>
    </section>
  );
};

export default Story;
