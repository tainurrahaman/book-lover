import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadStoreList } from "../../utility/addForReadDb";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
  const allbooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storeReadList = getReadStoreList();
    const storeReadListStr = storeReadList.map((id) => parseInt(id));
    const readBookList = allbooks.filter((book) =>
      storeReadListStr.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "pages") {
      const sortReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortReadList);
    }

    if (sortType === "ratings") {
      const sortReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortReadList);
    }
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Listed Books</Tab>
        </TabList>

        <div className="flex justify-center">
          <div className="dropdown dropdown-bottom ">
            <div tabIndex={0} role="button" className="btn m-1">
              {sort ? `Sort by ${sort}` : "Sort by"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={() => handleSort("ratings")}>
                <a>Rating</a>
              </li>
              <li onClick={() => handleSort("pages")}>
                <a>Pages</a>
              </li>
            </ul>
          </div>
        </div>

        <TabPanel>
          {readList.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
