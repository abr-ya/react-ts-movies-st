import React, { useState } from "react";
import Select from "react-select";
import Pagination from "../Pagination/Pagination";
import BsSearch from "../BsSearch/BsSearch";
import styles from "./RequestSetup.module.scss";

interface IRequestSetup {
  query: string;
  page: number;
  pages: number;
  setPage: (arg: number) => void;
  setSorting: (arg: string) => void;
  setQuery: (arg: string) => void;
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
  const [innerSorting, setInnerSorting] = useState<ISortingOption | null>(null);

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
    setInnerSorting(null);
  };

  return (
    <>
      <div className={styles.selectWrapper}>
        <BsSearch setter={searchHandler} value={query} />
        <Select
          className={styles.select}
          placeholder="... или подборка"
          value={innerSorting}
          onChange={sortingHandler}
          options={sortingOptions}
          aria-label="discoverSelect"
        />
      </div>
      <Pagination active={page} pages={pages} setActive={pageHandler} />
    </>
  );
};

export default RequestSetup;
