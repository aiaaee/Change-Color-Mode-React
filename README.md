# Change color mode in React

## localStorage property
The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. (localStorage data for a document loaded in a `private browsing` or `incognito` session is cleared when the last `private` tab is closed.)

Setting Items in LocalStorage

To set items in _LocalStorage_, you can use the `setItem()` method. This method is used to store objects in LocalStorage by providing a key and a value. The value can be of any data type, but it's crucial to stringify it with `JSON.stringify()` before storing it.

To set items in LocalStorage, you can use the setItem() method. This method is used to store objects in LocalStorage by providing a key and a value. The value can be of any data type, but it's crucial to stringify it with JSON.stringify() before storing it.
```
const [items, setItems] = useState([]);

useEffect(() => {
localStorage.setItem('items', JSON.stringify(items));
}, [items]);
```
When retrieving data, since it was stored as a JSON string, you need to parse it back into a JavaScript object using `JSON.parse()`


## Custom Hook for LocalStorage

For a more reusable solution, you can create a custom hook that abstracts the `LocalStorage` logic. This custom hook can then be used across multiple components. Here's a basic structure of a custom hook for `LocalStorage` :

```
function useLocalStorage(key, initialValue) {
const [storedValue, setStoredValue] = useState(() => {
try {
const item = window.localStorage.getItem(key);
return item ? JSON.parse(item) : initialValue;
} catch (error) {
console.log(error);
return initialValue;
}
});

const setValue = value => {
try {
setStoredValue(value);
window.localStorage.setItem(key, JSON.stringify(value));
} catch (error) {
console.log(error);
}
};

return [storedValue, setValue];
}
```
