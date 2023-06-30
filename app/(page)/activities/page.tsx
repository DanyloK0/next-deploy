// import React, { useState, useRef, useEffect } from 'react';

// import './ContactForm.scss';
// import { Button } from '@/app/components/button/button';
// import { withLoadPanel } from '@/app/utils/withLoadPanel';

// const ContactFromDetailsWithLoadPanel = withLoadPanel(ContactFromDetails);

// export const ContactForm = ({ data, isLoading = false }: { data?: any, isLoading: boolean }) => {
//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState(data);
//   const dataRef = useRef<any>();

//   useEffect(() => {
//     setFormData(data);
//   }, [data]);

//   const handleEditClick = () => {
//     if(editing === false && formData) {
//       dataRef.current = formData;
//     } else {
//       dataRef.current = undefined;
//     }
//     setEditing(!editing);
//   };

//   const onSaveClick = () => {
//     handleEditClick();
//   };

//   const onCancelClick = () => {
//     setFormData(dataRef.current);
//     handleEditClick();
//   };

//   const updateField = (field: string | number) => (value: string | number) => {
//     if(!formData) return;
//     if(field === 'state') {
//       setFormData({ ...formData, ...{ [field]: { stateShort: value.toString() } } });
//     } else {
//       setFormData({ ...formData, ...{ [field]: value } });
//     }
//   };

//   return (
//     <div className='contact-form'>
//         <Button toggleEdit={handleEditClick} onSave={onSaveClick} editing={editing} onCancel={onCancelClick} label={''} />
//         <ContactFromDetailsWithLoadPanel
//           loading={isLoading}
//           hasData={!!formData}
//           data={formData}
//           editing={editing}
//           updateField={updateField}
//           panelProps={{
//             container: '.contact-form',
//             position: { of: '.contact-form' },
//           }}
//         />
//     </div>
//   );
// };
