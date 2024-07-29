# Change color mode in React

in this project I decided to create a button to change a color mode of website . at first I write jsx and styles of my website then I used React hooks for deveoping button and change it in diffrent color . 

![Untitled](https://github.com/user-attachments/assets/56791d84-9f24-422a-a624-7f7367473f50)

after doing stylesheets of website , started to write `Usestate` hooks to import mode base on being _true_ and _false_ condition. on the top of that we need to import changes on input to take advantage of Usestate. 
The checked attribute in HTML is used to indicate whether a checkbox or radio button is selected by default when the page loads , so I changed checked base on my mode.
In the end, I was able to implement a dark mode correctly by changing the text on the screen as well as changing the background color .

![mode1](https://github.com/user-attachments/assets/cd5f38cc-4f71-43a8-bf80-4a08514b49cd)



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

## Solution For my Project

in my Project I dealt with changing website color mode and I thought about protecting the color mode of website base on User computer mode . so in that case I needed to use LocalStorage to cache some information about computer mode of user and I found colour mode of them base on methods of `Localstorage` : 
```
let changeMode = () => {
        let initialMode = localStorage.getItem('mode')
        if(initialMode == null){
            if(window.matchMedia('(prefer-color-scheme:dark)').matches){
                return true
            }
            else{
                return false
            }
        }
        else{
            return JSON.parse(localStorage.getItem('mode'))
        }
    }
```

for finishing off the project , we need to switch variable `changeMode` in our useState  :
```
let [mode , setMode] = useState(changeMode())
 ```


Project is visible in section [source](https://github.com/aiaaee/Change-Color-Mode-React/tree/main/ColorMode)
