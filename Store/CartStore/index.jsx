const { create } = require("zustand");

const useCartStore = create((set, get) => ({
  carts: [],

  addToCart: (id) => {
    set((state) => {
      const existingProductIndex = state.carts.findIndex(
        (item) => item.productId === id,
      );
      if (existingProductIndex !== -1) {
        const updatedCarts = [...state.carts];
        updatedCarts[existingProductIndex].quantity += 1;

        return {
          carts: updatedCarts,
        };
      }
      return {
        carts: [
          ...state.carts,
          {
            productId: id,
            quantity: 1,
          },
        ],
      };
    });
  },

  getCartItems: () => {
    return get().carts;
  },
  updateCartItemQuantity: (productId, quantity) => {
    set((state) => {
      const updateCarts = state.carts.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            quantity,
          };
        }
        return item;
      });
      return { carts: updateCarts };
    });
  },
  removeFromCart: (cartId) => {
    set((state) => {
      const updatedCarts = state.carts.filter(
        (item) => item.productId !== cartId,
      );

      return { carts: updatedCarts };
    });
  },
  removeAllCart: () => {
    const updateCarts = [];
    return { carts: updateCarts };
  },
}));

export default useCartStore;
