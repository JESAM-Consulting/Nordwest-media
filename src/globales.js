const { atom, selector } = require("recoil");

const tipoPersona = atom({
  key: "tipoPersona",
  default: 1
});

const charState = selector({
  key: 'charState',
  get: ({ get }) => {
    const name = get(tipoPersona);
    return name.length;
  },
});

export { tipoPersona, charState }
//  export {tipoPersona}

//  const  Context = ()=>{
//   ...
// }
// export default Context