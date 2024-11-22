import { toast } from "react-toastify";

const getReadStoreList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreReadList = (id) => {
  const storeList = getReadStoreList();
  if (storeList.includes(id)) {
    return;
  } else {
    storeList.push(id);
    const storeListStr = JSON.stringify(storeList);
    localStorage.setItem("read-list", storeListStr);
    toast("Books are added in Read List");
  }
};

export { addToStoreReadList, getReadStoreList };
