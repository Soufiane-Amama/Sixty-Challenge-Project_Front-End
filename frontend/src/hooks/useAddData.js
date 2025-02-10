import { useState } from 'react';
import apiClient from '@/src/config/axios';
import useCustomToast from '@/src/hooks/useCustomToast';

// سياق لاضافة بيانات في الباك اند
const useAddData = (url) => {
  const [loading, setLoading] = useState(false);
  const { showToast } = useCustomToast();  

  const addItem = async (data) => {
    setLoading(true);

    try {
      // إرسال الطلب إلى الخادم
      const response = await apiClient.post(url, data);

      if (response.status === 201) {
        // console.log("Response Data: ", response.data);
        return response.data;
      } else {
        throw new Error('فشل في العملية.');
      }
    } catch (error) {
      console.error('خطأ أثناء العملية:', error);
      console.error("Error:", error.response ? error.response.data : error.message);
      showToast('حدث خطأ أثناء العملية. يرجى المحاولة مرة أخرى.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return { addItem, loading };
};

export default useAddData;