import React, { useEffect } from "react";
import LogItem from "./LogItem";
import { connect } from "react-redux"; //connects redux to our component
import PreLoader from "../layout/PreLoader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  // const [logs, setLogs] = useState([]);
  useEffect(() => {
    //eslint-disable-next-line
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show..</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} logs={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

//mapStateToProps: anything from our app level state, we want to bring in our component
const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
