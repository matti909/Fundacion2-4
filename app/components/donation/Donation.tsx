"use client";

import { useState } from "react";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import "./Donation.scss";

export const Donation = () => {
  initMercadoPago("", {
    locale: "es-AR",
  });
  const [preferenceId, setPreferenceId] = useState<string>("");

  const createPreference = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get("title") as string;
    const quantity = Number(formData.get("quantity"));
    const price = Number(formData.get("price"));

    try {
      const response = await axios.post(
        "",
        {
          title,
          quantity,
          price,
        }
      );
      const { id } = response.data;
      setPreferenceId(id);
      return id;
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      return null;
    }
  };

  const handlBuy = async (event: any) => {
    event.preventDefault();
    const result = await createPreference(event);
    console.log(result);
  };

  return (
    <div className="donation">
      <section className="donation__parraf">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolor
          accusamus error illum, repellendus veniam, qui officia voluptatem
          sequi hic deleniti aliquid, neque iste odit eos ea magnam earum
          provident.
        </p>
      </section>
      <section>
        <h2>Hace tu donacion y ayuda a mas de 100 niños a cumplir sus sueños</h2>
        <form id="myForm" onSubmit={handlBuy}>
          <input type="text" name="title" placeholder="Title" />
          <input type="number" name="quantity" placeholder="Quantity" />
          <input type="number" name="price" placeholder="Price" />

          {!preferenceId && <button type="submit">comprar</button>}
        </form>
        {preferenceId && (
          <Wallet initialization={{ preferenceId: preferenceId }} />
        )}
      </section>
    </div>
  );
};
