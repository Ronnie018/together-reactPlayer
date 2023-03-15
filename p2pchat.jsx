// import Gun from 'gun';

// const gun = Gun({
//   peers: ['https://7e1e-177-104-193-101.sa.ngrok.io/'],
// });

// const initialState = {
//   messages: [],
// };

// function reducer(state, message) {
//   return {
//     messages: [...state.messages, message],
//   };
// }

// function Main(props) {
//   const [form, setForm] = useState({
//     name: 'Ronnie Brito',
//     message: '',
//   });

//   const [state, dispatch] = useReducer(reducer, initialState);

//   let running = false;

//   useEffect(() => {
//     if (running) return;
//     running = true;
//     const messages = gun.get('messages');
//     const idList = [];
//     messages.map().on((m) => {
//       if (idList.includes(m.createdAt + m.name)) return;
//       idList.push(m.createdAt + m.name);
//       dispatch({
//         name: m.name,
//         message: m.message,
//         createdAt: m.createdAt,
//       });
//     });
//   }, []);

//   function saveMessage() {
//     const messages = gun.get('messages');
//     messages.set({
//       name: form.name,
//       message: form.message,
//       createdAt: Date.now(),
//     });
//     setForm(() => ({
//       name: 'Ronnie Brito',
//       message: '',
//     }));
//   }

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         saveMessage();
//       }}
//     >
//       <label htmlFor='message'>
//         message:
//         <input
//           type='text'
//           name='message'
//           id='message'
//           onChange={(e) => {
//             setForm((value) => ({ ...value, message: e.target.value }));
//           }}
//         />
//       </label>
//       <div>
//         {state.messages.map((message, i) => {
//           return (
//             <div className='message' key={i}>
//               <h2>{message.name}</h2>
//               <h3>{message.message}</h3>
//               <p>{message.createdAt}</p>
//             </div>
//           );
//         })}
//       </div>
//       <button type='submit'>send</button>
//     </form>
//   );
// }

// export default Main;
