import { Component, Fragment } from "react";
import ErrorBoundary from "./ErrorBoundary";
import classes from "./UserFinder.module.css";
import Users from "./Users";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [DUMMY_USERS],
      searchTerm: "",
    };
  }
  componentDidMount = () => {
    //Http request
    this.setState({ filteredUsers: DUMMY_USERS });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.searchTerm !== prevState.searchTerm)
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
  };
  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}
//Functional based component
/* const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input
        className={classes.finder}
        type="search"
        onChange={searchChangeHandler}
      />
      <Users users={filteredUsers} />
    </Fragment>
  );
}; */

export default UserFinder;
