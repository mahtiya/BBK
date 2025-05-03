import { create } from "zustand";

const useToken = create((set) => ({
    token: JSON.parse(localStorage.getItem("token")) || "",
    setToken: (value) => {
        localStorage.setItem("token", JSON.stringify(value))
        set({ token: value })
    },
    removeToken: () => {
        localStorage.removeItem("token")
        set({ token: "" })
    }

}))

export default useToken;