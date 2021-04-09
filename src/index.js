import React from "react"
import ReactDOM from "react-dom"
import { applyMiddleware, compose, createStore } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import rootReducer from "./redux/reducers"
import App from "./App"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))

const theme = createMuiTheme({
   typography: {
      useNextVariants: true,
      htmlFontSize: 10,
      fontSize: 14,
      // fontFamily: "Roboto",
   },
   palette: {
      primary: {
         main: "#1ECCFF",
         contrastText: "#fff",
      },
      secondary: {
         main: "#00BCD4",
         contrastText: "#fff",
      },
   },
})

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <MuiThemeProvider theme={theme}>
            <App />
         </MuiThemeProvider>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
)
