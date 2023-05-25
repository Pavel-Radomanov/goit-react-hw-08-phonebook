import s from '../Styles.module.css';
import { useContacts } from './Hooks/hooks';

export const Filter = () => {
  const { filter, setFilter } = useContacts();
  return (
    <div className={s.cont__container}>
      <h2 className={s.home__title}>Filter contacts by name</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contact by name"
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter, getFilter } from '../../redux/slice';
// const Finder = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(getFilter);

//   const onChange = event => {
//     dispatch(setFilter(event.target.value));
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'left',
//         alignItems: 'center',
//       }}
//     >
//       <label>Find contact by name</label>
//       <input
//         style={{
//           height: '34px',
//           background: '#ccd6e3',
//           borderRadius: '6px',
//           marginLeft: '10px',
//         }}
//         type="text"
//         value={filter}
//         onChange={onChange}
//       ></input>
//     </div>
//   );
// };

// export default Finder;
