import React from "react";

import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import styles from "./brandMarkupModalStyles.module.scss";

interface IData {
  brand_id: string;
  brand_name: string;
  min: number;
  desired: number;
}

interface IBrandMarkupTable {
  data: IData[];
  editHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
  markupIsUpdating: boolean;
}

const BrandMarkupTable = ({
  data: brandsData,
  editHandler,
  deleteHandler,
  markupIsUpdating,
}: IBrandMarkupTable): JSX.Element => (
  <table className={styles.brandsTable}>
    <tbody>
      {brandsData.length && (
        <tr key="head">
          <td className={styles.col0}>&nbsp;</td>
          <td className={styles.col1}>Бренд</td>
          <td className={styles.col1}>Не ниже</td>
          <td className={styles.col1}>Наценка</td>
          <td className={styles.col0}>&nbsp;</td>
        </tr>
      )}
      {brandsData.map((item: IData) => (
        <tr key={item.brand_id}>
          <td className={styles.col0}>
            <IconButton
              onClick={() => deleteHandler(item.brand_id)}
              disabled={markupIsUpdating}
              aria-label={`delete_${item.brand_id}`}
            >
              <DeleteForeverIcon />
            </IconButton>
          </td>
          <td className={styles.col1}>{item.brand_name}</td>
          <td className={styles.col1}>{item.min}</td>
          <td className={styles.col1}>{item.desired}</td>
          <td className={styles.col0}>
            <IconButton
              onClick={() => editHandler(item.brand_id)}
              disabled={markupIsUpdating}
              aria-label={`edit_${item.brand_id}`}
            >
              <EditIcon />
            </IconButton>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BrandMarkupTable;
