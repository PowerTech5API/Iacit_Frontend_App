import {useState} from 'react';
import FormContext from '../../contexts/formContext';

const FormProvider = ({children}) => {
  const [data, setData] = useState({});
  const [isHardwareSelected, setIsHardwareSelected] = useState(false);
  const [isSoftwareSelected, setIsSoftwareSelected] = useState(false);

  const handleHardwareCheckboxChange = (value: boolean) => {
    setIsHardwareSelected(value);
    if (value) {
      setIsSoftwareSelected(false);
    }
  };

  const handleSoftwareCheckboxChange = (value: boolean) => {
    setIsSoftwareSelected(value);
    if (value) {
      setIsHardwareSelected(false);
    }
  };

  const contextValue = {
    data,
    setData,
    isHardwareSelected,
    setIsHardwareSelected,
    isSoftwareSelected,
    setIsSoftwareSelected,
    handleHardwareCheckboxChange,
    handleSoftwareCheckboxChange,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
