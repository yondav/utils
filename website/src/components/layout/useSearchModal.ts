// import { useLocation } from '@reach/router';

// const useSearchModal = (): [boolean, Record<string, () => void>] => {
//   const { value, setTrue: openModal, setFalse: closeModal } = useBoolean(false);
//   const location = useLocation();

//   useUpdateEffect(() => {
//     closeModal();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [ location ]);

//   return [ value, { openModal, closeModal } ];
// };

// export default useSearchModal;
