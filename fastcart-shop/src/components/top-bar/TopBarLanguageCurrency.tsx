// import { useState } from "react";
import languagesData from "../../assets/json/languages.json";
import Select from "../Shared/Select/Select";

type Language = {
  code?: string;
  name: string;
  imageUrl: string;
};
const handleLanguageChange = (language?: Language) => {
  fetch(`https://api.example.com/data/${language?.code}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      location.reload();
    })
    .catch((error) => console.error(error));
};
const TopBarLanguageCurrency = () => {
  return (
    <>
      <Select data={languagesData} onChange={handleLanguageChange} />
    </>
  );
};

export default TopBarLanguageCurrency;
