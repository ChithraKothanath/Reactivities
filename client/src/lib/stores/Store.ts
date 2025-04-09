import { Store } from "@mui/icons-material";
import CounterStores from "./ConterStores";
import { createContext } from "react";
import UiStore from "./uiStore";

interface Store {
    counterStore:CounterStores
    uiStore:UiStore
}
export const store:Store={
    counterStore:new CounterStores(),
    uiStore:new UiStore()
}

export const StoreContext=createContext(store);