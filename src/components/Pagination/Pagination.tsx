import React, { useEffect, useState } from "react";
import cn from "classnames";
import "./pagination.scss";

interface IPagination {
  active: number;
  pages: number;
  setActive: (arg: number) => void;
}

interface ILink {
  i: number;
  liClass: string;
  spanClass: string;
}

const Pagination = ({ active, pages, setActive }: IPagination): JSX.Element => {
  const [links, setLinks] = useState<ILink[]>([]);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(pages);

  const SIDE = 5;

  useEffect(() => {
    setStart(active > SIDE ? active - SIDE : 1);
    setEnd(active + SIDE > pages ? pages : active + SIDE);
  }, [pages, active]);

  useEffect(() => {
    const tempLinks: ILink[] = [];
    for (let i = start; i <= end; i += 1) {
      // 1-pages
      tempLinks[i] = { i, liClass: "page-item", spanClass: "page-link" };
    }
    setLinks(tempLinks);
  }, [start, end]);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={cn("page-item", { disabled: active === 1 })}>
          <button
            className="page-link"
            type="button"
            onClick={() => {
              if (active !== 1) setActive(active - 1);
            }}
          >
            Previous
          </button>
        </li>
        {start > 1 && (
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              onClick={() => setActive(1)}
            >
              1
            </button>
          </li>
        )}
        {start > 2 && (
          <li className={cn("page-item", "disabled")}>
            <button className="page-link" type="button" disabled>
              ...
            </button>
          </li>
        )}
        {links.map((link, index) => (
          <li
            className={cn(link.liClass, { active: active === index })}
            key={link.i}
          >
            <button
              className={link.spanClass}
              type="button"
              onClick={() => setActive(index)}
            >
              {index}
            </button>
          </li>
        ))}
        {end < pages - 1 && (
          <li className={cn("page-item", "disabled")}>
            <button className="page-link" type="button" disabled>
              ...
            </button>
          </li>
        )}
        {end < pages && (
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              onClick={() => setActive(pages)}
            >
              {pages}
            </button>
          </li>
        )}
        <li className={cn("page-item", { disabled: active === pages })}>
          <button
            className="page-link"
            type="button"
            onClick={() => {
              if (active !== pages) setActive(active + 1);
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
