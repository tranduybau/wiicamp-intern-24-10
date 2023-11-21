const { create } = require("zustand");

const useStore = create((set) => ({
  keyword: "",
  setKeyword: (keyword) =>
    set((state) => ({
      ...state,
      keyword,
    })),
  clearKeyword: () =>
    set((state) => ({
      ...state,
      keyword: "",
    })),
}));

export default useStore;
