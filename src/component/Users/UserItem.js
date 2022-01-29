import moment from "moment";
import React from "react";
import Button from "../Common/Button";

const UserItem = ({ item, i, onClickHandle }) => {
  return (
    <tr className="custom_data_table_row" key={i}>
      <td className="custom_data_table_item" style={{ textAlign: "center" }}>
        {item.first_name}
      </td>
      <td className="custom_data_table_item" style={{ textAlign: "center" }}>
        {item.last_name}
      </td>
      <td className="custom_data_table_item" style={{ textAlign: "center" }}>
        {item.phone_number}
      </td>
      <td className="custom_data_table_item" style={{ textAlign: "center" }}>
        {item.address}
      </td>
      <td className="custom_data_table_item" style={{ textAlign: "center" }}>
        {moment(item.created_at).format("MMMM Do YYYY, h:mm:ss a")}
      </td>
      <td className="custom_data_table_item" style={{ textAlign: "center" }}>
        <Button
          buttonClassName="custom_data_table_button"
          onClick={(e) => onClickHandle(item.id)}
          text="Details"
        />
      </td>
    </tr>
  );
};

export default UserItem;
