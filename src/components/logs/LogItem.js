import React from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteLog, setCurrent } from "../../actions/logActions";

const LogItem = ({ logs, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(logs.id);
    M.toast({ html: "Log Deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          onClick={() => setCurrent(logs)}
          className={`modal-trigger ${
            logs.attension ? "red-text" : "blue-text"
          }`}
        >
          {logs.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{logs.id}</span> last updated by{" "}
          <span className="black-text">{logs.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{logs.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
