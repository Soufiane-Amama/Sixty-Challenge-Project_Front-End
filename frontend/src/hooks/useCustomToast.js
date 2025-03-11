import { useToast } from "@chakra-ui/react";
// سياق ديناميكي لاظهار توست
const useCustomToast = () => {
  const toast = useToast();
  
  const showToast = (title, status) => {
    toast({
      title,
      status,
      duration: 3000,
      // isClosable: true,
    });
  };
  
  return { showToast };
};

export default useCustomToast;