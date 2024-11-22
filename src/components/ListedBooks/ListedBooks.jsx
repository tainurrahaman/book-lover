import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadStoreList } from "../../utility/addForReadDb";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
  const allbooks = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storeReadList = getReadStoreList();
    const storeReadListStr = storeReadList.map((id) => parseInt(id));
    const readBookList = allbooks.filter((book) =>
      storeReadListStr.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Listed Books</Tab>
        </TabList>

        <TabPanel>
          {readList.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
