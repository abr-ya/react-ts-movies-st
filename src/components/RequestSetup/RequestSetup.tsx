import React, { useState } from "react";
import Select from "react-select";
import Pagination from "../Pagination/Pagination";
import BsSearch from "../BsSearch/BsSearch";
import styles from "./RequestSetup.module.scss";

interface IRequestSetup {
  query: string;
  page: number;
  pages: number;
  setPage: any;
  setSorting: any;
  setQuery: any;
}
interface ISortingOption {
  value: string;
  label: string;
}

const RequestSetup = ({
  query,
  page,
  pages,
  setPage,
  setSorting,
  setQuery,
}: IRequestSetup): JSX.Element => {
  const [innerSorting, setInnerSorting] = useState<ISortingOption>({
    value: "",
    label: "",
  });

  const sortingOptions: ISortingOption[] = [
    { value: "popularity.desc", label: "sort by Popularity" },
    { value: "vote_average.desc", label: "sort by Rating" },
  ];

  const sortingHandler = (selectedOption: ISortingOption) => {
    setQuery("");
    setPage(1);
    setInnerSorting(selectedOption);
    setSorting(selectedOption.value);
  };

  const pageHandler = (newPage: number) => {
    setPage(newPage);
  };

  const searchHandler = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setInnerSorting({ value: "", label: "" });
  };

  return (
    <>
      <div className={styles.selectWrapper}>
        <BsSearch setter={searchHandler} value={query} />
        <Select
          className={styles.select}
          placeholder="... или подборка"
          value={innerSorting}
          onChange={(option) =>
            sortingHandler(option || { value: "", label: "" })
          }
          options={sortingOptions}
        />
      </div>
      <Pagination active={page} pages={pages} setActive={pageHandler} />
    </>
  );
};

export default RequestSetup;
