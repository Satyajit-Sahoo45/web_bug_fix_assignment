import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ChatWindow from "./../Chat Window/ChatWindow";
import { startChatServer } from "../../services/chatService";
import SearchBar from "../SearchBar/SearchBar";
import CustomPagination from "../Pagination/Pagination";
import { getUsers } from "../../services/userService";
import paginate from "../../Utilities/paginate";
import "./user.css";

export default function Users() {
  const perPageCount = 3;
  const [topics, setTopics] = useState(null);
  const [users, setUserData] = useState([]);
  const [filteredUsers, setfilteredUsers] = useState([]);
  const [usersToRender, setUsersToRender] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [avtiveUser, setUserActive] = useState(null);
  const pages = Math.ceil(filteredUsers.length / perPageCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUsers();

        setUserData(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const orderData = () => {
      const filteredItems = users.filter((u) => {
        return u.username
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase().trim());
      });

      setfilteredUsers(filteredItems);
      const paginatedUsers = paginate(filteredItems, perPageCount, activePage);
      setUsersToRender(paginatedUsers);
    };

    orderData();
  }, [users, activePage, searchQuery]);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
    setActivePage(1);
  }

  function handlePageChange(_, curpage) {
    setActivePage(curpage);
  }

  const handleChatButtonClick = async (user) => {
    try {
      const response = await startChatServer(user);
      setSelectedUser(user);
      if (response.status === 200) {
        setUserActive(response.data.isActive);
        setTopics(response.data);
        setIsChatOpen(true);
      } else {
        console.error("Permission denied");
      }
    } catch (error) {
      console.error("Error checking permission:", error);
    }
  };

  const handleCloseChat = async () => {
    setIsChatOpen(false);
  };

  function handleClearSearch() {
    setSearchQuery("");
  }

  return (
    <>
      <SearchBar
        value={searchQuery}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />
      <div className="main-container">
        <TableContainer
          component={Paper}
          className={`tableContainer  ${isChatOpen ? "user-blur-container" : ""
            }`}
          sx={{ width: "70%" }}
        >
          <Table aria-label="simple table" className="table">
            <TableHead>
              <TableRow>
                <TableCell className="tableHeadCell" sx={{ width: "30%" }}>
                  #
                </TableCell>
                <TableCell className="tableHeadCell" sx={{ width: "30%" }}>
                  Username
                </TableCell>
                <TableCell
                  align="right"
                  className="tableHeadCell"
                  sx={{ width: "30%" }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersToRender.map((user, index) => (
                <TableRow
                  key={user._id}
                  className="tableRow"
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="tableBodyCell"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell className="tableBodyCell">
                    <span
                      className={user.isActive ? "online" : "offline"}
                    ></span>
                    {user.username}
                  </TableCell>
                  <TableCell align="right" className="tableBodyCell">
                    <Button
                      disabled={isChatOpen}
                      variant="contained"
                      className="button"
                      onClick={() => handleChatButtonClick(user)}
                    >
                      Chat
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {isChatOpen && (
          <ChatWindow
            user={selectedUser}
            onChatClose={handleCloseChat}
            className="chat-window"
            topics={topics}
          />
        )}
      </div>
      <CustomPagination
        pages={pages}
        onPageChange={handlePageChange}
        activePage={activePage}
      />
    </>
  );
}
