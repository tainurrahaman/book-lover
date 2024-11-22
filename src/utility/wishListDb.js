const adddWishList = () => {
  const storedWishListSTr = localStorage.getItem("wish-list");
  if (storedWishListSTr) {
    const storedWishList = JSON.parse(storedWishListSTr);
    return storedWishList;
  } else {
    return [];
  }
};

const addBookToWishList = (id) => {
  const storeWishList = adddWishList();
  if (storeWishList.includes(id)) {
    console.log("already exists", id);
  } else {
    storeWishList.push(id);
    const wishList = JSON.stringify(storeWishList);
    localStorage.setItem("wish-list", wishList);
  }
};

export { addBookToWishList };
